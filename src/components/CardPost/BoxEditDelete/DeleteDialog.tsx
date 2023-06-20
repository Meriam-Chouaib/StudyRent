/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
// mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Typography } from '@mui/material';

// icon
import IconDelete from '../../../assets/icons/ic_delete';

// style
import { ButtonConfirm } from './BoxEditDelete.styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface AlertDialogSlideProps {
  idPost: number;
  handleCloseAgree: () => void;
  handleClickOpen: () => void;
  handleClose: () => void;
  open: boolean;
  confirm_text: string;
  title_text: string;
}
export const AlertDialogSlide = ({
  handleClickOpen,
  handleClose,
  handleCloseAgree,
  open,
  confirm_text,
  title_text,
}: AlertDialogSlideProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <IconDelete></IconDelete>
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography variant="h3">{title_text}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{confirm_text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonConfirm onClick={handleClose}>{t('dashboardListPosts.cancel')}</ButtonConfirm>
          <ButtonConfirm onClick={handleCloseAgree}>
            {t('dashboardListPosts.confirm')}
          </ButtonConfirm>
        </DialogActions>
      </Dialog>
    </div>
  );
};
