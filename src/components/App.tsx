import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Services } from './components/services'

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-ons" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/diensten" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
} 