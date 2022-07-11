import React from 'react';
import { useNavigate } from 'react-router-dom';
import JwtDecode from 'jwt-decode';

const JwtVerify = () => {
  const navigate = useNavigate();
  const userPms = JSON.parse(localStorage.getItem('user-pms'));

  if (userPms) {
    const decoded = JwtDecode(userPms.access_token);
    if (Date.now() > decoded.exp * 1000) {
      localStorage.clear();
      navigate('/');
      window.location.reload();
    }
  } else {
    navigate('/auth/login');
  }

  return <div></div>;
};

export default JwtVerify;
