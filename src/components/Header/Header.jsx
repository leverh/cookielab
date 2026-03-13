import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
            <rect width="28" height="28" rx="6" fill="#4f46e5" />
            <rect x="5" y="17" width="18" height="6" rx="2" fill="white" />
            <circle cx="9" cy="20" r="1.5" fill="#4f46e5" />
            <rect x="12" y="18.5" width="7" height="3" rx="1" fill="#4f46e5" opacity="0.35" />
            <rect x="5" y="5" width="18" height="3" rx="1" fill="white" opacity="0.45" />
            <rect x="5" y="10" width="12" height="3" rx="1" fill="white" opacity="0.45" />
          </svg>
          <span className={styles.logoText}>CookieLab</span>
        </div>
        <div className={styles.tagline}>
          <p className={styles.description}>
            Design and generate a custom cookie consent banner for your website.
            Customize the look, copy the code, drop it in.
          </p>
          <span className={styles.badge}>No coding required</span>
        </div>
      </div>
    </header>
  )
}
