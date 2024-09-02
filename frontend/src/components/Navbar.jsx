import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow px-4 py-2 flex justify-between items-center">
      <div className="text-xl">MeetMaster</div>
      <div className="flex space-x-4">
        <Link className="hover:text-gray-400" onClick={()=>{localStorage.removeItem("token")}} to="/login">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
