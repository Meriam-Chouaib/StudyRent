import { Outlet } from 'react-router-dom';
// images
import imageBottom from '../assets/images/Auth-motif-bas.svg';
import imageTop from '../assets/images/Auth-motif-haut.svg';
import logoDark from '../assets/images/logo-bleu-roi.svg';
// components
import { LogoTopRight } from '../components';
import { CustomImageTop } from '../components';
import { CustomImageBottom } from '../components';
export function AuthLayout() {
  return (
    <>
      <LogoTopRight src={logoDark} alt="logo studyrent" />
      <CustomImageTop src={imageTop} alt="" />
      <Outlet />
      <CustomImageBottom src={imageBottom} alt="" />
    </>
  );
}
