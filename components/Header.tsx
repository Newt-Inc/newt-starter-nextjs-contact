import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_Inner}>
        <Link className={styles.Title} href="/">
          <span className={styles.Title_Icon}>📨</span>
          <div className={styles.Title_Text}>Contact</div>
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
    </header>
  )
}
