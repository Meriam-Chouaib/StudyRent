import { Container } from '@mui/material';
import { GetStarted } from '../../features';
import { Posts } from '../../features/home/posts/Posts';

export function HomePage() {
  return (
    <>
      <Container>
        <GetStarted />
        <Posts />
      </Container>
    </>
  );
}
