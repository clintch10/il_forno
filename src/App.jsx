import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'
import HomePage from './components/pages/HomePage'
import MenuPage from './components/pages/MenuPage'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './components/pages/AboutPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component= { HomePage }/>
        <Route path='/menu' Component= { MenuPage }/>
        <Route path='/about' Component= { AboutPage }/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
