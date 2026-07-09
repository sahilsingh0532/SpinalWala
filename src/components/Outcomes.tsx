import { motion } from 'framer-motion'
import { Plus, Activity } from 'lucide-react'

export default function Outcomes() {
  const services = [
    'Spinal Decompression',
    'Post-Operative Rehab',
    'Sports Injury Management'
  ]

  return (
    <section id="gallery" className="min-h-screen py-section-gap px-container-margin bg-surface">
      <div className="grid grid-cols-12 gap-gutter max-w-[1600px] mx-auto w-full">
        
        {/* Content Side */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-label-caps text-on-surface-variant mb-4 tracking-[0.2em] uppercase block">
              Clinical Outcomes
            </span>
            <h2 className="font-headline-lg text-primary mb-8 leading-[1.1]">
              Structural Integrity Restored.
            </h2>
            
            <ul className="border-t border-outline-variant/30 mb-8 w-full">
              {services.map((service, idx) => (
                <li key={idx} className="py-5 border-b border-outline-variant/30 flex justify-between items-center hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <span className="font-body-md text-on-surface group-hover:pl-4 transition-all duration-300 font-medium">{service}</span>
                  <Plus className="text-outline group-hover:text-primary transition-colors duration-300 group-hover:rotate-90" size={20} />
                </li>
              ))}
            </ul>
            
            <div>
              <button className="btn-secondary">View Case Studies</button>
            </div>
          </motion.div>
        </div>

        {/* Mosaic Masked Grid Side */}
        <div className="col-span-12 lg:col-span-8 lg:pl-12 mt-12 lg:mt-0">
          <div className="grid grid-cols-2 gap-unit h-[600px] lg:h-[819px] relative">
            
            {/* Main Window */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-surface relative overflow-hidden col-span-2 md:col-span-1 border border-outline-variant/20 group"
            >
              <div 
                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000"
                style={{ backgroundImage: "url('/images/image3.jpg')" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 glass-panel border-t border-outline-variant/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-headline-md text-primary mb-1">Cervical Traction</h3>
                <p className="font-body-md text-on-surface-variant text-sm">Phase 2 Protocol</p>
              </div>
            </motion.div>

            {/* Side Grid Stack */}
            <div className="grid grid-rows-2 gap-unit h-full col-span-2 md:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-surface relative overflow-hidden border border-outline-variant/20 group"
              >
                <div 
                  className="w-full h-full bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  style={{ backgroundImage: "url('/images/image4.jpg')" }}
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-surface-container-lowest relative overflow-hidden border border-outline-variant/20 flex items-center justify-center p-8 text-center group hover:bg-surface-container-high transition-colors duration-300"
              >
                <div>
                  <Activity className="w-12 h-12 text-primary mb-4 mx-auto opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" strokeWidth={1} />
                  <p className="font-body-md text-on-surface">Advanced modalities tailored to specific biomechanical deficits.</p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
