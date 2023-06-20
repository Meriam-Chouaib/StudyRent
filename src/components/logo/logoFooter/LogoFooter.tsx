import { CustomImgLogo } from './LogoFooter.style';
import logo from '../../../assets/images/logo-bleu-clair-footer.svg';
import { BoxCenterStyled } from '../../BoxCenter/BoxCenterStyled.styles';

export const LogoFooter = () => {
  return (
    <>
      <BoxCenterStyled sx={{ flexDirection: 'row' }}>
        <CustomImgLogo src={logo} alt={'Logo studyRent'} />
      </BoxCenterStyled>
    </>
  );
};
