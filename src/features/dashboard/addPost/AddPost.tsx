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
  useDeleteFilesMutation,
  useEditPostMutation,
  useGetPostQuery,
} from '../../../redux/api/post/post.api';
import { IPostRequest } from '../../../redux/api/post/post.types';
import theme from '../../../theme';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../../config/paths';
import { getPersistData } from '../../../utils';
import { cities_data } from '../../home/posts/fakeData';

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
  const [successMessage, setSuccessMessage] = useState('');
  const [addPost, { isSuccess: addSuccess, error: addError }] = useAddPostMutation();
  const [editPost, { isSuccess: editSuccess, error: editError }] = useEditPostMutation();
  const [deleteFiles] = useDeleteFilesMutation();
  const { t } = useTranslation();
  const user = getPersistData('user', true);
  const methods = useForm<IPostRequest>({
    resolver: yupResolver(PostSchema),
    defaultValues,
  });
  const {
    reset,
    setValue,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const values = watch();

  const onSubmit = async () => {
    try {
      const data = new FormData();

      values?.images?.forEach((file: any) => {
        if (file.isNew) data.append('files', file);
      });
      const valuesWithoutImages = {
        title: values.title,
        description: values.description,
        price: values.price,
        surface: values.surface,
        nb_roommate: values.nb_roommate,
        nb_rooms: values.nb_rooms,
        postal_code: values.postal_code,
        state: values.state,
        city: values.city,
      };

      data.append('post', JSON.stringify(valuesWithoutImages));

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
            //    setProblem(`${t('postForm.check_fiels')}`);

            setProblem(err.data.message);
          });
      } else {
        // ___________________________________ *** Edit post *** ____________________________________________

        await editPost({
          id: Number(id),
          post: data,
        })
          .unwrap()
          .then((res) => {
            setSuccessMessage(`${t('dashboardAddPost.success_msg')}`);
          })

          .catch((err) => {
            console.log(err);
            if (err.data && err.data.message) {
              setProblem(err.data.message);
            } else {
              setProblem(`${t('dashboardAddPost.error_msg')}`);
            }
          });
      }
    } catch (error: any) {
      console.error(error);
      reset();
    }
  };

  // ---------------------------------*** delete files ----------------------------------//

  const handleDrop = useCallback(
    (acceptedFiles: any) => setValue('images', acceptedFiles),
    [setValue],
  );

  const handleRemoveAll = () => {
    if (window.confirm(t('dashboardListPosts.delete_confirm') as string)) {
      deleteFiles(Number(id));
      setValue('images', []);
    }
  };

  const handleRemove = (file: any) => {
    const filteredItems = values.images?.filter((_file) => _file !== file);
    setValue('images', filteredItems);
  };
  console.log('user role', user.role);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        isEdit
          ? setSuccessMessage(`${t('dashboardAddPost.success_msg_edit')}`)
          : setSuccessMessage(`${t('dashboardAddPost.success_msg')}`);

        user.role === 'ADMIN'
          ? navigate(
              `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/${PATHS.DASHBOARD.ADMIN.POSTS}`,
            )
          : navigate(`/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.POST.LIST}`);
      }, 800);
    }
  }, [successMessage]);

  // -------------- get the post information----------
  if (isEdit) {
    const { data } = useGetPostQuery(id);

    useEffect(() => {
      if (data) {
        setTimeout(() => {
          reset({
            title: data.post.title,
            description: data.post.description,
            price: Number(data.post.price),
            surface: data.post.surface,
            nb_roommate: data.post.nb_roommate,
            nb_rooms: data.post.nb_rooms,
            city: data.post.city,
            state: data.post.state,
            postal_code: Number(data.post.postal_code),
            images: data.post.images,
          });
        }, 2000);
      }
    }, [data, reset]);
  }
  const cities_data_values = Object.values(cities_data).map((city) => city.value);
  // ---------------------------------***----------------------------------//

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} alignItems={'center'} justifyContent={'space-between'} width={'90'}>
          {addError && <Toast type={'error'} text={t(problem)} />}
          {editError && problem && <Toast type={'error'} text={problem} />}
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
              options={cities_data_values}
            />

            <SelectField
              variant="standard"
              id={'state'}
              label={t(fields.state.label)}
              placeholder={t(fields.state.label)}
              name={fields.state.name}
              options={cities_data_values}
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
