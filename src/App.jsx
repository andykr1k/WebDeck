import { InputFormPage, NotFoundPage, HomePage, AboutPage, AccessPage, TeamPage, TermsPage, PolicyPage, StackPage } from './pages/index'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="get-started" element={ <InputFormPage/> } />
        <Route path='*' element={<NotFoundPage />}/>
        <Route path="/about" element={ <AboutPage/>} />
        <Route path="/access" element={ <AccessPage/>} />
        <Route path="/policy" element={ <PolicyPage/>} />
        <Route path="/team" element={ <TeamPage/>} />
        <Route path="/terms" element={ <TermsPage/>} />
        <Route path="/team" element={ <TeamPage/>} />
        <Route path="/stack" element={ <StackPage/>} />
      </Routes>
  )
}

export default App
