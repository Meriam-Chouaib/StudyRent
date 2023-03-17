import { Container } from '@mui/material';
import { GetStarted } from '../../features';
import { Contact } from '../../features/home/contact/Contact';
import { Posts } from '../../features/home/posts/Posts';

export function HomePage() {
  return (
    <>
      <Container>
        <GetStarted />
        <Posts />
        <Contact />
      </Container>
    </>
  );
}
