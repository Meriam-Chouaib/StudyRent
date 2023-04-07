import React, { useState } from 'react';
import { Input, Grid, Box } from '@mui/material';
import { Image } from './InputFile.styles';
import { TextField } from '.';
import InputStandard from './InputStandard';
interface ImageInputProps {
  onSelectImages: (images: File[]) => void;
}
interface IFile {
  filename: string;
}
export default function ImageInput(props: ImageInputProps) {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const handleSelectImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event.target.files);
    }
  };

  React.useEffect(() => {
    props.onSelectImages(selectedImages);
  }, [selectedImages]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <Input
        type="file"
        inputProps={{ multiple: true }}
        onChange={handleSelectImages}
        error={true}
      /> */}
      {/* <TextField
        inputProps={{ multiple: true }}
        onChange={handleSelectImages}
        name={'files'}
        label={'files'}
        type={'file'}
      /> */}
      <InputStandard name={'files'} label={'files'} type="file" />
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
