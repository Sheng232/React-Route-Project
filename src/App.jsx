import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Vans from "./pages/Vans"
import "./server"
import VanDetail from "./pages/VanDetail"

function App() {
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/van" element={<Vans />} />
          <Route path="/van/:id" element={<VanDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
