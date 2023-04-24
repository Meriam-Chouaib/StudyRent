/* eslint-disable @typescript-eslint/no-explicit-any */
// @mui

/** */
import { useCallback, useEffect, useState } from 'react';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// @mui
import { Alert, Stack } from '@mui/material';
import { BoxSpaceBetween, CustomButton } from '../../../components';
// components
import { FormProvider, TextField } from '../../../components/hookform';
import { PostModel } from '../../../models/Post.model';
import { PostSchema } from './ValidationSchema';

import { RHFUploadMultiFile } from '../../../components/hookform/RHFUploadFile';
import { SelectField } from '../../../components/selectField/SelectField';
import {
  useAddPostMutation,
  useEditPostMutation,
  useGetPostQuery,
} from '../../../redux/api/post/post.api';
import { IPostRequest, Post } from '../../../redux/api/post/post.types';
import { IUser } from '../../../redux/api/user/user.types';
import theme from '../../../theme';
import { getPersistData } from '../../../utils';
import { useParams } from 'react-router-dom';
import { LoaderBox } from '../../../components/Loader/LoaderBox';

// ----------------------------------------------------------------------
interface AddPostProps {
  btn_txt: string;
  isEdit?: boolean;
}
export const AddPost = ({ btn_txt, isEdit }: AddPostProps) => {
  const { fields, defaultValues } = PostModel;

  const [problem, setProblem] = useState('');
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const user: IUser = getPersistData('user', true);

  // -------------- get the post information----------

  const { id } = useParams();

  const [addPost] = useAddPostMutation();
  const [editPost] = useEditPostMutation();
  const { t } = useTranslation();
  const methods = useForm({
    resolver: yupResolver(PostSchema),
    defaultValues,
  });

  const {
    control,
    reset,

    setError,
    setValue,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // const values = watch();
  const values = watch();

  const onSubmit = async ({
    title,
    description,
    price,
    surface,
    images,
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
      images,
      nb_roommate,
      nb_rooms,
      postal_code,
      city,
      state,
      posterId: user.id,
    };

    try {
      const data = new FormData();

      console.log(selectedImages);

      data.append('post', JSON.stringify(values));
      values.images.forEach((file: any) => {
        data.append('files', file);
      });

      if (!isEdit) {
        await addPost(data)
          .unwrap()
          .then((res) => {
            console.log('res', res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // await editPost(Number(id), data)
        console.log('files', data.get('files'));
        console.log('post', data.get('post'));

        await editPost({
          id: Number(id),
          post: data,
          //  files: data?.get('files') as unknown as File[],
        })
          .unwrap()
          .then((res) => {
            console.log('res', res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error: any) {
      console.log(error);
      console.error(error);
      reset();
      setError('title', { ...error, message: error.message });
      setError('description', { ...error, message: error.message });
      setError('price', { ...error, message: error.message });
      setError('surface', { ...error, message: error.message });
      setError('images', { ...error, message: error.message });
      setError('nb_rooms', { ...error, message: error.message });
      setError('postal_code', { ...error, message: error.message });
      setError('city', { ...error, message: error.message });
      setError('description', { ...error, message: error.message });
    }
  };

  // ---------------------------------***----------------------------------//

  const handleDrop = useCallback(
    (acceptedFiles: any) =>
      setValue(
        'images',
        acceptedFiles.map((file: File) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      ),
    [setValue],
  );

  const handleRemoveAll = () => {
    setValue('images', []);
  };

  const handleRemove = (file: any) => {
    const filteredItems = values.images?.filter((_file) => _file !== file);
    setValue('images', filteredItems);
  };
  const { data, isLoading, isError } = useGetPostQuery(id);
  console.log('get Post by id', data);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        reset({
          title: data.title,
          description: data.description,
          price: data.price,
          surface: data.surface,
          nb_roommate: data.nb_roommate,
          nb_rooms: data.nb_rooms,
          city: data.city,
          state: data.state,
          postal_code: data.postal_code,
          images: data.images,
        });
      }, 2000);
    }
  }, [data, reset]);
  // ---------------------------------***----------------------------------//

  return (
    <>
      {isLoading ? (
        <LoaderBox />
      ) : (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} alignItems={'center'} justifyContent={'space-between'} width={'90'}>
            {problem && <Alert severity="error">{problem}</Alert>}

            <TextField name={fields.title.name} type={'text'} label={t(fields.title.label)} />
            <TextField
              name={fields.description.name}
              type={'text'}
              label={t(fields.description.label)}
            />

            <TextField name={fields.price.name} type={'text'} label={t(fields.price.label)} />
            <TextField name={fields.surface.name} type={'text'} label={t(fields.surface.label)} />
            <RHFUploadMultiFile
              name={fields.files.name}
              showPreview={true}
              accept="image/*"
              maxSize={3145728645684684}
              onDrop={handleDrop}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
              isEdit={isEdit}
            />
            <BoxSpaceBetween>
              <SelectField
                id={'nb_roommate'}
                type={'text'}
                label={t(fields.nb_roommate.label)}
                placeholder={t(fields.nb_roommate.label)}
                name={fields.nb_roommate.name}
                options={[0, 1, 2, 3, 4]}
              />
              <SelectField
                fullWidth
                variant="standard"
                id={'nb_rooms'}
                label={t(fields.nb_rooms.label)}
                placeholder={t(fields.nb_rooms.label)}
                name={fields.nb_rooms.name}
                options={[0, 1, 2, 3, 4]}
              />
            </BoxSpaceBetween>

            <BoxSpaceBetween>
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
            </BoxSpaceBetween>
            <TextField
              name={fields.postal_code.name}
              type={'text'}
              label={t(fields.postal_code.label)}
            />

            <CustomButton
              isLoading={isSubmitting}
              colorBack={`${theme.palette.primary.main}`}
              colorText={`${theme.palette.warning.main}`}
            >
              {btn_txt}
            </CustomButton>
          </Stack>
        </FormProvider>
      )}
    </>
  );
};
