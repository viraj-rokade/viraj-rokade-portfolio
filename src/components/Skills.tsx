import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data/portfolio'
import type { Skill } from '../data/portfolio'
import styles from './Skills.module.css'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'devops', label: 'DevOps & Cloud' },
  { key: 'tools', label: 'Tools' },
] as const

export default function Skills() {
  const [filter, setFilter] = useState<string>('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  const filtered = filter === 'all' ? skills : skills.filter(s => s.category === filter)

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I've mastered over 8+ years of building web applications
          </p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`${styles.filterBtn} ${filter === cat.key ? styles.active : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
              {filter === cat.key && (
                <motion.div className={styles.filterActive} layoutId="skillFilter" />
              )}
            </button>
          ))}
        </motion.div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((skill: Skill, i: number) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div
                  className={styles.iconWrap}
                  style={{ '--skill-color': skill.color } as React.CSSProperties}
                >
                  <skill.icon size={28} />
                </div>
                <span className={styles.skillName}>{skill.name}</span>
                <div className={styles.glow} style={{ background: skill.color }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className={styles.proficiencies}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {[
            'Front End Development',
            'Software & Web Development',
            'User Experience Improvement',
            'Performance Optimization',
            'Data Visualization',
            'Responsive Web Design',
            'Agile Methodologies',
            'Project Management',
          ].map((prof, i) => (
            <span key={prof} className={styles.profBadge}>
              {prof}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
