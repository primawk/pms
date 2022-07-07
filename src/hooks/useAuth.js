/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const userPms = JSON.parse(localStorage.getItem('user-pms'));

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!user) {
        navigate('/auth/login');
      } else {
        setUser(userPms);
      }
    }
  }, [userPms]);
  return { user, setUser };
}
