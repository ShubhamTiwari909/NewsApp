import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import News from './components/News'
import Search from './components/Search'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
function App() {
  const [darkMode, setDarkMode] = useState(false)

  const styling = {
    darkModeTextColor:'text-indigo-100',
    darkModeBgColor:'bg-slate-800',
    lightModeTextColor:'text-indigo-700',
    lightModeBgColor:'bg-slate-100'
  }

  const isDark = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<News darkMode = {styling} darkModeTrigger= {isDark} darkModeEnabled={darkMode} />} />
        <Route exact path='/search' element={<Search darkMode = {styling} darkModeTrigger= {isDark} darkModeEnabled={darkMode} />} />
        <Route exact path='/contact' element={<Contact darkMode = {styling} darkModeTrigger= {isDark} darkModeEnabled={darkMode} />} />
        <Route exact path='/about' element={<About darkMode = {styling} darkModeTrigger= {isDark} darkModeEnabled={darkMode} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App


