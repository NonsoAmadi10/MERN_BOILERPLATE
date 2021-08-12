import React, { Fragment, useState } from 'react';
import logo from '../assets/gelmox.png';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

function Navbar() {
  const [bav, setNav] = useState(true);
  const toggle = () => setNav(!bav);
  return (
    <Fragment className="w-100">
      <div className="bg-green-500  font-sans text-white">
        <p className="container mx-auto text-center p-1">
          {' '}
          We also deliver in Jozi! For shopping in Johannesburg{' '}
          <a href="/" className="text-yellow-400">
            Click here
          </a>
          . Alternatively, <strong>contact us via WhatsApp on 0600151751.</strong>
        </p>
      </div>

      <nav className="flex items-center justify-between flex-wrap bg-white py-2 lg:px-12 shadow">
        <div className="flex justify-between lg:w-auto w-full pl-4 pr-2  pb-3 lg:pb-0">
          <a href="/" className="flex items-center  flex-shrink-0 text-gray-800 mr-16" title="home">
            <img src={logo} className="w-16 filter drop-shadow-xl" />
          </a>
          <div className="block lg:hidden py-2">
            <button
              id="nav"
              onClick={() => toggle()}
              className="flex items-center px-3 py-2 border-2 rounded text-green-700 border-green-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="order-2 md:order-3  flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className={`lg:flex items-center ml-6 ${bav ? 'hidden' : 'flex'}`}>
            <Link to="/" className="text-gray-500 ml-2 mr-4">
              {' '}
              Home{' '}
            </Link>
            <Link to="/store" className="text-gray-500 ml-2 mr-4">
              {' '}
              Store
            </Link>
            <Link to="/about" className="text-gray-500 ml-2 mr-4">
              {' '}
              About{' '}
            </Link>
            <Link to="/faq" className="text-gray-500 ml-2 mr-4">
              {' '}
              FAQs
            </Link>
            <Link to="/cart" title="cart" className="ml-2 flex mr-4 text-gray-500">
              {' '}
              <MdShoppingCart className="text-2xl text-green-500" />{' '}
              <span className="bg-red-500 badge p-1 rounded-full text-gray-100 text-xs ml-1">
                0
              </span>
            </Link>
            <Link to="/login" className="text-green-500 ml-2 mr-4">
              {' '}
              Login
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
