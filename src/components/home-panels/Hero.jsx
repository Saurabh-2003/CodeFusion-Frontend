import {motion} from 'framer-motion'
import {Merge, Blocks} from 'lucide-react'
import Support from './Support'
import { SVGs } from './SVGs'
import { Link } from 'react-router-dom'
export function Hero () {

    return (
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex relative  w-1/2 flex-col gap-10 mt-10 items-center justify-center min-h-[85lvh]"
      >
            <div className="h-36 w-36 bg-emerald-400 absolute z-[-2] rounded-full blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
                <SVGs />
            </div> 
                <div>
                        <h1 className="text-7xl antialiased select-none font-medium mb-10 text-center  text-stone-300">
                        Code Together, 
                        <span className=" bg-clip-text  text-transparent bg-emerald-500"> Anytime, Anywhere</span>
                        </h1>
                        <p className="text-[16px] font-medium antialiased mb-4 text-stone-300 text-center">
                        Welcome to our collaborative coding platform! Experience the power of real-time collaboration, support for multiple programming languages, vibrant themes, and secure communication with WebSockets. Dive into a seamless coding journey where creativity knows no bounds!
                        </p>
                        <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="flex rounded-lg justify-center  items-center gap-4 mx-auto w-full"
                        >
                                <Link to='/create'>
                                    <button className="bg-emerald-600 border border-emerald-400 gap-2 flex  py-2 px-4 rounded-lg transition-transform transform-gpu hover:scale-105 focus:outline-none">
                                        <Merge />Join Room
                                    </button>
                                </Link>

                                <Link to='/create'>
                                <button 
                                className="bg-neutral-700 flex gap-2 border py-2 border-neutral-600 px-4 rounded-lg transition-transform transform-gpu hover:scale-105 focus:outline-none">
                                    <Blocks/>Create Room
                                </button>
                                </Link>
                    </motion.div>
                </div>

            <Support/>
      </motion.div>
    )
}