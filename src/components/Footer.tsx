export default function Footer() {
  return (
    <footer id="contact" className="bg-surface-container-low border-t border-outline-variant/30 py-12 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-container-margin gap-4 md:gap-gutter max-w-[1600px] mx-auto">
        
        <div className="font-label-caps text-primary mb-4 md:mb-0 uppercase tracking-widest text-lg">
          The SpineWala Clinic
        </div>
        
        <div className="flex gap-8 mb-6 md:mb-0">
          <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Terms of Service</a>
          <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Accessibility</a>
        </div>
        
        <div className="font-label-caps text-on-surface-variant text-sm tracking-wider text-center md:text-right">
          © {new Date().getFullYear()} CLINICAL MINIMALISM. ALL RIGHTS RESERVED.
        </div>
        
      </div>
    </footer>
  )
}
