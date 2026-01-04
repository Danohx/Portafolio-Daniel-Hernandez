import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Divider from './components/Divider'
import Experience from './components/Experiencie'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divider />

        <About />
        <Divider />

        <Experience />
        <Divider />

        <Skills />
        <Divider />

        <Projects />
        <Divider />
        
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
