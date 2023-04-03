import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import { Stack, Alert, Box } from '@mui/material';

import { BoxCenterSpaceBetween, CustomButton } from '../../../components';
// components
import { FormProvider, TextField } from '../../../components/hookform';

import { PostModel } from '../../../models/Post.model';
import { PostSchema } from './ValidationSchema';

import { SelectField } from '../../../components/selectField/SelectField';
import ImageInput from '../../../components/hookform/InputFile';

// ----------------------------------------------------------------------

export const AddPost = () => {
  const [problem, setProblem] = useState('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const { fields, defaultValues } = PostModel;

  const { t } = useTranslation();

  const methods = useForm({
    resolver: yupResolver(PostSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const handleSelectImages = (images: File[]) => {
    setSelectedImages(images);
  };

  const onSubmit = async () => {
    console.log(selectedImages);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} alignItems={'center'} justifyContent={'space-between'}>
        {problem && <Alert severity="error">{problem}</Alert>}

        <TextField name={fields.title.name} type={'text'} label={t(fields.title.label)} />
        <TextField
          name={fields.description.name}
          type={'text'}
          label={t(fields.description.label)}
        />

        <TextField name={fields.price.name} type={'text'} label={t(fields.price.label)} />
        <TextField name={fields.surface.name} type={'text'} label={t(fields.surface.label)} />

        <Box sx={{ display: 'flex' }}>
          <SelectField
            id={'nb_roommate'}
            label={t(fields.nb_roommate.label)}
            placeholder={t(fields.nb_roommate.label)}
            name={fields.nb_roommate.name}
            options={[0, 1, 2, 3, 4]}
          />
          <SelectField
            variant="standard"
            id={'nb_rooms'}
            label={t(fields.nb_rooms.label)}
            placeholder={t(fields.nb_rooms.label)}
            name={fields.nb_rooms.name}
            options={[0, 1, 2, 3, 4]}
          />
        </Box>
        <Box sx={{ display: 'block' }}>
          <ImageInput onSelectImages={handleSelectImages} />
          <ImageInput onSelectImages={handleSelectImages} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <TextField
            name={fields.code_postal.name}
            type={'text'}
            label={t(fields.code_postal.label)}
          />

          <SelectField
            variant="standard"
            id={'city'}
            label={t(fields.city.label)}
            placeholder={t(fields.city.label)}
            name={fields.city.name}
            options={['0', '1', '2', '3', '4']}
          />
          <SelectField
            variant="standard"
            id={'state'}
            label={t(fields.state.label)}
            placeholder={t(fields.state.label)}
            name={fields.state.name}
            options={[0, 1, 2, 3, 4]}
          />
        </Box>
        <CustomButton isLoading={isSubmitting}>{t('postForm.add_post')}</CustomButton>
      </Stack>
    </FormProvider>
  );
};
