import { Container } from '@mui/material';
import { COLORS } from '../../config/colors';
import { GetStarted, Posts } from '../../features';
import { Contact } from '../../features/home/contact/Contact';

export function HomePage() {
  return (
    <>
      <Container>
        <GetStarted />

        <Posts
          page={1}
          rowsPerPage={6}
          color={COLORS.PRIMARY.DARK}
          padding="4rem 5rem"
          margin="2rem 0"
          withButton={true}
          isHomePage={true}
        />

        <Contact />
      </Container>
    </>
  );
}
