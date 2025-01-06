
import { useNavigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import AboutUsPage from './pages/aboutUsPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import InstructionsPage from './pages/instructionsPage'
import MyTripsPage from './pages/MyTripsPage'
import AddNewTripPage from './pages/AddNewTripPage'
import TripDetailsPage from './pages/TripDetailsPage'
import EditPage from './pages/EditPage'
import { useEffect, useState } from "react";

function App() {

  //usestate to load in the trips data
  const [trips, setTrips] = useState([])

  // Fetch the database with useefect async on mounting

  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await fetch('http://localhost:4000/trips')

        if (response.ok) {
          const tripsData = await response.json();
          console.log(tripsData);
          setTrips(tripsData);
        }
      } catch (error) {
        console.log(error)
      }
    }

    //call the function otherwise nothing happens
    fetchTrips();
  }, [])

  const navigate = useNavigate();

  //creating the function that is in charge of deleting a trip
  async function handleDelete(id) {

    try {
      const response = await fetch(`http://localhost:4000/trips//${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updateTripList = trips.filter(currentTrip => currentTrip.id !== id);
        setTrips(updateTripList);
        navigate("/my-trips")

      }
    } catch (error) {
      console.log(error)
    }



  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/instructions" element={<InstructionsPage />} /> {/* I thought may be we can put a page to tell what they can do in the page? */}

        <Route path="/my-trips" element={<MyTripsPage trips={trips} handleDelete={handleDelete} />} />

        <Route path="/trip/:tripId" element={<TripDetailsPage trips={trips} handleDelete={handleDelete} />} />

        <Route path="/trip/new" element={<AddNewTripPage trips={trips} setTrips={setTrips} />} />

        <Route path="/about-us" element={<AboutUsPage />} /> {/* I added an about us to put something about us, we can delete it if you dont want it */}
        <Route path="/edit" element={<EditPage />} /> {/* */}

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
