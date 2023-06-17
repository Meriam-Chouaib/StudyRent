import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BoxCenterStyled } from '../../../components';
import theme from '../../../theme';
import { BoxFooter } from '../../main/footer/footer.styles';

export default function Copyright() {
  const { t } = useTranslation();
  return (
    <BoxFooter>
      <Container>
        <BoxCenterStyled>
          <Typography variant="h3" color={theme.palette.warning.main} fontWeight={500}>
            {t('footer.copyright')}
          </Typography>
        </BoxCenterStyled>
      </Container>
    </BoxFooter>
  );
}
