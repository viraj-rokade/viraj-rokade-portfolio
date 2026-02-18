import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi'
import { experiences, Experience as ExperienceType } from '../data/portfolio'
import styles from './Experience.module.css'

function TimelineSection({ items, label, title, subtitle }: {
  items: ExperienceType[]
  label: string
  title: string
  subtitle: string
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref} className={styles.timelineSection}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </motion.div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine} />

        {items.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
          >
            <div className={styles.timelineDot}>
              {exp.type === 'work' ? <FiBriefcase size={16} /> : <FiBookOpen size={16} />}
            </div>

            <div className={`glass-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={`${styles.typeBadge} ${exp.type === 'work' ? styles.work : styles.education}`}>
                  {exp.type === 'work' ? 'Work' : 'Education'}
                </span>
                <div className={styles.meta}>
                  <span><FiCalendar size={14} /> {exp.period}</span>
                  <span><FiMapPin size={14} /> {exp.location}</span>
                </div>
              </div>

              <h3 className={styles.cardTitle}>{exp.title}</h3>
              <div className={styles.cardOrg}>{exp.organization}</div>
              <p className={styles.cardSubtitle}>{exp.subtitle}</p>
              <p className={styles.cardDesc}>{exp.description}</p>

              <ul className={styles.highlights}>
                {exp.highlights.map((h, j) => (
                  <li key={j} className={styles.highlight}>
                    <span className={styles.highlightDot} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className={styles.tags}>
                {exp.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const workExperiences = experiences.filter(e => e.type === 'work')
  const educationExperiences = experiences.filter(e => e.type === 'education')

  return (
    <section id="experience" className="section">
      <div className={styles.bgGlow} />

      <div className="container">
        <TimelineSection
          items={workExperiences}
          label="Career"
          title="Professional Experience"
          subtitle="A timeline of my professional growth and contributions"
        />

        <TimelineSection
          items={educationExperiences}
          label="Academics"
          title="Education"
          subtitle="My academic journey and achievements"
        />
      </div>
    </section>
  )
}
