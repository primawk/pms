/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import JwtDecode from 'jwt-decode';

// custom hooks
import RoleService from 'services/RoleService';

export default function useAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const userPms = JSON.parse(localStorage.getItem('user-pms'));
  const id = userPms?.role_id;
  const currentPath = location.pathname.split('/')[1];

  const [isGranted, setIsGranted] = useState(false);
  const [roleName, setRoleName] = useState('');

  const { data } = useQuery(['roles', id], () => RoleService.getRoleById({ id }), {
    keepPreviousData: true,
    enabled: !!id
  });

  useEffect(() => {
    setRoleName(data?.data?.data?.name);
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
        if (data?.data?.data?.action?.[currentPath] === 'Edit and Delete') {
          setIsGranted(true);
        } else {
          setIsGranted(false);
        }
      }
    }
  }, [data]);
  return {
    isGranted,
    roleName
  };
}
