import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 300])

  const features = [
    { number: '01', title: 'Assessment' },
    { number: '02', title: 'Treatment' },
    { number: '03', title: 'Recovery' }
  ]

  return (
    <section id="services" className="min-h-screen relative flex flex-col justify-between pt-32 pb-container-margin px-container-margin overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-[-2] w-full h-[120%]"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/image1.jpg")' }}
        />
      </motion.div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-[-1] bg-surface/60 backdrop-blur-[2px]"></div>

      <div className="grid grid-cols-12 gap-gutter mt-16 md:mt-32 max-w-[1600px] mx-auto w-full">
        <div className="col-span-12 md:col-span-8 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display-xl text-primary mb-6 uppercase leading-[0.9]">
              Physiotherapy<br />Care
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-md mb-8">
              Precision treatment protocols utilizing advanced biomechanical analysis to restore optimal function and alleviate pain.
            </p>
            <button className="btn-primary">Discover Protocols</button>
          </motion.div>
        </div>
      </div>

      {/* Bento Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-unit mt-16 max-w-[1600px] mx-auto w-full">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
            className="glass-panel p-6 border border-outline-variant/30 flex justify-between items-end h-32 hover:bg-surface-container-high transition-colors group cursor-pointer"
          >
            <div>
              <span className="block font-label-caps text-on-surface-variant mb-2">{feature.number}</span>
              <span className="font-headline-md text-primary group-hover:pl-2 transition-all duration-300">{feature.title}</span>
            </div>
            <ArrowRight className="text-primary transform group-hover:translate-x-2 transition-transform duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
