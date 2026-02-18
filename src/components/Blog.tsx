import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiClock, FiCalendar, FiX, FiArrowRight } from 'react-icons/fi'
import { blogPosts } from '../data/portfolio'
import type { BlogPost } from '../data/portfolio'
import styles from './Blog.module.css'

function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <FiX size={24} />
        </button>

        <div className={styles.modalBanner} style={{ background: post.gradient }}>
          <div className={styles.modalMeta}>
            <span><FiCalendar size={14} /> {post.date}</span>
            <span><FiClock size={14} /> {post.readTime}</span>
          </div>
          <h2 className={styles.modalTitle}>{post.title}</h2>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.modalTags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.modalTag}>{tag}</span>
            ))}
          </div>

          <div className={styles.modalContent}>
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={i} className={styles.contentHeading}>{paragraph.replace(/\*\*/g, '')}</h3>
              }
              if (paragraph.startsWith('**')) {
                const parts = paragraph.split('**')
                return (
                  <div key={i} className={styles.contentBlock}>
                    {parts.map((part, j) =>
                      j % 2 === 1 ? <h4 key={j} className={styles.contentSubhead}>{part}</h4> : <p key={j}>{part}</p>
                    )}
                  </div>
                )
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={i} className={styles.contentList}>
                    {paragraph.split('\n').map((item, j) => (
                      <li key={j}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={i}>{paragraph}</p>
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Blog() {
  const [selected, setSelected] = useState<BlogPost | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="blog" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Insights</div>
          <h2 className="section-title">Blog & Thoughts</h2>
          <p className="section-subtitle">
            Sharing knowledge and experiences from my journey in tech
          </p>
        </motion.div>

        <div className={styles.grid}>
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              className={styles.blogCard}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(post)}
            >
              <div className={styles.cardBanner} style={{ background: post.gradient }}>
                <div className={styles.bannerContent}>
                  <span className={styles.bannerIcon}>{post.title.charAt(0)}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span><FiCalendar size={13} /> {post.date}</span>
                  <span><FiClock size={13} /> {post.readTime}</span>
                </div>

                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                <div className={styles.cardFooter}>
                  <div className={styles.cardTags}>
                    {post.tags.map(tag => (
                      <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                  </div>
                  <span className={styles.readMore}>
                    Read More <FiArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <BlogModal post={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
