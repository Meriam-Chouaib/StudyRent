import { ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
}
export function GuestGuard({ children }: AuthGuardProps) {
  // check if user is authenticated and redirect to home page if it is
  return <>{children}</>;
}
