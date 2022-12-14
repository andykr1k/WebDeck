import '../styles/App.css'
import { Banner, StatBubble } from '../components/index'

export default function CoverPage() {

  return (
    <div className='grid place-items-center min-h-screen bg-greenblue'>
      <div>
        <div className='text-6xl md:text-8xl font-extrabold text-lblue'>
          <h1>WebDeck</h1>
        </div>
        <div className='flex justify-center items-center p-10'>
          <div className="mouse"></div>
        </div>
      </div>
    </div>
  )
}

