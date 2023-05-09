// form
import { Controller, useFormContext } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
// type
import { UploadMultiFile } from '../upload';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

interface RHFUploadMultiFileProps {
  name: string;
  showPreview: boolean;
  accept?: string;
  maxSize?: number;
  onDrop?: (files: File[]) => void;
  onRemove: (file: File) => void;
  onRemoveAll: () => void;
  isEdit?: boolean;
}

export function RHFUploadMultiFile({
  name,
  accept,
  onDrop,
  onRemove,
  onRemoveAll,
  showPreview,
  isEdit,
  ...other
}: RHFUploadMultiFileProps) {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && field.value?.length === 0;

        return (
          <UploadMultiFile
            showPreview={showPreview}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
            onDrop={onDrop}
            accept={accept}
            files={field.value}
            error={checkError}
            isEdit={isEdit}
            helperText={
              error && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error.message && t(`${error?.message}`)}
                </FormHelperText>
              )
            }
            {...other}
          />
        );
      }}
    />
  );
}
