// components/Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navigation.css'; // Import the CSS file

const NavigationButton = () => {
  const location = useLocation(); // Get the current route

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t max-w-md mx-auto">
      <div className="flex justify-around py-3">
        <Link
          to="../"
          className={`flex flex-col items-center ${
            location.pathname === '/' ? 'text-green-600' : 'text-gray-600'
          }`}
        >
          <span className="material-icons">home</span>
          <span className="text-xs">Beranda</span>
        </Link>
        <Link
          to="../donasi"
          className={`flex flex-col items-center ${
            location.pathname === '/donasi' ? 'text-green-600' : 'text-gray-600'
          }`}
        >
          <span className="material-icons">volunteer_activism</span>
          <span className="text-xs">Donasi</span>
        </Link>
        <Link
          to="../belanja"
          className={`flex flex-col items-center ${
            location.pathname === '/belanja' ? 'text-green-600' : 'text-gray-600'
          }`}
        >
          <span className="material-icons">shopping_cart</span>
          <span className="text-xs">Jual Beli</span>
        </Link>
        <Link
          to="../edukasi"
          className={`flex flex-col items-center ${
            location.pathname === '/edukasi' ? 'text-green-600' : 'text-gray-600'
          }`}
        >
          <span className="material-icons">school</span>
          <span className="text-xs">Edukasi</span>
        </Link>        
        <Link
          to="../tentang-kami"
          className={`flex flex-col items-center ${
            location.pathname === '/tentang-kami' ? 'text-green-600' : 'text-gray-600'
          }`}
        >
          <span className="material-icons">info</span>
          <span className="text-xs">Tentang</span>
        </Link>
        <Link
          to="../login"
          className={`flex flex-col items-center ${
            location.pathname === '/login' ? 'text-green-600' : 'text-gray-600'
          }`}
        >
          <span className="material-icons">person</span>
          <span className="text-xs">Profil</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationButton;