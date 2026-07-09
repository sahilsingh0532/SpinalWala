import { motion } from 'framer-motion'
import { Settings2, BarChart2 } from 'lucide-react'
import image5 from '../assets/image5.jpg'
import image2 from '../assets/image2.jpg'

export default function About() {
  return (
    <section id="about" className="min-h-screen relative py-section-gap px-container-margin flex flex-col justify-center bg-surface-container-lowest overflow-hidden">
      <div className="grid grid-cols-12 gap-gutter relative z-10 max-w-[1600px] mx-auto w-full items-center">
        
        {/* Text Content */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-2 order-2 lg:order-1 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline-lg text-primary mb-6 leading-tight">
              Advanced Chiropractic Integration
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-lg">
              Structural realignment requires precision. We utilize state-of-the-art diagnostic imaging combined with targeted manipulation techniques to restore neuro-musculoskeletal integrity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="border border-outline-variant/30 p-8 bg-surface hover:shadow-lg transition-all duration-300 group"
              >
                <BarChart2 className="text-outline group-hover:text-primary transition-colors duration-300 mb-6 w-8 h-8" />
                <h4 className="font-headline-md text-primary text-lg mb-2">Gait Analysis</h4>
                <p className="font-body-md text-on-surface-variant text-sm">Comprehensive biomechanical assessment.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="border border-outline-variant/30 p-8 bg-surface hover:shadow-lg transition-all duration-300 group"
              >
                <Settings2 className="text-outline group-hover:text-primary transition-colors duration-300 mb-6 w-8 h-8" />
                <h4 className="font-headline-md text-primary text-lg mb-2">Mobilization</h4>
                <p className="font-body-md text-on-surface-variant text-sm">Targeted joint specific therapies.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Overlapping Images */}
        <div className="col-span-12 lg:col-span-6 relative order-1 lg:order-2 h-[500px] lg:h-[700px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full relative"
          >
            <img 
              src={image2}  
              alt="Chiropractic Adjustment" 
              className="w-full h-full object-cover filter grayscale sepia-[0.05] contrast-[1.1] rounded-sm" 
            />
            
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 w-48 h-48 md:w-72 md:h-72 border-4 border-surface-container-lowest bg-surface-container-lowest shadow-2xl z-20 overflow-hidden rounded-sm hidden sm:block"
            >
              <img 
                src={image5}
                alt="Diagnostic Scan" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
              />
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
