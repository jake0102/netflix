// React methods

// Style sheet
import './App.scss'
// Pages
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ProductPage from './Pages/Product'
import ContactPage from './Pages/Contact'
// Component
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Wrapper">
        <HomePage />
        <AboutPage />
        <ProductPage />
        <ContactPage />
      </div>
    </div>
  )
}

export default App;
