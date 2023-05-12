import { Typography } from '@mui/material';
import { StackStyled } from '../../pages/profile/ProfilePage.style';
interface InputLabelProp {
  children: React.ReactNode;
  label: string;
}
export const InputLabel = ({ children, label }: InputLabelProp) => {
  return (
    <StackStyled direction={'row'} spacing={3}>
      <Typography variant="h3">{label}</Typography>
      {children}
    </StackStyled>
  );
};
