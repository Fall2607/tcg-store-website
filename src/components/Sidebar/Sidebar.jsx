import React from 'react'

import { assets } from '../../assets/assets.js'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const [isExpanded, setIsExpanded] = React.useState(true)
    const location = useLocation();

    const getLinkClass = (path) => 
        `rounded px-2 py-2 cursor-pointer flex items-center gap-2 
        ${location.pathname === path ? 'bg-blue-700 text-white' : 'hover:bg-neutral-500'}`;


    return (
        <div className={`h-screen bg-neutral-600 text-white transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'} flex flex-col justify-between`}>
            {/* TOP */}
            <div>
                <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                    <h1 className={`text-lg font-bold transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
                        Admin Panel
                    </h1>
                    <button
                        onClick={() => setIsExpanded(prev => !prev)}
                        className="text-sm bg-neutral-800 px-2 py-1 rounded hover:bg-neutral-500"
                    >
                        {isExpanded ? '<' : '>'}
                    </button>
                </div>

                {/* MENU */}
                <nav className="mt-4 flex flex-col gap-2 px-4 text-sm">
                    <Link to="/" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                        <img src={assets.dashboardIcon} alt="Dashboard" className="w-5 h-5" />
                        {isExpanded ? <p>Dashboard</p> : null}
                    </Link>
                    <Link to="/users" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                        <img src={assets.usersIcon} alt="Users" className="w-5 h-5" />
                        {isExpanded ? <p>Users</p> : null}
                    </Link>
                    <Link to="/sets" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                        <img src={assets.setsIcon} alt="Sets" className="w-5 h-5" />
                        {isExpanded ? <p>Sets</p> : null}
                    </Link>
                    <Link to="/rarities" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                        <img src={assets.raritiesIcon} alt="Rarities" className="w-5 h-5" />
                        {isExpanded ? <p>Rarities</p> : null}
                    </Link>
                    <Link to="/products" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                        <img src={assets.productIcon} alt="Products" className="w-5 h-5" />
                        {isExpanded ? <p>Product</p> : null}
                    </Link>
                    <Link to="/address" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                        <img src={assets.addressIcon} alt="Address" className="w-5 h-5" />
                        {isExpanded ? <p>Address</p> : null}
                    </Link>
                    <Link to="/orders" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                        <img src={assets.orderIcon} alt="Orders" className="w-5 h-5" />
                        {isExpanded ? <p>Orders</p> : null}
                    </Link>
                    <Link to="/order-items" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                        <img src={assets.orderItemIcon} alt="OrdersItems" className="w-5 h-5" />
                        {isExpanded ? <p className="">Order Items</p> : null}
                    </Link>
                </nav>
            </div>

            {/* BOTTOM */}
            <div className="px-4 py-4 border-t border-neutral-500 text-sm">
                <Link to="settings" className="hover:bg-neutral-500 rounded px-2 py-2 cursor-pointer mb-2 flex items-center gap-2">
                    <img src={assets.settingsIcon} alt="Settings" className="w-5 h-5" />
                    {isExpanded ? <p>Settings</p> : null}
                </Link>
                <Link to="logout" className="hover:bg-red-600 rounded px-2 py-2 cursor-pointer flex items-center gap-2">
                    <img src={assets.logoutIcon} alt="Logout" className="w-5 h-5" />
                    {isExpanded ? <p>Logout</p> : null}
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
