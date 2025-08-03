import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

import Products from "./pages/Products"
import Products2 from "./pages/Products2"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Sets from "./pages/Sets"
import Rarities from "./pages/Rarities"
import Orders from "./pages/Orders"
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
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import './App.css';
// import Sidebar from './components/Sidebar/Sidebar';
// import { AuthProvider, useAuth } from './auth/AuthContext';
// import LoginPage from './pages/auth/LoginPage';

// // Import your pages
// import Address from "./pages/Address";
// import Products from "./pages/Products";
// import Products2 from "./pages/Products2";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Sets from "./pages/Sets";
// import Rarities from "./pages/Rarities";
// import Orders from "./pages/Orders";
// import OrderItems from "./pages/OrderItems";
// import Settings from "./pages/Settings";
// import { useState } from "react";

// // PrivateRoute component for protected routes
// const PrivateRoute = ({ children, adminOnly = false }) => {
//   const { isAuthenticated, isAdmin, loading } = useAuth();

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   if (!isAuthenticated()) {
//     return <Navigate to="/login" replace />;
//   }

//   if (adminOnly && !isAdmin()) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// const MainLayout = ({ children, isExpanded, setIsExpanded }) => {
//   const { logout } = useAuth();

//   return (
//     <>
//       <Sidebar 
//         isExpanded={isExpanded} 
//         setIsExpanded={setIsExpanded} 
//         onLogout={logout}
//       />
//       <div className={`transition-all duration-300 min-h-screen p-4 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
//         {children}
//       </div>
//     </>
//   );
// };

// function App() {
//   const [isExpanded, setIsExpanded] = useState(true);

//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public route */}
//           <Route path="/login" element={<LoginPage />} />
          
//           {/* Protected routes */}
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Dashboard />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/users"
//             element={
//               <PrivateRoute adminOnly>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Users />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/sets"
//             element={
//               <PrivateRoute adminOnly>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Sets />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/rarities"
//             element={
//               <PrivateRoute adminOnly>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Rarities />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/products"
//             element={
//               <PrivateRoute adminOnly>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Products />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/products2"
//             element={
//               <PrivateRoute adminOnly>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Products2 />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/address"
//             element={
//               <PrivateRoute>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Address />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/orders"
//             element={
//               <PrivateRoute>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Orders />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/order-items"
//             element={
//               <PrivateRoute>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <OrderItems />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           <Route
//             path="/settings"
//             element={
//               <PrivateRoute>
//                 <MainLayout isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
//                   <Settings />
//                 </MainLayout>
//               </PrivateRoute>
//             }
//           />
          
//           {/* Catch-all route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;