
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import AboutUsPage from './pages/aboutUsPage'
import NotFoundPage from './pages/notfoundPage'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/instructions" element={""} /> {/* I thought may be we can put a page to tell what they can do in the page? */}

        <Route path="/my-trips" element={""} />

        <Route path="/trip/:tripId" element={""} />

        <Route path="/trip/new" element={""} />

        <Route path="/about-us" element={<AboutUsPage />} /> {/* I added an about us to put something about us, we can delete it if you dont want it */}

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
