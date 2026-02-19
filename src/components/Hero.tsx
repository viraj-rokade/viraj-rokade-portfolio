import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from '../data/portfolio'
import ParticleField from './ParticleField'
import styles from './Hero.module.css'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        )
      }, isDeleting ? 30 : 80)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <ParticleField />
      <div className={styles.heroGlow} />

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.badgeDot} />
          Available for opportunities
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I'm <span className={styles.name}>{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          className={styles.roleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className={styles.rolePrefix}>{"< "}</span>
          <span className={styles.role}>{displayText}</span>
          <span className={styles.cursor}>|</span>
          <span className={styles.rolePrefix}>{" />"}</span>
        </motion.div>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {personalInfo.shortBio}
        </motion.p>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className={styles.stat}>
            <span className={styles.statValue}>{personalInfo.yearsExp}</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>20+</span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>100K+</span>
            <span className={styles.statLabel}>Users Impacted</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <button className="btn btn-primary" onClick={scrollToAbout}>
            Explore My Work <FiArrowRight />
          </button>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            <FiMail /> Get In Touch
          </a>
        </motion.div>

        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToAbout}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}
