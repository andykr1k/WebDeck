import { IoConstructSharp } from "react-icons/io5";
import { SiMailchimp } from "react-icons/si";
import { motion } from 'framer-motion'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function NotFoundPage() {

  return (
    <div className='h-100vh w-100vw h-screen grid place-items-center text-center bg-greenblue m-0 p-0'>
        <div className='fixed bottom-0 left-0 z-10 p-10'>
            <a href='/'>
                <motion.button whileHover={{scale:1.2}} className='bg-raisin p-4 rounded-md' >
                    <ArrowBackIcon color='white'/>
                </motion.button>
            </a>
        </div>  
        <div className="grid place-items-center text-center">
            <IoConstructSharp size={128}/>
            <div className='font-extrabold text-lblue'>
            <h1 className="text-2xl md:text-4xl ">Under Construction</h1>
            </div>
        </div>
    </div>
  )
}

