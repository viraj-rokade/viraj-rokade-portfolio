import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiX, FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import styles from './Projects.module.css'

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
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
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <FiX size={24} />
        </button>

        <div className={styles.modalBanner} style={{ background: project.gradient }}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalSubtitle}>{project.subtitle}</p>
        </div>

        <div className={styles.modalBody}>
          {project.stats && (
            <div className={styles.modalStats}>
              {project.stats.map(stat => (
                <div key={stat.label} className={styles.modalStat}>
                  <span className={styles.modalStatValue}>{stat.value}</span>
                  <span className={styles.modalStatLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className={styles.modalDesc}>
            {project.longDescription.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className={styles.modalSection}>
            <h4>Key Highlights</h4>
            <ul className={styles.modalHighlights}>
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <FiChevronRight size={16} className={styles.checkIcon} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.modalTags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.modalTag}>{tag}</span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className={styles.modalLinks}>
              {project.links.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  {link.label.toLowerCase().includes('github') ? <FiGithub /> : <FiExternalLink />}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of applications and platforms I've built and shipped
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(project)}
            >
              <div className={styles.cardPreview} style={{ background: project.gradient }}>
                <div className={styles.previewContent}>
                  <span className={styles.previewIcon}>{project.title.charAt(0)}</span>
                </div>
                <div className={styles.cardOverlay}>
                  <span className={styles.viewBtn}>View Details</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.cardTags}>
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className={styles.cardTag}>{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className={styles.cardTag}>+{project.tags.length - 3}</span>
                  )}
                </div>

                {project.stats && (
                  <div className={styles.cardStats}>
                    {project.stats.slice(0, 2).map(stat => (
                      <div key={stat.label} className={styles.cardStat}>
                        <span className={styles.cardStatValue}>{stat.value}</span>
                        <span className={styles.cardStatLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
