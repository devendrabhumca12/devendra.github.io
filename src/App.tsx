import { Nav } from './components/layout/Nav'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Career } from './components/sections/Career'
import { Universe } from './components/sections/Universe'
import { FeaturedWork } from './components/sections/FeaturedWork'
import { CaseStudies } from './components/sections/CaseStudies'
import { Achievements } from './components/sections/Achievements'
import { Resume } from './components/sections/Resume'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="bg-graphite-950">
      <Nav />
      <main>
        <Hero />
        <About />
        <Career />
        <Universe />
        <FeaturedWork />
        <CaseStudies />
        <Achievements />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App
