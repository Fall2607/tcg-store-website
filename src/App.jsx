
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {


  return (
    <Router>
      <Sidebar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/rarities" element={<Rarities />} />
          <Route path="/products" element={<Products />} />
          <Route path="/address" element={<Address />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-items" element={<OrderItems />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
