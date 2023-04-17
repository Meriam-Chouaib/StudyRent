// form
import { Controller, useFormContext } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
// type
import { UploadMultiFile } from '../upload';

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
  maxSize,
  onDrop,
  onRemove,
  onRemoveAll,
  showPreview,
  isEdit,
  ...other
}: RHFUploadMultiFileProps) {
  const { control } = useFormContext();

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
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
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
