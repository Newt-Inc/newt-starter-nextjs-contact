import Link from 'next/link'
import styles from '@/styles/Complete.module.css'

export default function Page() {
  return (
    <div className={styles.Complete}>
      <svg
        width="58"
        height="58"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.Complete_Icon}
      >
        <path
          d="M24.723 42.195 45.24 21.677l-3.335-3.262-17.183 17.182-8.7-8.7-3.262 3.263 11.963 12.035ZM29 58c-3.963 0-7.71-.761-11.238-2.284-3.528-1.522-6.61-3.6-9.243-6.235-2.634-2.634-4.713-5.715-6.235-9.244C.76 36.71 0 32.963 0 29c0-4.012.761-7.782 2.284-11.31 1.522-3.528 3.6-6.598 6.235-9.208 2.634-2.61 5.715-4.676 9.243-6.198C21.291.76 25.038 0 29 0c4.012 0 7.782.761 11.31 2.284 3.528 1.522 6.597 3.588 9.207 6.199 2.61 2.61 4.677 5.679 6.2 9.207C57.238 21.218 58 24.988 58 29c0 3.963-.761 7.71-2.284 11.237-1.522 3.529-3.589 6.61-6.199 9.244-2.61 2.634-5.679 4.713-9.207 6.235C36.782 57.24 33.012 58 29 58Zm0-4.35c6.863 0 12.688-2.405 17.472-7.214C51.257 41.627 53.65 35.815 53.65 29c0-6.863-2.392-12.688-7.178-17.473C41.688 6.744 35.863 4.35 29 4.35c-6.815 0-12.627 2.393-17.436 7.178C6.754 16.311 4.35 22.136 4.35 29c0 6.815 2.405 12.627 7.214 17.436C16.373 51.246 22.185 53.65 29 53.65Z"
          fill="#006CDC"
          fillRule="nonzero"
        />
      </svg>
      <h1 className={styles.Complete_Title}>Thank you!</h1>
      <p className={styles.Complete_Text}>Your submission has been received.</p>
      <div className={styles.Complete_Link}>
        <Link href="/">Back to Previous Page</Link>
      </div>
    </div>
  )
}
