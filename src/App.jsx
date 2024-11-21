import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import Dashboard from "./pages/Host-page/Dashboard"
import HostLayout from "./pages/Host-page/HostLayout"
import Income from "./pages/Host-page/Income"
import Reviews from "./pages/Host-page/Reviews"
import Hostvan from "./pages/Host-page/Hostvan"
import "./server"
import VanDetail from "./pages/VanDetail"
import Layout from "./components/Layout"

function App() {
  return(
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/van" element={<Vans />} />
              <Route path="/van/:id" element={<VanDetail />} />


              <Route path="host" element={<HostLayout/>}>
                <Route index element={<Dashboard />} />
                <Route path="Income" element={<Income />} />
                <Route path="Hostvan" element={<Hostvan />} />
                <Route path="Reviews" element={<Reviews />}/>
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
