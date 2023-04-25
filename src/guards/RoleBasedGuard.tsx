import { ReactNode, useEffect } from 'react';
import { NotFound } from '../pages';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../config/paths';

const useCurrentRole = () => {
  // Logic here to get current user role
  const role = 'admin';
  return role;
};

interface RoleBasedGuardProps {
  accessibleRoles: string[];
  children: ReactNode;
}

export function RoleBasedGuard({ accessibleRoles, children }: RoleBasedGuardProps) {
  const currentRole = useCurrentRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessibleRoles.includes(currentRole)) {
      return navigate('/404');
    }
  }, []);
  if (!accessibleRoles.includes(currentRole)) {
    navigate(`/${PATHS.MAIN.ERROR.P_404}`, { replace: true });
  }

  return <>{accessibleRoles.includes(currentRole) && children}</>;
}
