import { Nav } from './components/layout/Nav'
import { ResumeToast } from './components/layout/ResumeToast'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Career } from './components/sections/Career'
import { Universe } from './components/sections/Universe'
import { FeaturedWork } from './components/sections/FeaturedWork'
import { CaseStudies } from './components/sections/CaseStudies'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="relative bg-graphite-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grain" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[560px] bg-[radial-gradient(ellipse_at_top,_rgba(76,141,255,0.08),_transparent_65%)]" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Career />
        <Universe />
        <FeaturedWork />
        <CaseStudies />
        <Achievements />
        <Contact />
      </main>
      <ResumeToast />
    </div>
  )
}

export default App
