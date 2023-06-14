// _________________________________ React _______________________________
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../redux/api/post/post.api';

// _________________________________ Mui _______________________________
import { Warning } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';

// _________________________________ components _______________________________
import { StackCenter } from '../../components/CustomStack/CustomStackStyled.styles';
import { Carousel } from '../../components/Carousel/Carousel';

// _________________________________ Styles _______________________________

import { WarningMsg } from '../listPostsPage/ListPostsPageStudent.style';
import theme from '../../theme';
import { ArrowSlider, BoxArrowLeft, BoxArrowRight } from './DetailPostPage.style';

// _________________________________ features _______________________________
import { MapSinglePost } from '../../features/map/MapSinglePost';
import { InfoPost } from './InfoPost';

// _________________________________ Redux _______________________________

import { getPersistData } from '../../utils';
import { useGetUserByIdQuery } from '../../redux/api/user/user.api';
import { Localization } from '../../redux/api/post/post.types';

// _________________________________ assets _______________________________
import ArrowLeft from '../../assets/images/left.png';
import ArrowRight from '../../assets/images/rightt.png';

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
          {user && user.role == 'OWNER' && user.phone === null && (
            <>
              <WarningMsg>
                <Warning style={{ color: `${theme.palette.primary.dark}` }} />

                <Typography variant="h6"> {t('listPostsMain.toast_info_owner')}</Typography>
              </WarningMsg>
            </>
          )}

          <BoxArrowLeft>
            <ArrowSlider src={ArrowLeft} alt="Carousel Flesh" />
          </BoxArrowLeft>
          <BoxArrowRight>
            <ArrowSlider src={ArrowRight} alt="Carousel Flesh" />
          </BoxArrowRight>
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
