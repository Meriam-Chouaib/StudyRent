import { Container } from '@mui/material';
import { GetStarted, Posts } from '../../features';
import { Contact } from '../../features/home/contact/Contact';

export function HomePage() {
  return (
    <>
      <Container>
        <GetStarted />
        <Posts page={2} rowsPerPage={9} />
        <Contact />
      </Container>
    </>
  );
}
