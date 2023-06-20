import { Typography } from '@mui/material';
import { StackStyled } from '../../pages/profile/ProfilePage.style';
interface InputLabelProp {
  children: React.ReactNode;
  label: string;
  sx?: string;
}
export const InputLabel = ({ children, label, sx }: InputLabelProp) => {
  return (
    <StackStyled direction={'row'} spacing={3} sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h3" sx={{ width: '8.5rem' }}>
        {label}
      </Typography>
      {children}
    </StackStyled>
  );
};
