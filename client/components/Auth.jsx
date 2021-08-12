import React from 'react';
import logo from '../assets/gelmox.png';
import { Link } from 'react-router-dom';

function Auth({ authType, authAction }) {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/">
              <img className="mx-auto w-24" src={logo} alt="Logo" />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {' '}
              {authType == 'Login' ? 'Sign In' : 'Create An Account'}
            </h2>
          </div>

          {authType == 'Register' ? (
            <div>
              <div>
                <label> Fullname </label>
                <input
                  type="text"
                  className="block border border-gray-200 focus:ring-green-200 focus:ring focus:outline-none  focus:border-green-400 w-full p-3 rounded mb-4"
                  name="fullName"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label> Username </label>
                <input
                  type="text"
                  className="block border border-gray-200 focus:ring-green-200 focus:ring focus:outline-none  focus:border-green-400 w-full p-3 rounded mb-4"
                  name="username"
                  placeholder="Username"
                />
              </div>
            </div>
          ) : (
            ''
          )}

          <div>
            <label> Email </label>
            <input
              type="email"
              className="block border border-gray-200 focus:ring-green-200 focus:ring focus:outline-none  focus:border-green-400 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label> Password </label>
            <input
              type="password"
              className="block border border-gray-200 focus:ring-green-200 focus:ring focus:outline-none  focus:border-green-400 w-full p-3 rounded mb-4"
              name="password"
              required
              placeholder="Password"
            />

            {authType == 'Login' ? (
              <div className="float-right mb-1 text-md font-medium">
                <Link to="/password-reset" className="no-underline  text-green-600">
                  {' '}
                  Forgot Password?
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>

          {authType == 'Register' ? (
            <div>
              <label> Confirm Password </label>
              <input
                type="password"
                className="block border border-gray-200 focus:ring-green-200 focus:ring focus:outline-none  focus:border-green-400 w-full p-3 rounded mb-4"
                name="confirmPassword"
                required
                placeholder="Confirm Password"
              />
            </div>
          ) : (
            ''
          )}

          <div>
            <button
              type="submit"
              className="w-full text-center py-3 focus:outline-none   rounded bg-green-500 text-white hover:bg-green-500 focus:outline-none my-1"
            >
              {' '}
              {authType}{' '}
            </button>
          </div>

          {authType == 'Login' ? (
            <div className="text-gray-800 mt-6 text-center">
              Don't have an account?
              <Link to="/register" className="no-underline border-b border-blue-400 text-blue-400">
                {' '}
                Create Account
              </Link>
            </div>
          ) : (
            <div className="text-gray-800 mt-6 text-center">
              Existing User?
              <Link to="/login" className="no-underline border-b border-blue-400 text-blue-400">
                {' '}
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
