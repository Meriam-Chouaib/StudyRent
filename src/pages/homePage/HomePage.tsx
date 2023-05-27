import { Container } from '@mui/material';
import { COLORS } from '../../config/colors';
import { GetStarted, Posts } from '../../features';
import { Contact } from '../../features/home/contact/Contact';
import { initialPostsPaginator } from '../../features/home/posts/posts.constants';
import usePaginator from '../../hooks/usePaginator';
import { useGetPostsHomeQuery, useGetPostsQuery } from '../../redux/api/post/post.api';
import { getPersistData } from '../../utils';
import { splitAddress } from '../../utils/splitAddress';
import { ButtonWithIcon } from '../../components';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';

export function HomePage() {
  const user = getPersistData('user', true);
  const universityAddress = splitAddress(user.universityAddress);
  console.log('universityAddress', universityAddress);
  const [isWithAddress, setIsWithAddress] = useState<boolean>(false);

  const { paginator, onChangePage, onChangeRowsPerPage } = usePaginator({
    ...initialPostsPaginator,
    rowsPerPage: 6,
    universityAddress: universityAddress[0],
  });

  const handleGetAll = () => {
    setIsWithAddress(true);
  };
  const { data, isLoading, isError, error } = useGetPostsHomeQuery(paginator);

  return (
    <>
      <Container>
        <GetStarted />
        <ButtonWithIcon
          icon={<KeyboardDoubleArrowRightIcon />}
          txt={'Show all'}
          onClick={handleGetAll}
        />
        <Posts
          page={1}
          rowsPerPage={6}
          color={COLORS.PRIMARY.DARK}
          padding="2rem 0"
          margin="2rem 0"
          withButton={true}
          isHomePage={true}
          dataPosts={data?.posts}
          isLoading={isLoading}
          onChangePage={onChangePage}
        />

        {data != undefined && data.localizations[0] !== null && (
          <Contact localizations={data.localizations} posts={data.posts} />
        )}
      </Container>
    </>
  );
}
