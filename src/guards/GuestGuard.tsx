import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../config/paths';
import { getPersistData } from '../utils';

interface AuthGuardProps {
  children: ReactNode;
}
export function GuestGuard({ children }: AuthGuardProps) {
  const user = getPersistData('user', true);

  if (user) {
    return <Navigate to={PATHS.ROOT} replace />;
  }
  return <>{children}</>;
}
