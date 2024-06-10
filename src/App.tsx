import About from "./components/About"
import Eyes from "./components/Eyes"
import Features from "./components/Featured"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='min-h-screen w-full text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />      
      <Marquee />
      <About />
      <Eyes />
      <Features />
    </div>
  )
}

export default App
