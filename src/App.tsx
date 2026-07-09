import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Outcomes from './components/Outcomes'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  // Block scrolling while splash is visible
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showSplash])

  return (
    <div className="relative min-h-screen bg-background text-on-background selection:bg-primary/20 selection:text-primary">
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Outcomes />
            <About />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
