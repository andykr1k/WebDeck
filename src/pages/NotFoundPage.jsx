import { IoConstructSharp } from "react-icons/io5";
import { SiMailchimp } from "react-icons/si";
import { motion } from 'framer-motion'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function NotFoundPage() {

  return (
    <div class="grid h-screen px-4 bg-white place-content-center bg-raisin">
  <div class="text-center">
    <h1 class="font-black text-lblue text-9xl">404</h1>

    <p class="text-2xl font-bold tracking-tight text-lblue sm:text-4xl">
      Uh-oh!
    </p>

    <p class="mt-4 text-lblue">We can't find that page.</p>

    <a
      href="/"
      class="inline-block px-5 py-3 mt-6 text-sm font-medium text-lblue bg-indigo-600 rounded hover:bg-indigo-700 border-lblue border-2 focus:outline-none focus:ring"
    >
      Go Back Home
    </a>
  </div>
</div>
  )
}

