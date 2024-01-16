import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Navmenu from './components/Navmenu'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Template from './components/Template'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Template />
    </>
  )
}