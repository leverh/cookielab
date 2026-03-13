import { useBannerState } from './hooks/useBannerState'
import Header from './components/Header/Header'
import Controls from './components/Controls/Controls'
import Preview from './components/Preview/Preview'
import CodeOutput from './components/CodeOutput/CodeOutput'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  const { state, update } = useBannerState()

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          <Controls state={state} update={update} />
          <div className={styles.rightCol}>
            <Preview state={state} />
            <CodeOutput state={state} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
