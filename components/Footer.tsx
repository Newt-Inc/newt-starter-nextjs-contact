import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_Inner}>
        <Link className={styles.SiteName} href="/">
          <span className={styles.SiteName_Icon}>📨</span>
          <div className={styles.SiteName_Text}>Contact</div>
        </Link>
        <div className={styles.Link}>
          <a
            href="https://github.com/Newt-Inc/newt-starter-nextjs-contact"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
