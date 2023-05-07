/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion';
import isString from 'lodash/isString';
// @mui
import { Button, IconButton, List, ListItem, ListItemText, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
// utils
import { fData } from '../../utils/formatNumber';
//
import CloseIllustration from '../../assets/illustration_close';
import FileIllustration from '../../assets/illustration_file';
import { varFade } from '../animate/fade';
import Image from '../image/Image';
import { useTranslation } from 'react-i18next';
import { STATIC_URL } from '../../config/config';
import { FilePost } from '../../redux/api/post/post.types';

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFileData = (file: any) => {
  if (typeof file === 'string') {
    return {
      key: file,
    };
  }
  return {
    key: file.name,
    name: file.name,
    size: file.size,
    preview: file.preview,
  };
};

// ----------------------------------------------------------------------

interface MultiFilePreviewProps {
  files: FilePost[];
  showPreview: boolean;
  onRemove: (file: File) => void;
  onRemoveAll: () => void;
  isEdit?: boolean;
}

export default function MultiFilePreview({
  showPreview,
  files,
  onRemove,
  onRemoveAll,
  isEdit,
}: MultiFilePreviewProps) {
  const hasFile = files && files.length > 0;
  const { t } = useTranslation();
  console.log('2222222222222222222222', files);

  function getImageSrc(file: FilePost, preview: any): any {
    return file.isNew ? URL.createObjectURL(file) : `${STATIC_URL}/${file.name}`;
  }
  return (
    <>
      <List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
        <AnimatePresence>
          {files &&
            files.map((file, index) => {
              const { key, name, size, preview } = getFileData(file);
              if (showPreview) {
                return (
                  <ListItem
                    key={index}
                    component={motion.div}
                    {...varFade().inRight}
                    sx={{
                      p: 0,
                      m: 0.5,
                      width: 80,
                      height: 80,
                      borderRadius: 1.25,
                      overflow: 'hidden',
                      position: 'relative',
                      display: 'inline-flex',
                      border: (theme) => `solid 1px ${theme.palette.divider}`,
                    }}
                  >
                    <Image
                      alt="preview"
                      src={getImageSrc(file, preview)}
                      ratio="1/1"
                      disabledEffect={false}
                      effect={'blur'}
                    />

                    <IconButton
                      size="small"
                      onClick={() => onRemove(file)}
                      sx={{
                        top: 6,
                        p: '2px',
                        right: 6,
                        position: 'absolute',
                        color: 'common.white',
                        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                        '&:hover': {
                          bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
                        },
                      }}
                    >
                      <CloseIllustration />
                    </IconButton>
                  </ListItem>
                );
              }

              return (
                <ListItem
                  key={key}
                  component={motion.div}
                  {...varFade().inRight}
                  sx={{
                    my: 1,
                    px: 2,
                    py: 0.75,
                    borderRadius: 0.75,
                    border: (theme) => `solid 1px ${theme.palette.divider}`,
                  }}
                >
                  <FileIllustration
                    sx={{ width: 28, height: 28, color: 'text.secondary', mr: 2 }}
                  />

                  <ListItemText
                    primary={isString(file) ? file : name}
                    secondary={isString(file) ? '' : fData(size || 0)}
                    primaryTypographyProps={{ variant: 'subtitle2' }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />

                  <IconButton edge="end" size="small" onClick={() => onRemove(file)}>
                    <CloseIllustration />
                  </IconButton>
                </ListItem>
              );
            })}
        </AnimatePresence>
      </List>

      {hasFile && (
        <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
          <Button color="inherit" size="small" onClick={onRemoveAll}>
            {t('dashboardAddPost.remove')}
          </Button>
        </Stack>
      )}
    </>
  );
}
