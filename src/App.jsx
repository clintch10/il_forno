import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'
import HomePage from './components/pages/HomePage'
import MenuPage from './components/pages/MenuPage'
import { Routes, Route} from 'react-router-dom'
import AboutPage from './components/pages/AboutPage'
import ScrollToTop from './assets/js/ScrollToTop'
import ContactPage from './components/pages/ContactPage'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
