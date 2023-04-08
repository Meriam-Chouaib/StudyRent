import { Container, Box } from '@mui/material';
import { GetStarted, Posts } from '../../features';
import { Contact } from '../../features/home/contact/Contact';
import { COLORS } from '../../config/colors';

export function HomePage() {
  return (
    <>
      <Container>
        <GetStarted />

        <Posts
          page={2}
          rowsPerPage={9}
          color={COLORS.PRIMARY.DARK}
          padding="4rem 5rem"
          margin="2rem 0"
          withButton={true}
        />

        <Contact />
      </Container>
    </>
  );
}
