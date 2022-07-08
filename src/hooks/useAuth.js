/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JwtDecode from 'jwt-decode';

export default function useAuth() {
  const userPms = JSON.parse(localStorage.getItem('user-pms'));

  const [user, setUser] = useState(userPms);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!user) {
        navigate('/auth/login');
      } else {
        setUser(userPms);
      }
      if (!!user.access_token) {
        const decoded = JwtDecode(userPms.access_token);
        console.log(decoded);
        if (Date.now() > decoded.exp * 1000) {
          localStorage.clear();
          navigate('/');
          window.location.reload();
        }
      }
    }
  }, [userPms]);
  return { user, setUser };
}
