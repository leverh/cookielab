import { useState } from 'react'
import { getFullHTML, getJS } from '../../utils/generateCode'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import styles from './CodeOutput.module.css'

const TABS = [
  { id: 'html', label: 'HTML + CSS' },
  { id: 'js', label: 'JavaScript' },
]

export default function CodeOutput({ state }) {
  const [activeTab, setActiveTab] = useState('html')
  const { copied, copy } = useCopyToClipboard()

  const code = activeTab === 'html' ? getFullHTML(state) : getJS(state.output)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          className={`${styles.copyBtn} ${copied ? styles.copySuccess : ''}`}
          onClick={() => copy(code)}
        >
          {copied ? '✓ Copied!' : 'Copy code'}
        </button>
      </div>
      <pre className={styles.code}>{code}</pre>
      <div className={styles.footer}>
        <span className={styles.footerNote}>
          {activeTab === 'html'
            ? 'Paste this inside your <body> tag, ideally just before </body>.'
            : 'Paste this in a <script> tag, or add to your existing JS file.'}
        </span>
      </div>
    </div>
  )
}
