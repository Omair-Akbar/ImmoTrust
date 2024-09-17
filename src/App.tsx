'use client'

import { useState } from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Main from './component/Main'

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
    <Header/>
      <div className="flex xl:px-52 lg:px-16 px-2">
        {/* Sidebar */}
       <Sidebar/>

        {/* Main Content */}
      <Main/>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 mt-4 text-center">
        <img src="/logo.png" alt="ImmoIQ Logo" width={100} height={20} className="mx-auto" />
      </footer>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </div>
  )
}