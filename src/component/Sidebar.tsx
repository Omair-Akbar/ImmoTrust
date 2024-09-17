'use client'

import { useState } from 'react';
import { Building2, ChevronDown, Star, Calculator, CheckSquare, HelpCircle, Compass, Home } from "lucide-react";

export default function Sidebar() {
  // State for each submenu
  const [isChecklistOpen, setChecklistOpen] = useState(false);
  const [isRatgeberOpen, setRatgeberOpen] = useState(false);

  // Toggle functions for each submenu
  const toggleChecklist = () => setChecklistOpen(!isChecklistOpen);
  const toggleRatgeber = () => setRatgeberOpen(!isRatgeberOpen);

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform rounded-lg my-4 ${
        '-translate-x-full'
      } md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 w-64 bg-white shadow-lg overflow-y-auto`}
    >
      <div className="p-4">
        <img src="/logo.png" alt="ImmoTrust Logo" width={150} height={40} className="mb-8" />
        <nav className="space-y-4">
          {[
            { name: 'Immobilienlexikon', icon: Building2 },
            { name: 'Preisschätzung', icon: Calculator },
            { name: 'Checklisten', icon: CheckSquare, hasSubmenu: true, isOpen: isChecklistOpen, toggleSubmenu: toggleChecklist },
            { name: 'Ratgeber', icon: HelpCircle, hasSubmenu: true, isOpen: isRatgeberOpen, toggleSubmenu: toggleRatgeber },
            { name: 'Mandatsnavigator', icon: Compass },
            { name: 'Wohntraumfinder', icon: Home },
          ].map((item) => (
            <div key={item.name}>
              <a
                href="#"
                onClick={item.hasSubmenu ? (e) => { e.preventDefault(); item.toggleSubmenu(); } : undefined}
                className="flex items-center gap-2 text-gray-600 hover:text-teal-500 transition-colors"
              >
                <item.icon className="w-5 h-5 text-teal-500" />
                {item.name}
                {item.hasSubmenu && <ChevronDown className="ml-auto w-4 h-4" />}
              </a>
              {/* Render submenu for each item if open */}
              {item.name === 'Checklisten' && item.isOpen && (
                <div className="pl-6 mt-2 space-y-2">
                  <a href="#" className="block text-gray-600 hover:text-teal-500">Checklist Item 1</a>
                  <a href="#" className="block text-gray-600 hover:text-teal-500">Checklist Item 2</a>
                </div>
              )}
              {item.name === 'Ratgeber' && item.isOpen && (
                <div className="pl-6 mt-2 space-y-2">
                  <a href="#" className="block text-gray-600 hover:text-teal-500">Ratgeber Item 1</a>
                  <a href="#" className="block text-gray-600 hover:text-teal-500">Ratgeber Item 2</a>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-8 bg-teal-500 p-4 rounded-lg text-white">
          <img src="professional.jpg" alt="Profile" width={80} height={80} className="rounded-full mb-4 mx-auto" />
          <h3 className="font-bold text-center">Immotrust AG</h3>
          <p className="text-sm text-center">Verkaufsprofile</p>
          <p className="text-sm text-center mb-4">Immobilienberatung seit 2006</p>
          <button className="w-full bg-white text-teal-500 px-4 py-2 rounded-full text-sm font-bold hover:bg-teal-50 transition-colors">
            Gehe zu Eigentümer
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-xs text-center mt-2 text-gray-500">4.8 von 5 Bewertungen</p>
      </div>
    </aside>
  );
}
