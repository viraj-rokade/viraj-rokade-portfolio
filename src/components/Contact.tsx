import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`
    window.open(mailtoLink)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className={styles.bgGlow} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.infoSide}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className={styles.infoTitle}>Let's build something amazing together</h3>
            <p className={styles.infoDesc}>
              I'm always interested in hearing about new projects, creative ideas, or opportunities
              to be part of your vision. Whether you need a full-stack solution, frontend expertise,
              or technical consultation, feel free to reach out.
            </p>

            <div className={styles.socials}>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <FiLinkedin size={20} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <FiGithub size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            className={`glass-card ${styles.form}`}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Your name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                className={styles.input}
                placeholder="your@email.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                className={styles.textarea}
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              {submitted ? 'Opening Email Client...' : <>Send Message <FiSend size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
