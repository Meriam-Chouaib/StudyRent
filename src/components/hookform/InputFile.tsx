import React, { useState } from 'react';
import { Input, Grid, Box } from '@mui/material';
import { Image } from './InputFile.styles';
interface ImageInputProps {
  onSelectImages: (images: File[]) => void;
}
interface IFile {
  filename: string;
}
export default function ImageInput(props: ImageInputProps) {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [files, setFiles] = useState<IFile[]>([]);
  const handleSelectImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      files.push({ filename: Array.from(event.target.files)[0]?.name });
      if (files) console.log(files);

      setSelectedImages(selectedImages);
      event.target.value = '';
      return { files: files };
    } else {
      // setSelectedImages([]);
      setFiles([]);
    }
  };

  React.useEffect(() => {
    props.onSelectImages(selectedImages);
  }, [selectedImages]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Input type="file" inputProps={{ multiple: true }} onChange={handleSelectImages} />
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
