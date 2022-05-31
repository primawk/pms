import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ permission, children }) {
  const roles = localStorage.getItem('role');
  const navigate = useNavigate();
  useEffect(() => {
    if (!permission.includes(roles)) {
      return navigate('/404');
    }
  }, [navigate, permission, roles]);

  return children;
}
