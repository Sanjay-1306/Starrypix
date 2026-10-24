import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Pricing from './components/sections/Pricing'
import Process from './components/sections/Process'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import CursorGlow from './components/ui/CursorGlow'
import Grain from './components/ui/Grain'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Grain />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Pricing />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
