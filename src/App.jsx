
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route to="/" elemnt="" />
        <Route to="/my-trips" elemnt="" />
        <Route to="/trip/:tripId" elemnt="" />
        <Route to="*" elemnt="" />

      </Routes>

    </>
  )
}

export default App
