import { headerProps } from '../../main/header/header.types';
import { UserLogged } from '../../main/header/UserLoggedIn/UserLogged';

export default function Header({ username, status, img }: headerProps) {
  return (
    <>
      <UserLogged username={username} status={status} img={img} />
    </>
  );
}
