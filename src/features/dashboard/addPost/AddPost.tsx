/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import { Stack, Alert, Box } from '@mui/material';
import { CustomButton } from '../../../components';
// components
import { FormProvider, TextField } from '../../../components/hookform';
import { PostModel } from '../../../models/Post.model';
import { PostSchema } from './ValidationSchema';

import { SelectField } from '../../../components/selectField/SelectField';
import ImageInput from '../../../components/hookform/InputFile';
import { Files, IPostRequest } from '../../../redux/api/post/post.types';
import { useAddPostMutation } from '../../../redux/api/post/post.api';
import { getPersistData } from '../../../utils';
import theme from '../../../theme';
import { IUser } from '../../../redux/api/user/user.types';
import InputStandard from '../../../components/hookform/InputStandard';

// ----------------------------------------------------------------------

export const AddPost = ({ isEdit }: { isEdit: boolean }) => {
  const [problem, setProblem] = useState('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const user: IUser = getPersistData('user', true);
  const { fields, defaultValues } = PostModel;
  const [addPost] = useAddPostMutation();
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

  const onSubmit = async ({
    title,
    description,
    price,
    surface,
    files,
    nb_roommate,
    nb_rooms,
    postal_code,
    city,
    state,
  }: IPostRequest) => {
    const dataPost = {
      title,
      description,
      price,
      surface,
      files,
      nb_roommate,
      nb_rooms,
      postal_code,
      city,
      state,
      posterId: user.id,
    };
    try {
      console.log('data', dataPost);
      const data = new FormData();

      console.log(selectedImages);

      data.append('post', JSON.stringify(dataPost));
      selectedImages.forEach((file) => {
        data.append('files', file, file.name);
      });
      console.log(data);

      await addPost(data)
        .unwrap()
        .then((res) => {
          console.log('data', data);
          console.log('res', res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error: any) {
      console.log(error);
      console.error(error);
      reset();
      setError('title', { ...error, message: error.message });
      setError('description', { ...error, message: error.message });
      setError('price', { ...error, message: error.message });
      setError('surface', { ...error, message: error.message });
      setError('files', { ...error, message: error.message });
      setError('nb_rooms', { ...error, message: error.message });
      setError('postal_code', { ...error, message: error.message });
      setError('city', { ...error, message: error.message });
      setError('description', { ...error, message: error.message });
    }

    if (files) setSelectedImages(files);
  };

  const handleSelectImages = async () => {
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
        <ImageInput onSelectImages={handleSelectImages} />
        {/* <InputStandard name={'files'} label={'files'} type={'file'} /> */}
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

        <Box sx={{ display: 'flex' }}>
          <TextField
            name={fields.postal_code.name}
            type={'number'}
            label={t(fields.postal_code.label)}
          />

          <SelectField
            variant="standard"
            id={'city'}
            label={t(fields.city.label)}
            placeholder={t(fields.city.label)}
            name={fields.city.name}
            options={['Monastir', 'Sousse', 'Zaghouan', 'Mahdia', 'Hammemet']}
          />
          <SelectField
            variant="standard"
            id={'state'}
            label={t(fields.state.label)}
            placeholder={t(fields.state.label)}
            name={fields.state.name}
            options={['Monastir', 'Sousse', 'Zaghouan', 'Mahdia', 'Hammemet']}
          />
        </Box>
        <CustomButton
          isLoading={isSubmitting}
          colorBack={`${theme.palette.primary.main}`}
          colorText={`${theme.palette.warning.main}`}
        >
          {isEdit ? t('postForm.edit_post') : t('postForm.add_post')}
        </CustomButton>
      </Stack>
    </FormProvider>
  );
};
