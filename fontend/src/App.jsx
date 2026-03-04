
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Room from './pages/Room.jsx'
import Booking from './pages/Booking.jsx'
import Hotel from './pages/Hotel.jsx'
import Navbar from './components/Navbar.jsx'
import ChatPopup from './components/ChatPopup.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/room' element={<Room/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/hotel' element={<Hotel/>} />
      </Routes>

    </div>
  )
}

export default App
