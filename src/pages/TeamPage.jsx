import { useDisclosure } from '@chakra-ui/react'
import { Footer } from '../components/index'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,DrawerContent, DrawerCloseButton} from '@chakra-ui/react'
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function TeamPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className='absolute z-10 left-0 top-0 p-10'>
        <button className='w-30 h-30' aria-label="close" onClick={() => onOpen()}>{<AiOutlineInfoCircle size={28} style={{ fill: '#6f5f52' }}/>}</button>
        </div>
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen} m={0} size={'lg'}>
            <DrawerOverlay className='bg-raisin' />
            <DrawerContent>
            <DrawerCloseButton color={'#C0E0DE'}/>
                <Footer/>
            </DrawerContent>
          </Drawer>
      <div className="w-full max-w-3xl p-6">
        <h1 className="text-3xl font-medium text-center mb-4 text-gray-800">Our Team</h1>
        <p className="text-lg leading-relaxed mb-4 text-center">
          <span className="text-blue-600 font-medium">Webdeck</span> is a website dedicated to showcasing the latest and greatest in web development. We feature a wide range of tutorials, articles, and resources to help developers improve their skills and stay up-to-date with the latest trends and technologies.
        </p>
        <p className="text-lg leading-relaxed text-center">
          Our team of experienced developers and designers work hard to create high-quality content that is both informative and easy to understand. We believe that everyone should have access to the tools and knowledge they need to create amazing websites and web applications.
        </p>
        <div className="flex justify-center my-4">
          <a href="/" className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700">Visit our Website</a>
        </div>
      </div>
    </div>
  )
}