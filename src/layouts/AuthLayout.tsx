import imageTop from '../assets/images/Auth-motif-haut.svg';
import { LogoTopRight } from '../components/logo/logoTopRight/LogoTopRight';
import { Outlet } from 'react-router-dom';
import imageBottom from '../assets/images/Auth-motif-bas.svg';
import logoDark from '../assets/images/logo-bleu-roi.svg';
import { CustomImageTop } from '../components/image/CustomImageTop.styles';
import { CustomImageBottom } from '../components/image/CustomImageBottom.styles';
export function AuthLayout() {
  return (
    <>
      {/* <LogoTopRight src={logoDark} alt="logo studyrent" /> */}
      <CustomImageTop src={imageTop} alt="" />
      <Outlet />
      <CustomImageBottom src={imageBottom} alt="" />
    </>
  );
}
