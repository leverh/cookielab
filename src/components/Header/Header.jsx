import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
  <circle cx="24" cy="22" r="17" fill="#4f46e5"/>
  <circle cx="17" cy="17" r="2.8" fill="white" opacity="0.95"/>
  <circle cx="28" cy="13" r="2" fill="white" opacity="0.6"/>
  <circle cx="32" cy="24" r="2.4" fill="white" opacity="0.75"/>
  <circle cx="20" cy="28" r="1.6" fill="white" opacity="0.55"/>
  <circle cx="27" cy="29" r="1.2" fill="white" opacity="0.4"/>
  <circle cx="22" cy="20" r="1" fill="white" opacity="0.3"/>
  {/* <rect x="4" y="34" width="40" height="10" rx="3" fill="#3730a3"/>
  <rect x="8" y="37" width="14" height="4" rx="1.5" fill="white" opacity="0.4"/>
  <rect x="30" y="37" width="10" height="4" rx="1.5" fill="white" opacity="0.9"/> */}
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
