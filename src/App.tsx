import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { TechStack } from './components/sections/TechStack'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { EducationSection } from './components/sections/Education'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
