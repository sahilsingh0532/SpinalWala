import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 800
    const intervalTime = 20
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 300)
          return 100
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-[100] bg-surface flex flex-col justify-end p-container-margin"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display-xl text-primary tracking-tighter"
      >
        {Math.floor(count)}%
      </motion.div>
    </motion.div>
  )
}
