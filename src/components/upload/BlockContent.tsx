// @mui
import { Box, Stack, Typography } from '@mui/material';
// assets
import { UploadIllustration } from '../../assets/illustration_upload';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function BlockContent() {
  const { t } = useTranslation();
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: 'column', md: 'row' }}
      sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
    >
      <UploadIllustration sx={{ width: 150 }} />

      <Box sx={{ p: 3 }}>
        <Typography gutterBottom variant="h5">
          {t('dashboardAddPost.select_file_title')}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t('dashboardAddPost.select_file_txt_1')}
          &nbsp;
          <Typography
            variant="body2"
            component="span"
            sx={{ color: 'primary.main', textDecoration: 'underline' }}
          >
            {t('dashboardAddPost.browse')}
          </Typography>
          &nbsp;{t('dashboardAddPost.select_file_txt_2')}
        </Typography>
      </Box>
    </Stack>
  );
}
