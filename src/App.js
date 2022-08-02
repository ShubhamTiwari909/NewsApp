import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Search from './components/Search'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<News />} />
        <Route exact path='/search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App