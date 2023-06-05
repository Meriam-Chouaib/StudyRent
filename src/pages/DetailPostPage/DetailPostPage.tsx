/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../redux/api/post/post.api';
import { Box, CardMedia, Container, Stack, Typography } from '@mui/material';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { STATIC_URL } from '../../config/config';
import { getDefaultImagePath, getImageSrc } from '../../utils/getDefaultImage';
import { formatDate } from '../../utils/getFormatDate';
import { Slide } from '@mui/material';
import { Post } from '../../redux/api/post/post.types';
import { StackCenter } from '../../components/CustomStack/CustomStackStyled.styles';
import { useTranslation } from 'react-i18next';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import { TextWithIcon } from '../../components/TextWithIcon/TextWithIcon';
import RoomIcon from '@material-ui/icons/Room';
import DetailsIcon from '@material-ui/icons/Details';
import { BoxImages } from './DetailPostPage.style';
import { MapSinglePost } from '../../features/map/MapSinglePost';
export const DetailPostPage = () => {
  const { id } = useParams();
  const { data } = useGetPostQuery(id);
  console.log('data?.localization', data?.localization);
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <StackCenter>
          <Typography variant="h1">{data?.post.title}</Typography>
          <BoxImages>
            {data?.post.images &&
              data?.post.images.map((item: File) => (
                <Box key={item.name}>
                  <CardMedia
                    sx={{ height: '120px', width: '20rem' }}
                    image={getImageSrc(item.name)}
                    title="green iguana"
                  />
                </Box>
              ))}
          </BoxImages>
          <Stack
            sx={{ width: '100%', padding: '2rem 0', alignItems: 'flex-start' }}
            spacing={2}
            direction={'column'}
          >
            <TextWithIcon value={data?.post.nb_rooms} label={t('detailPost.nb_rooms') as string}>
              <SingleBedIcon />
            </TextWithIcon>
            <TextWithIcon value={data?.post.city} label={t('detailPost.city') as string}>
              <RoomIcon />
            </TextWithIcon>
            <TextWithIcon
              value={formatDate(data?.post.datePost)}
              label={t('detailPost.date') as string}
            >
              <DateRangeIcon />
            </TextWithIcon>
            <TextWithIcon
              value={data?.post.description}
              label={t('detailPost.description') as string}
            ></TextWithIcon>
          </Stack>
          <Box paddingBottom={'1rem'}>
            {data && data.localization && (
              <MapSinglePost
                localizations={data?.localization}
                posts={data && data.post}
                height="12rem"
              />
            )}
          </Box>
        </StackCenter>
      </Container>
    </>
  );
};
