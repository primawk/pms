import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  // using cookies to get user detail
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!user) {
        navigate('/auth/login');
      } else {
        setUser({});
      }
    }
  }, []);
  return { user, setUser };
}
