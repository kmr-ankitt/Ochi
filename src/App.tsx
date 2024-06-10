import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Features from "./components/Featured"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='min-h-screen w-full text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />      
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
