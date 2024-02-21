import {motion} from 'framer-motion'

export function Testimonials () {

    return(
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="mt-10 px-8 w-full max-w-4xl"
      >
        <h2 className="text-5xl bg-emerald-500 bg-clip-text text-center font-bold mb-4 text-transparent">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          {/* Testimonial 1 */}
          <div className="bg-primary relative rounded-xl overflow-hidden border-2 border-neutral-700 p-6">
            <p className="text-lg text-neutral-500 mb-4">
              "Collaborating with my team has never been easier. This platform
              has revolutionized our workflow."
            </p>
            <p className="text-neutral-400">@ John Doe, Senior Developer</p>
           
          </div>
          {/* Testimonial 2 */}
          <div className="bg-primary relative rounded-xl overflow-hidden border-2 border-neutral-700 p-6">
            <p className="text-lg text-neutral-500 mb-4">
              "The real-time updates make it effortless to work on projects
              together, even when we're miles apart."
            </p>
            <p 
            className="text-neutral-400">@ Jane Smith, Software Engineer</p>
            {/* <div
            style={{ background: 'radial-gradient(120px 120px at 30% 100%, rgba(133, 224, 183, 0.25), transparent)' }} 
            className="absolute inset-0 z-0 overflow-hidden" /> */}
          </div>
        </div>
      </motion.div>
    )
}