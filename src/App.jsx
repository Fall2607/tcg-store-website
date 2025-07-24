

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

import Address from "./pages/Address"
import Products from "./pages/Products"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Sets from "./pages/Sets"
import Rarities from "./pages/Rarities"
import Orders from "./pages/Orders"
import OrderItems from "./pages/OrderItems"
import Settings from "./pages/Settings"

function App() {


  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/sets" element={<Sets/>} />
            <Route path="/rarities" element={<Rarities/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/address" element={<Address/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/order-items" element={<OrderItems/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
