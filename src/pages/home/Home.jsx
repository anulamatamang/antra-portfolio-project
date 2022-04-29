import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/hero/HeroSection'
import About from '../../components/about/About'
import Summary from '../../components/summary/Summary'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
      <>
      <Navbar />
      <HeroSection />
      <About />
      <Summary />
      <Contact/>
      <Footer />
      </>
  )
}

export default Home