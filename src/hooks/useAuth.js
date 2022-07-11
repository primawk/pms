/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JwtDecode from 'jwt-decode';

export default function useAuth() {
  const userPms = JSON.parse(localStorage.getItem('user-pms'));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!userPms) {
        navigate('/auth/login');
      } else {
        const decoded = JwtDecode(userPms.access_token);
        if (Date.now() > decoded.exp * 1000) {
          localStorage.clear();
          navigate('/');
          window.location.reload();
        }
      }
    }
  }, [userPms, location.pathname]);
  return <></>;
}
