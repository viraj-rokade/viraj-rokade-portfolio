import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCode, FiUsers, FiCloud } from 'react-icons/fi'
import { personalInfo, certifications } from '../data/portfolio'
import styles from './About.module.css'

const highlights = [
  { icon: FiCode, label: 'Full Stack', desc: 'React, Node.js, TypeScript' },
  { icon: FiUsers, label: 'Team Leader', desc: 'Scrum Master & Mentor' },
  { icon: FiCloud, label: 'Cloud', desc: 'Integration & Migration' },
  { icon: FiAward, label: 'Co-Founder', desc: 'Built startup from ground up' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="section" ref={ref}>
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className="container">
        <motion.div
          className={styles.mobileProfileImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.profileImageWrapper}>
            <img src="/profile.jpeg" alt={personalInfo.name} className={styles.profileImage} />
          </div>
        </motion.div>

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">Turning Ideas Into Digital Reality</h2>
          <p className="section-subtitle">
            Passionate about building products that make a difference
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className={styles.paragraph}>
              {personalInfo.summary}
            </p>
            <p className={styles.paragraph}>
              My journey spans from co-founding a tech startup in Mumbai where I led a team of 8
              and delivered 20+ projects, to building enterprise-grade applications at ADP serving
              thousands of users. I thrive at the intersection of design and engineering, creating
              experiences that are both beautiful and performant.
            </p>

            <div className={styles.certCard}>
              {certifications.map(cert => (
                <a key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.certItem}>
                  <cert.icon size={28} color={cert.color} />
                  <div>
                    <strong>{cert.name}</strong>
                    <span>{cert.issuer} &middot; {cert.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className={styles.profileImageWrapper}>
              <img src="/profile.jpeg" alt={personalInfo.name} className={styles.profileImage} />
            </div>

            <div className={styles.highlights}>
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className={`glass-card ${styles.highlightCard}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={styles.highlightIcon}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className={styles.highlightLabel}>{item.label}</h4>
                  <p className={styles.highlightDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
