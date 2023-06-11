/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../redux/api/post/post.api';
import { Box, Container, Typography } from '@mui/material';

import { StackCenter } from '../../components/CustomStack/CustomStackStyled.styles';

import { MapSinglePost } from '../../features/map/MapSinglePost';
import { InfoPost } from './InfoPost';
import { getPersistData } from '../../utils';
import { useGetUserByIdQuery } from '../../redux/api/user/user.api';
import { Carousel } from '../../components/Carousel/Carousel';
import { Localization } from '../../redux/api/post/post.types';
import { WarningMsg } from '../listPostsPage/ListPostsPageStudent.style';
import { Warning } from '@mui/icons-material';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';

export const DetailPostPage = () => {
  const { id } = useParams();
  const { data } = useGetPostQuery(id);
  const user = getPersistData('user', true);
  const { data: userById } = useGetUserByIdQuery({ id: user && user.id });
  const localizaionsToSend: Localization[] = [];

  if (data?.localization) localizaionsToSend.push(data.localization);
  if (user && user.role === 'STUDENT')
    if (
      userById?.user &&
      userById?.user.universityAddress !== null &&
      userById.localizationUniversity
    )
      localizaionsToSend.push(userById?.localizationUniversity);

  const { t } = useTranslation();
  return (
    <>
      <Container>
        <StackCenter>
          {user && user.role == 'STUDENT' && user.university === null && (
            <>
              <WarningMsg>
                <Warning style={{ color: `${theme.palette.primary.dark}` }} />

                <Typography variant="h6"> {t('listPostsMain.toast_info')}</Typography>
              </WarningMsg>
            </>
          )}
          <Carousel images={data?.post.images} />
          <InfoPost data={data} />
          <Box paddingBottom={'1rem'} width={'100%'}>
            {data != undefined && data.localization && localizaionsToSend && (
              <MapSinglePost localizations={localizaionsToSend} post={data.post} height="20rem" />
            )}
          </Box>
        </StackCenter>
      </Container>
    </>
  );
};
