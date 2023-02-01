import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Store from './Pages/Store'
import CustomerCare from './Pages/CustomerCare'
import Contacts from './Pages/Contacts'
import ShoppingBag from './Pages/ShoppingBag'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/ShoppingBag" element={<ShoppingBag />} />
        </Routes>
      </Router>      
    </div>
  )
}

export default App
