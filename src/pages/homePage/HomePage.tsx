import { Container } from '@mui/material';
import { GetStarted, Posts } from '../../features';
import { Contact } from '../../features/home/contact/Contact';
import { COLORS } from '../../config/colors';

export function HomePage() {
  return (
    <>
      <Container>
        <GetStarted />
        <Posts page={3} rowsPerPage={9} color={COLORS.PRIMARY.DARK} />
        <Contact />
      </Container>
    </>
  );
}
