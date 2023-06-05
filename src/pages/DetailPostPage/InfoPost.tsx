/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, CardMedia, Typography } from '@mui/material';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { getImageSrc } from '../../utils/getDefaultImage';
import { formatDate } from '../../utils/getFormatDate';
import { SinglePostlocalization } from '../../redux/api/post/post.types';

import { useTranslation } from 'react-i18next';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import { TextWithIcon } from '../../components/TextWithIcon/TextWithIcon';
import RoomIcon from '@material-ui/icons/Room';

import { BoxImages, StackPostInfo } from './DetailPostPage.style';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import theme from '../../theme';

interface PostInfoProps {
  data: SinglePostlocalization | undefined;
}
export const InfoPost = ({ data }: PostInfoProps) => {
  const { t } = useTranslation();

  return (
    <>
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
      <StackPostInfo spacing={2} direction={'column'}>
        <Typography variant="h1">{t('detailPost.description') as string}</Typography>
        <Typography variant="body1"> {data?.post.description}</Typography>
        <TextWithIcon value={data?.post.nb_rooms} label={t('detailPost.nb_rooms') as string}>
          <SingleBedIcon style={{ color: `${theme.palette.primary.main}` }} />
        </TextWithIcon>
        <TextWithIcon value={data?.post.city} label={t('detailPost.city') as string}>
          <RoomIcon style={{ color: `${theme.palette.primary.main}` }} />
        </TextWithIcon>
        <TextWithIcon
          value={formatDate(data?.post.datePost)}
          label={t('detailPost.date') as string}
        >
          <DateRangeIcon style={{ color: `${theme.palette.primary.main}` }} />
        </TextWithIcon>
        <TextWithIcon value={data?.owner?.phone} label={t('detailPost.phone') as string}>
          <PhoneIcon style={{ color: `${theme.palette.primary.main}` }} />
        </TextWithIcon>
        <TextWithIcon value={data?.owner?.username} label={t('detailPost.owner') as string}>
          <AccountCircleIcon style={{ color: `${theme.palette.primary.main}` }} />
        </TextWithIcon>
      </StackPostInfo>
    </>
  );
};
