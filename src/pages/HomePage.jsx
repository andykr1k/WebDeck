import { CoverPage, CTAPage } from './index'
import { useDisclosure } from '@chakra-ui/react'
import { Footer } from '../components/index'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,DrawerContent, DrawerCloseButton} from '@chakra-ui/react'
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="snap-y snap-mandatory h-100vh w-100vw h-screen w-screen overflow-y-scroll snap-always">
        <div className='snap-start'>
            <CoverPage />
        </div>
        <div className='snap-start'>
            <CTAPage />
        </div>
        <div className='absolute z-10 left-0 top-0 p-10'>
        <button className='w-30 h-30' onClick={() => onOpen()}>{<AiOutlineInfoCircle size={28} style={{ fill: '#C0E0DE' }}/>}</button>
        </div>
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen} m={0} size={'lg'}>
            <DrawerOverlay className='bg-raisin' />
            <DrawerContent>
            <DrawerCloseButton color={'#C0E0DE'}/>
                <Footer/>
            </DrawerContent>
          </Drawer>
    </div>
  )
}

