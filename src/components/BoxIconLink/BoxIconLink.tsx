import { Link } from 'react-router-dom';
import { BoxIcon } from '../CardPost/BoxEditDelete/BoxIcon';
interface BoxIconLinkProps {
  children: React.ReactNode;
  handleSubmit: () => void;
  path: string;
  color: string;
}
export const BoxIconLink = ({ children, handleSubmit, path, color }: BoxIconLinkProps) => {
  return (
    <>
      <BoxIcon handleSubmit={handleSubmit} color={color}>
        <Link to={`path`} style={{ display: 'flex' }}>
          {children}
        </Link>
      </BoxIcon>
    </>
  );
};
