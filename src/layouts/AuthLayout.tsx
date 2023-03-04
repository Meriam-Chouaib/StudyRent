import { CustomImageTop } from '../components/image/CustomImageTop.styles';
import { CustomImageBottom } from '../components/image/CustomImageBottom.styles';
import { StyledLogoDark } from '../components/StyledLogoDark';
import imageTop from '../assets/images/Auth-motif-haut.svg';
import { Outlet } from 'react-router-dom';
import imageBottom from '../assets/images/Auth-motif-bas.svg';
export function AuthLayout() {
  return (
    <>
      <StyledLogoDark />
      <CustomImageTop src={imageTop} alt="" />
      <Outlet />
      <CustomImageBottom src={imageBottom} alt="" />
    </>
  );
}
