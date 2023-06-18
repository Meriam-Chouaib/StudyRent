// ___________________________ mui _______________________________________
import { Typography } from '@mui/material';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@material-ui/icons/Room';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@material-ui/icons/Home';

import theme from '../../theme';

// ___________________________ React ________________________________________
import { useTranslation } from 'react-i18next';

// ___________________________ Api ________________________________________
import { SinglePostlocalization } from '../../redux/api/post/post.types';

// ____________________________ format date ________________________
import { formatDate } from '../../utils/getFormatDate';

// ____________________________ Components ________________________
import { TextWithIcon } from '../../components/TextWithIcon/TextWithIcon';
import { StackPostInfo } from './DetailPostPage.style';

interface PostInfoProps {
  data: SinglePostlocalization | undefined;
}
export const InfoPost = ({ data }: PostInfoProps) => {
  const { t } = useTranslation();

  return (
    <>
      <StackPostInfo spacing={2} direction={'column'}>
        <Typography variant="h3">{data?.post.title}</Typography>

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
        <TextWithIcon value={`${data?.post.surface} m²`} label={t('detailPost.surface') as string}>
          <HomeIcon style={{ color: `${theme.palette.primary.main}` }} />
        </TextWithIcon>
        {data?.owner && data?.owner?.role === 'OWNER' && (
          <>
            {data?.owner.phone && (
              <TextWithIcon value={data?.owner.phone} label={t('detailPost.phone') as string}>
                <PhoneIcon style={{ color: `${theme.palette.primary.main}` }} />
              </TextWithIcon>
            )}

            <TextWithIcon value={data?.owner.email} label={t('detailPost.owner') as string}>
              <EmailIcon style={{ color: `${theme.palette.primary.main}` }} />
            </TextWithIcon>
          </>
        )}
      </StackPostInfo>
    </>
  );
};
