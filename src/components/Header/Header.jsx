import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-800 lg:px12">
  <div className="flex-1 px-5">
  <img src={logo} alt="" />
  </div>
  <div className="flex-none gap-5 text-teal-50 px-4 ">
    <a className='hover:bg-green-500' href="../order">Order</a>
    <a className='hover:bg-green-500' href="../orderReview">Order Review</a>
    <a className='hover:bg-green-500' href="../manage">Manage Inventory</a>
    <a className='hover:bg-green-500' href="../login">Login</a>
  </div>
</div>
        </div>
    );
};

export default Header;