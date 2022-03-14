// React methods
import { Routes, Route } from 'react-router-dom'
// Style sheet
import './App.scss'
// Pages
import HomePage from './Pages/Home'
import ProductPage from './Pages/Product'
import BlogPage from './Pages/Blog'
import ContactPage from './Pages/Contact'
import AboutPage from './Pages/About'
import RegisterPage from './Pages/Register'
// Component
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Wrapper">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Product" element={<ProductPage />}/>
          <Route path="/Blog" element={<BlogPage />}/>
          <Route path="/Contact" element={<ContactPage />}/>
          <Route path="/About" element={<AboutPage />}/>
          <Route path="/Register" element={<RegisterPage />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
