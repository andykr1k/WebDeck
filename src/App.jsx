import { InputFormPage, NotFoundPage, HomePage } from './pages/index'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="get-started" element={ <InputFormPage/> } />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
  )
}

export default App
