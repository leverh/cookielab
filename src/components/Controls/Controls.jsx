import styles from './Controls.module.css'

const POSITIONS = [
  { val: 'bottom', label: 'Bottom bar' },
  { val: 'top', label: 'Top bar' },
  { val: 'corner', label: 'Corner popup' },
]

const ANIMATIONS = [
  { val: 'slide', label: 'Slide in' },
  { val: 'fade', label: 'Fade in' },
  { val: 'none', label: 'None' },
]

const OUTPUT_TYPES = [
  { val: 'both', label: 'HTML + JS' },
  { val: 'html', label: 'HTML only' },
]

function SectionTitle({ children }) {
  return <div className={styles.sectionTitle}>{children}</div>
}

function Field({ label, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}

function SegmentedControl({ options, value, onChange }) {
  return (
    <div className={styles.seg}>
      {options.map((opt) => (
        <button
          key={opt.val}
          className={`${styles.segBtn} ${value === opt.val ? styles.segActive : ''}`}
          onClick={() => onChange(opt.val)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

function ColorField({ label, id, value, onChange }) {
  return (
    <div className={styles.colorField}>
      <label className={styles.colorLabel}>{label}</label>
      <div className={styles.colorInputWrap}>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          className={styles.colorInput}
        />
        <span className={styles.colorHex}>{value}</span>
      </div>
    </div>
  )
}

export default function Controls({ state, update }) {
  return (
    <aside className={styles.panel}>
      <div className={styles.section}>
        <SectionTitle>Text content</SectionTitle>
        <Field label="Banner message">
          <textarea
            className={styles.textarea}
            value={state.msg}
            onChange={(e) => update('msg', e.target.value)}
            rows={3}
          />
        </Field>
        <div className={styles.twoCol}>
          <Field label="Accept button">
            <input
              type="text"
              className={styles.input}
              value={state.btnAccept}
              onChange={(e) => update('btnAccept', e.target.value)}
            />
          </Field>
          <Field label="Decline button">
            <input
              type="text"
              className={styles.input}
              value={state.btnDecline}
              onChange={(e) => update('btnDecline', e.target.value)}
            />
          </Field>
        </div>
        <Field label="Learn more link text (optional)">
          <input
            type="text"
            className={styles.input}
            value={state.learnMore}
            onChange={(e) => update('learnMore', e.target.value)}
            placeholder="e.g. Privacy Policy"
          />
        </Field>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <SectionTitle>Colors</SectionTitle>
        <div className={styles.colorGrid}>
          <ColorField label="Background" id="cBg" value={state.cBg} onChange={update} />
          <ColorField label="Text" id="cText" value={state.cText} onChange={update} />
          <ColorField label="Accept button" id="cAccept" value={state.cAccept} onChange={update} />
          <ColorField label="Decline button" id="cDecline" value={state.cDecline} onChange={update} />
          <ColorField label="Button text" id="cBtnText" value={state.cBtnText} onChange={update} />
          <ColorField label="Link color" id="cLink" value={state.cLink} onChange={update} />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <SectionTitle>Position</SectionTitle>
        <SegmentedControl
          options={POSITIONS}
          value={state.pos}
          onChange={(val) => update('pos', val)}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <SectionTitle>Animation</SectionTitle>
        <SegmentedControl
          options={ANIMATIONS}
          value={state.anim}
          onChange={(val) => update('anim', val)}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <SectionTitle>Output type</SectionTitle>
        <SegmentedControl
          options={OUTPUT_TYPES}
          value={state.output}
          onChange={(val) => update('output', val)}
        />
        <p className={styles.hint}>
          {state.output === 'both'
            ? 'Includes JavaScript to dismiss the banner and remember the choice via localStorage.'
            : 'HTML and CSS only — wire up your own dismiss logic.'}
        </p>
      </div>
    </aside>
  )
}
