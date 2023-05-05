import { BoxCenter } from '../../../components';
import { ListItem } from '@mui/material';
import Image from '../../../components/image/Image';
import { motion } from 'framer-motion';
import { STATIC_URL } from '../../../config/config';
import isString from 'lodash/isString';
import { varFade } from '../../../components/animate/fade';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface PostFilesProps {
  imageData: File[] | never[];
}
export const PostFiles = ({ imageData }: PostFilesProps) => {
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
  function getImageSrc(file: File, preview: any): any {
    return isString(file) ? `${STATIC_URL}/${file.name}` : preview;
  }
  return (
    <BoxCenter>
      {imageData &&
        imageData.map((file, index) => {
          const { key, name, size, preview } = getFileData(file);

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
                key={key}
                alt="preview"
                src={getImageSrc(file, preview)}
                ratio="1/1"
                disabledEffect={false}
                effect={'blur'}
              />
            </ListItem>
          );
        })}
    </BoxCenter>
  );
};
