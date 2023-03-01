import { ReactNode } from 'react';

const useCurrentRole = () => {
  // Logic here to get current user role
  const role = 'admin';
  return role;
};

interface RoleBasedGuardProps {
  accessibleRoles: string[];
  children: ReactNode;
}

export default function RoleBasedGuard({ accessibleRoles, children }: RoleBasedGuardProps) {
  const currentRole = useCurrentRole();

  if (!accessibleRoles.includes(currentRole)) {
    return (
      <>
        {/* here you should add ui component for this error*/}
        <p>You do not have permission to access this page</p>
      </>
    );
  }

  return <>{children}</>;
}
