import { getBannerHTML } from '../../utils/generateCode'
import styles from './Preview.module.css'

export default function Preview({ state }) {
  const isCorner = state.pos === 'corner'
  const isTop = state.pos === 'top'

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>Live preview</div>
      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <div className={styles.dots}>
            <span /><span /><span />
          </div>
          <div className={styles.addressBar}>yoursite.com</div>
        </div>
        <div className={styles.viewport}>
          <div className={styles.fakePage}>
            <div className={styles.fakeNav} />
            <div className={styles.fakeContent}>
              <div className={styles.fakeLine} style={{ width: '60%' }} />
              <div className={styles.fakeLine} style={{ width: '90%' }} />
              <div className={styles.fakeLine} style={{ width: '75%' }} />
              <div className={styles.fakeLine} style={{ width: '85%' }} />
              <div className={styles.fakeLine} style={{ width: '50%' }} />
              <div className={styles.fakeLine} style={{ width: '80%' }} />
            </div>
          </div>

          <div
            className={`
              ${styles.bannerWrap}
              ${isCorner ? styles.corner : ''}
              ${isTop ? styles.top : styles.bottom}
            `}
            dangerouslySetInnerHTML={{ __html: getBannerHTML(state) }}
          />
        </div>
      </div>
    </div>
  )
}
