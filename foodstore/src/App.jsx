import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { MenuPage } from './pages/menu/MenuPage'
import { ReservationPage } from './pages/ReservationPage'

function App() {

  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<HomePage/>} />
        < Route path='/menu' element={<MenuPage/>} />
        < Route path='/reservation' element={<ReservationPage/>} />
      </Routes>
    </div>
  )
}

export default App
