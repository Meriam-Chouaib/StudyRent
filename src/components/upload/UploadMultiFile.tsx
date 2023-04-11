import { useDropzone } from 'react-dropzone';
// @mui
import { Box } from '@mui/material';
import { SxProps, styled } from '@mui/material/styles';
//
import { ReactNode, useEffect } from 'react';
import BlockContent from './BlockContent';
import MultiFilePreview from './MultiFilePreview';
import RejectionFiles from './RejectionFiles';

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  padding: theme.spacing(2, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px dashed ${theme.palette.grey[500]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
  [theme.breakpoints.down('md')]: {},
}));

// ----------------------------------------------------------------------

interface UploadMultiFileProps {
  error: boolean;
  showPreview: boolean;
  files: [];
  onDrop?: (files: File[]) => void;
  onRemove: (file: File) => void;
  onRemoveAll: () => void;
  helperText: ReactNode;
  accept?: string;
  sx?: SxProps;
}

export default function UploadMultiFile({
  error,
  showPreview,
  files,
  onRemove,
  onRemoveAll,
  helperText,
  accept,
  onDrop,
  sx,
  ...other
}: UploadMultiFileProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    onDrop,
  });
  useEffect(() => {
    const inputprops = getInputProps();
    console.log('inputprops', inputprops);
  }, [getInputProps]);

  return (
    <Box sx={{ width: '84%', ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter',
          }),
        }}
      >
        <input {...getInputProps()} />
        <BlockContent />
      </DropZoneStyle>

      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      <MultiFilePreview
        files={files}
        showPreview={showPreview}
        onRemove={onRemove}
        onRemoveAll={onRemoveAll}
      />

      {helperText && helperText}
    </Box>
  );
}
