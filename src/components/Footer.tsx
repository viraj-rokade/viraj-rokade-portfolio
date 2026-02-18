import { FiHeart, FiLinkedin, FiGithub } from 'react-icons/fi'
import { personalInfo, navLinks } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />

      <div className={`container ${styles.content}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>VR</span>
            <div>
              <div className={styles.name}>{personalInfo.name}</div>
              <div className={styles.role}>{personalInfo.title}</div>
            </div>
          </div>

          <nav className={styles.nav}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.socials}>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FiLinkedin size={18} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FiGithub size={18} />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with <FiHeart size={14} className={styles.heart} /> using React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  )
}
