import { ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
}
export default function AuthGuard({ children }: AuthGuardProps) {
  // check if user is authenticated and redirect to login page if not
  return <>{children}</>;
}
