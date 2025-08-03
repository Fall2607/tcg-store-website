import React from "react";

import { assets } from "../../assets/assets.js";
import { NavLink } from "react-router-dom";

function Sidebar({ isExpanded, setIsExpanded }) {
  // const location = useLocation();

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-neutral-600 text-white transition-all duration-300 z-50 
      ${isExpanded ? "w-64" : "w-15"} flex flex-col justify-between`}
    >
      {/* TOP */}
      <div>
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h1
            className={`text-lg font-bold transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="text-sm bg-neutral-800 px-2 py-1 rounded hover:bg-neutral-500"
          >
            {isExpanded ? "<" : ">"}
          </button>
        </div>

        {/* MENU */}
        <nav className="mt-4 flex flex-col gap-2 px-2 text-sm">
          {[
            { to: "/", icon: assets.dashboardIcon, label: "Dashboard" },
            { to: "/products", icon: assets.productIcon, label: "Product" },
            { to: "/sets", icon: assets.setsIcon, label: "Sets" },
            { to: "/rarities", icon: assets.raritiesIcon, label: "Rarities" },
            { to: "/users", icon: assets.usersIcon, label: "Users" },
            { to: "/orders", icon: assets.orderIcon, label: "Orders"}
            // { to: "/address", icon: assets.addressIcon, label: "Address" },
            // { to: "/orders", icon: assets.orderIcon, label: "Orders" },
            // {
            //   to: "/order-items",
            //   icon: assets.orderItemIcon,
            //   label: "Order Items",
            // },
          ].map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded px-2 py-2 cursor-pointer flex items-center gap-2 ${
                  isActive ? "bg-blue-700 text-white" : "hover:bg-neutral-500"
                }`
              }
            >
              <img src={icon} alt={label} className="w-5 h-5" />
              {isExpanded && <p>{label}</p>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="px-2 py-4 border-t border-neutral-500 text-sm">
        <NavLink
          to="/logout"
          className="hover:bg-red-600 rounded px-2 py-2 cursor-pointer flex items-center gap-2"
        >
          <img src={assets.logoutIcon} alt="Logout" className="w-5 h-5" />
          {isExpanded && <p>Logout</p>}
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;


// import React from "react";
// import { assets } from "../../assets/assets.js";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../../auth/AuthContext";

// function Sidebar({ isExpanded, setIsExpanded }) {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   // Base menu items for all users
//   const baseMenuItems = [
//     { to: "/", icon: assets.dashboardIcon, label: "Dashboard", roles: ['user', 'admin'] },
//     { to: "/products", icon: assets.productIcon, label: "Products", roles: ['admin'] },
//     { to: "/sets", icon: assets.setsIcon, label: "Sets", roles: ['admin'] },
//     { to: "/rarities", icon: assets.raritiesIcon, label: "Rarities", roles: ['admin'] },
//     { to: "/users", icon: assets.usersIcon, label: "Users", roles: ['admin'] },
//     { to: "/address", icon: assets.addressIcon, label: "Address", roles: ['user', 'admin'] },
//     { to: "/orders", icon: assets.orderIcon, label: "Orders", roles: ['user', 'admin'] },
//     { to: "/order-items", icon: assets.orderItemIcon, label: "Order Items", roles: ['admin'] },
//   ];

//   // Filter menu items based on user role
//   const filteredMenuItems = baseMenuItems.filter(item => 
//     item.roles.includes(user?.role || 'user')
//   );

//   return (
//     <div
//       className={`fixed top-0 left-0 h-screen bg-neutral-600 text-white transition-all duration-300 z-50 
//       ${isExpanded ? "w-64" : "w-15"} flex flex-col justify-between`}
//     >
//       {/* TOP */}
//       <div>
//         <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//           <h1
//             className={`text-lg font-bold transition-opacity duration-300 ${
//               isExpanded ? "opacity-100" : "opacity-0 hidden"
//             }`}
//           >
//             {user?.role === 'admin' ? 'Admin Panel' : 'My Account'}
//           </h1>
//           <button
//             onClick={() => setIsExpanded((prev) => !prev)}
//             className="text-sm bg-neutral-800 px-2 py-1 rounded hover:bg-neutral-500"
//             aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
//           >
//             {isExpanded ? "<" : ">"}
//           </button>
//         </div>

//         {/* User info (only shown when expanded) */}
//         {isExpanded && user && (
//           <div className="px-4 py-3 border-b border-neutral-500">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
//                 {user.name.charAt(0).toUpperCase()}
//               </div>
//               <div>
//                 <p className="font-medium truncate">{user.name}</p>
//                 <p className="text-xs text-neutral-300">{user.role}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* MENU */}
//         <nav className="mt-4 flex flex-col gap-2 px-2 text-sm">
//           {filteredMenuItems.map(({ to, icon, label }) => (
//             <NavLink
//               key={to}
//               to={to}
//               className={({ isActive }) =>
//                 `rounded px-2 py-2 cursor-pointer flex items-center gap-2 ${
//                   isActive ? "bg-blue-700 text-white" : "hover:bg-neutral-500"
//                 }`
//               }
//             >
//               <img src={icon} alt={label} className="w-5 h-5" />
//               {isExpanded && <p>{label}</p>}
//             </NavLink>
//           ))}
//         </nav>
//       </div>

//       {/* BOTTOM */}
//       <div className="px-2 py-4 border-t border-neutral-500 text-sm">
//         <NavLink
//           to="/settings"
//           className={({ isActive }) =>
//             `hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer mb-2 flex items-center gap-2 ${
//               isActive ? "bg-blue-700 text-white" : ""
//             }`
//           }
//         >
//           <img src={assets.settingsIcon} alt="Settings" className="w-5 h-5" />
//           {isExpanded && <p>Settings</p>}
//         </NavLink>
//         <button
//           onClick={handleLogout}
//           className="w-full hover:bg-red-600 rounded px-2 py-2 cursor-pointer flex items-center gap-2"
//         >
//           <img src={assets.logoutIcon} alt="Logout" className="w-5 h-5" />
//           {isExpanded && <p>Logout</p>}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;