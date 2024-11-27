import React from 'react';
import { Link, usePage } from '@inertiajs/react'

const SidebarLayout = ({ children }) => {
    
    const { url } = usePage();

    console.log("current url", url)

    return (
        <div className="d-flex">
        {/* Sidebar */}
        <nav className="bg-dark border-end" style={{ width: '250px', height: '100vh' }}>
            <div className="p-3">
                <h4>Dashboard</h4>
                    <ul className="nav flex-column ">
                        <li className="nav-item"> 
                            <Link href={route('dashboard')} className={`nav-link ${ url === '/dashboard' ? 'text-danger' : 'text-white' }`}>Dashboard </Link>
                    </li>
                    <li className="nav-item">
                            <Link href="/user" className={`nav-link ${ url === '/user' ? 'text-success' : 'text-white' }`}>User</Link>
                    </li>
                    <li className="nav-item">
                            <Link href="/settings" className={`nav-link ${ url === '/settings' ? 'text-warning' : 'text-white' }`}>Settings</Link>
                        </li>
                    <li className="nav-item">
                        <Link href="/logout"className="nav-link text-white" method="post">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>

            {/* Main Content */}
            
            <div className="flex-grow-1 p-4">
                {children}
            </div>
    </div>
    );
}

export default SidebarLayout;
