import {motion} from 'framer-motion'

export default function AboutPage() {
  return (
    <div className='min-h-screen text-lblue bg-greenblue p-3 space-y-4'>
      <div className="bg-raisin/25 rounded-md p-3 text-center top-0 ">
        <h2 className="text-3xl font-semibold">About Us</h2>
      </div>
      <div className="bg-raisin/25 rounded-md text-center">
        <h3 className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
      </div>
      <div className='fixed bottom-0 left-0 z-10 p-10 '>
            <a href='/'>
                <motion.button whileHover={{scale:1.2}} className='bg-raisin/25 p-4 rounded-md font-bold shadow-raisin shadow-sm' >
                    Home
                </motion.button>
            </a>
        </div>
    </div>
  )
}