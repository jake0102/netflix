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
// Function
;(()=>{
  let oldValue = 0
  let newValue = 0
  window.addEventListener('scroll', (e) => {
    const header = document.querySelector('.header')
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        if(header.classList[2] == 'showOut'){
          header.classList.remove('showOut')
        }
        header.classList.add('showIn')
      }
    } else if (oldValue > newValue) {
      if(header.classList[2] == 'showIn'){
        header.classList.remove('showIn')
      }
      header.classList.add('showOut')
    }
    oldValue = newValue;
  });
})()

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