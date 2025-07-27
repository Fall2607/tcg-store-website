import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

import Address from "./pages/Address"
import Products from "./pages/Products"
import Products2 from "./pages/Products2"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Sets from "./pages/Sets"
import Rarities from "./pages/Rarities"
import Orders from "./pages/Orders"
import OrderItems from "./pages/OrderItems"
import Settings from "./pages/Settings"
import { useState } from "react"

function App() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <Router>
      {/* Sidebar tetap */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Konten utama bergeser sesuai sidebar */}
      <div className={`transition-all duration-300 min-h-screen p-4 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/rarities" element={<Rarities />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products2" element={<Products2 />} />
          <Route path="/address" element={<Address />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-items" element={<OrderItems />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
