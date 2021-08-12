import React from 'react';
import Auth from '../../components/Auth';
function Register() {
  return (
    <div className="bg-gray-50">
      <Auth authType="Register" authAction="register" />
    </div>
  );
}

export default Register;
