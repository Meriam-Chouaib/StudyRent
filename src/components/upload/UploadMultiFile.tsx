import { useDropzone } from 'react-dropzone';
// @mui
import { Box } from '@mui/material';
import { SxProps, styled } from '@mui/material/styles';
//
import { ReactNode, useEffect, useState } from 'react';
import BlockContent from './BlockContent';
import MultiFilePreview from './MultiFilePreview';
import RejectionFiles from './RejectionFiles';
import { FilePost } from '../../redux/api/post/post.types';

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
  files: FilePost[];
  onDrop?: (files: FilePost[]) => void;
  onRemove: (file: File) => void;
  onRemoveAll: () => void;
  helperText: ReactNode;
  accept?: string;
  sx?: SxProps;
  isEdit?: boolean;
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
  isEdit,
  ...other
}: UploadMultiFileProps) {
  const [allFiles, setAllFiles] = useState<FilePost[]>([]);

  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    onDrop: (acceptedFiles: FilePost[]) => {
      const filesWithFlags: FilePost[] = acceptedFiles.map((file) => {
        return Object.assign(file, { isNew: true });
      });

      const allimages = filesWithFlags.concat(allFiles);
      console.log('allimages', allimages);

      if (onDrop) onDrop(allimages);
    },
  });

  useEffect(() => {
    setAllFiles(files);
  }, [files]);

  useEffect(() => {
    const inputprops = getInputProps();
    // setAllFiles(files);
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
        files={allFiles}
        showPreview={showPreview}
        onRemove={onRemove}
        onRemoveAll={onRemoveAll}
        isEdit={isEdit}
      />

      {helperText && helperText}
    </Box>
  );
}
