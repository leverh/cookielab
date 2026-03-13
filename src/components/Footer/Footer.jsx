import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.note}>
          This tool generates a visual starting point — not a legal compliance solution.
          Always consult your privacy policy and local regulations.
        </span>
        <a
          href="https://pixelsummit.org"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credit}
        >
          Built by PixelSummit
        </a>
      </div>
    </footer>
  )
}
