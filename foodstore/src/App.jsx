import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { MenuPage } from './pages/menu/MenuPage'

function App() {

  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<HomePage/>} />
        < Route path='/menu' element={<MenuPage/>} />
      </Routes>
    </div>
  )
}

export default App
