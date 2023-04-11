/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import { Image } from './InputFile.styles';
import InputStandard from './InputStandard';
interface ImageInputProps {
  onSelectImages: (images: any) => void;
}

export default function ImageInput(props: ImageInputProps) {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  React.useEffect(() => {
    props.onSelectImages(selectedImages);
  }, [selectedImages]);

  return (
    <Box sx={{ display: 'flex' }}>
      <InputStandard
        name={'files'}
        label={'files'}
        type="file"
        onChange={props.onSelectImages}
        multiple={true}
      />
      {selectedImages.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {selectedImages.map((image) => (
            <Grid item xs={6} sm={3} key={image.name}>
              <Image src={URL.createObjectURL(image)} alt={image.name} key={image.name} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
