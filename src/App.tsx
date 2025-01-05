import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { About } from "./components/About"
import { Home } from "./components/Home"
import { ServicesPage } from "./components/ServicesPage"
import { ContactPage } from "./components/ContactPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/diensten" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
