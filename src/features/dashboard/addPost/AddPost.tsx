/* eslint-disable @typescript-eslint/no-explicit-any */
// @mui

/** */
import { useCallback, useEffect, useState } from 'react';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// @mui
import { Stack } from '@mui/material';
import { BoxSpaceBetween, CustomButton, Toast } from '../../../components';
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
import { IPostRequest } from '../../../redux/api/post/post.types';
import { IUser } from '../../../redux/api/user/user.types';
import theme from '../../../theme';
import { getPersistData } from '../../../utils';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../../config/paths';

// ----------------------------------------------------------------------
interface AddPostProps {
  btn_txt: string;
  isEdit?: boolean;
}
export const AddPost = ({ btn_txt, isEdit }: AddPostProps) => {
  const navigate = useNavigate();
  const { fields, defaultValues } = PostModel;
  const { id } = useParams();
  // states
  const [problem, setProblem] = useState('');
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [successMessage, setSuccessMessage] = useState('');

  const user: IUser = getPersistData('user', true);

  // -------------- get the post information----------

  const [addPost, { isSuccess: addSuccess, error: addError }] = useAddPostMutation();
  const [editPost, { isSuccess: editSuccess, error: editError }] = useEditPostMutation();

  const { t } = useTranslation();
  const methods = useForm<IPostRequest>({
    resolver: yupResolver(PostSchema),
    defaultValues,
  });

  const {
    control,
    reset,
    getValues,
    setError,
    setValue,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

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
      values?.images?.forEach((file: any) => {
        data.append('files', file);
      });
      const valuesWithoutImages = {
        title: values.title,
        description: values.description,
        price: values.price,

        surface: values.surface,

        nb_roommate: values.nb_roommate,
        nb_rooms: values.nb_rooms,
        postal_code: values.postal_code,
        city: values.city,
      };
      data.append('post', JSON.stringify(valuesWithoutImages));

      console.log('filssssssssssssses999999999999', data.get('files'));
      console.log('postssssssssssssssssss99999999999', data.get('post'));

      // ___________________________________ *** Add post *** ____________________________________________

      if (!isEdit) {
        await addPost(data)
          .unwrap()
          .then((res) => {
            console.log('res', res);

            setSuccessMessage(`${t('dashboardAddPost.success_msg')}`);
          })
          .catch((err) => {
            console.log(err);
            setProblem(`${t('postForm.check_fiels')}`);
          });
      } else {
        // ___________________________________ *** Edit post *** ____________________________________________

        await editPost({
          id: Number(id),
          post: data,
        })
          .unwrap()
          .then((res) => {
            console.log('res', res);
            setSuccessMessage(`${t('dashboardAddPost.success_msg')}`);

            // TODO update files "keep all files and the delete files from edit dosent work the file always still"
            // TODO redirect after edit dosent work
          })
          .catch((err) => {
            console.log(err);

            setProblem(`${t('postForm.check_fiels')}`);
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
        isEdit
          ? [
              ...getValues().images,
              acceptedFiles.map((file: File) => {
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                });
              }),
            ]
          : acceptedFiles.map((file: File) =>
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
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        isEdit
          ? setSuccessMessage(`${t('dashboardAddPost.success_msg_edit')}`)
          : setSuccessMessage(`${t('dashboardAddPost.success_msg')}`);
        navigate(`/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.LIST}`);
      }, 2000);
    }
  }, [successMessage]);
  if (isEdit) {
    const { data } = useGetPostQuery(id);
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
  }

  // ---------------------------------***----------------------------------//

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} alignItems={'center'} justifyContent={'space-between'} width={'90'}>
          {addError && <Toast type={'error'} text={t(`signup.check_fields`)} />}
          {editError && <Toast type={'error'} text={t(`signup.check_fields`)} />}
          {addSuccess && <Toast type={'success'} text={t('dashboardAddPost.success_msg')} />}
          {editSuccess && <Toast type={'success'} text={t('dashboardAddPost.success_msg_edit')} />}

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
              error={true}
              aria-errormessage="errooor"
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
    </>
  );
};
