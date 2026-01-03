import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/home/HomePage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>  
  )
}

export default App
