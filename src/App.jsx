import React from 'react'
import './index.css'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experince from './component/experiences/Experiences'
import Service from './component/services/Service'
import Portfolio from './component/portfolio/Portfolio'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <><Header /><Nav /><About /><br></br> <br></br><br></br> 
    <Experince /><Footer /></>
  )
}

export default App