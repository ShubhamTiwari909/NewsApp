import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import News from './components/News'
import Search from './components/Search'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<News />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App