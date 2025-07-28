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
            { to: "/address", icon: assets.addressIcon, label: "Address" },
            { to: "/orders", icon: assets.orderIcon, label: "Orders" },
            {
              to: "/order-items",
              icon: assets.orderItemIcon,
              label: "Order Items",
            },
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
          to="/settings"
          className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer mb-2 flex items-center gap-2"
        >
          <img src={assets.settingsIcon} alt="Settings" className="w-5 h-5" />
          {isExpanded && <p>Settings</p>}
        </NavLink>
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
