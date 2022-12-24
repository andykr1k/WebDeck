import { CoverPage, CTAPage, InputFormPage, NotFoundPage } from './pages/index'
import { Footer, StatBubble } from './components'
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <div className="h-100vh w-100vw snap-mandatory snap-y h-screen overflow-scroll">
      <Routes>
        <Route path="/" element={
          <>
            <div className='snap-start snap-always shrink-0'>
              <CoverPage />
            </div>
            <div className='snap-start snap-always	shrink-0'>
              <CTAPage />
            </div>
            <div className='snap-end snap-always shrink-0'>
              <Footer />
            </div> 
          </>
           } />
        <Route path="get-started" element={ <InputFormPage/> } />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  )
}

export default App
