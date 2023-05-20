import { Container } from '@mui/material';
import { COLORS } from '../../config/colors';
import { GetStarted, Posts } from '../../features';
import { Contact } from '../../features/home/contact/Contact';
import { initialPostsPaginator } from '../../features/home/posts/posts.constants';
import usePaginator from '../../hooks/usePaginator';
import { useGetPostsQuery } from '../../redux/api/post/post.api';

export function HomePage() {
  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 6,
  });
  const { data, isLoading, isError, error } = useGetPostsQuery(paginator);

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
          dataPosts={data?.posts}
          isLoading={isLoading}
          onChangePage={onChangePage}
        />

        <Contact />
      </Container>
    </>
  );
}
