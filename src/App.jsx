import { CoverPage, CTAPage, InputFormPage } from './pages/index'
import { Footer, StatBubble } from './components'
function App() {

  return (
    <div className="h-100vh w-100vw snap-mandatory snap-y h-screen overflow-scroll">
      <div className='snap-start shrink-0'>
        <CoverPage />
      </div>
      <div className='snap-start shrink-0'>
        <CTAPage />
      </div>
      <div className='snap-start shrink-0'>
        <InputFormPage />
      </div>
      <div className='snap-end shrink-0'>
        <Footer />
      </div>
    </div>
  )
}

export default App
