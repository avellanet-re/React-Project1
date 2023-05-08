import './App.css'
import Home from './assets/pages/Home'
import Gallery from './assets/pages/Gallery/Gallery'
import Nav from './assets/core/Nav'
import { Routes, Route } from 'react-router-dom'
import GalleryId from './assets/pages/GalleryId/GalleryId'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="gallery/:id" element={<GalleryId />} />
      </Routes>

    </>
  )
}

export default App
