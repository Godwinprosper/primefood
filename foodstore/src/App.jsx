import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { MenuPage } from './pages/menu/MenuPage'
import { ReservationPage } from './pages/ReservationPage'
import { AboutPage } from './pages/AboutPage'

function App() {

  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<HomePage/>} />
        < Route path='/menu' element={<MenuPage/>} />
        < Route path='/reservation' element={<ReservationPage/>} />
        < Route path='/about' element={<AboutPage/>} />
      </Routes>
    </div>
  )
}

export default App
