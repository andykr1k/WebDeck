import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {InputForm} from '../components/index'
import { handleSubmit } from '../functions/index'

export default function InputFormPage() {

    return (
    <div className='flex justify-center items-center min-h-screen bg-raisin'>
        <InputForm/>
        <div className='fixed bottom-0 left-0 z-10 p-10 '>
            <a href='/'>
                <motion.button whileHover={{scale:1.2}} className='bg-lblue p-4 rounded-md flex justify-center items-center gap-1 font-bold shadow-raisin shadow-sm' >
                    Home
                </motion.button>
            </a>
        </div>

    </div>
    )
}