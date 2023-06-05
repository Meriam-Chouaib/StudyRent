/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../redux/api/post/post.api';
import { Box, Container } from '@mui/material';

import { StackCenter } from '../../components/CustomStack/CustomStackStyled.styles';

import { MapSinglePost } from '../../features/map/MapSinglePost';
import { InfoPost } from './InfoPost';

export const DetailPostPage = () => {
  const { id } = useParams();
  const { data } = useGetPostQuery(id);

  return (
    <>
      <Container>
        <StackCenter>
          <InfoPost data={data} />
          <Box paddingBottom={'1rem'} width={'100%'}>
            {data != undefined && data.localization && (
              <MapSinglePost localizations={data.localization} posts={data.post} height="20rem" />
            )}
          </Box>
        </StackCenter>
      </Container>
    </>
  );
};
