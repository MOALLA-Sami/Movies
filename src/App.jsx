import { useState } from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import "./css/App.css"
import { MovieProvider } from './contexts/MovieContext'
import WatchLater from './pages/WatchLater'
import Watched from './pages/Watched'
import Suggestions from './pages/Suggestions'
function App() {
  const [count, setCount] = useState(0)

  return (
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/WatchLater" element={<WatchLater/>}/>
          <Route path="/Watched" element={<Watched/>}/>
          <Route path="/Suggestions" element={<Suggestions/>}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
