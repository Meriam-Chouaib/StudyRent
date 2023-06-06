/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../redux/api/post/post.api';
import { Box, Container } from '@mui/material';

import { StackCenter } from '../../components/CustomStack/CustomStackStyled.styles';

import { MapSinglePost } from '../../features/map/MapSinglePost';
import { InfoPost } from './InfoPost';
import { getPersistData } from '../../utils';
import { useGetUserByIdQuery } from '../../redux/api/user/user.api';
import { Carousel } from '../../components/Carousel/Carousel';

export const DetailPostPage = () => {
  const { id } = useParams();
  const { data } = useGetPostQuery(id);
  const user = getPersistData('user', true);
  const { data: userById } = useGetUserByIdQuery({ id: user.id });

  let localizationUniversity = {
    latitude: 35.825603,
    longitude: 10.608395,
  };
  if (user.role === 'STUDENT')
    if (userById?.localizationUniversity !== undefined)
      localizationUniversity = userById?.localizationUniversity;

  return (
    <>
      <Container>
        <StackCenter>
          <Carousel images={data?.post.images} />
          <InfoPost data={data} />
          <Box paddingBottom={'1rem'} width={'100%'}>
            {data != undefined && data.localization && (
              <MapSinglePost
                localizations={[data.localization, localizationUniversity]}
                post={data.post}
                height="20rem"
              />
            )}
          </Box>
        </StackCenter>
      </Container>
    </>
  );
};
