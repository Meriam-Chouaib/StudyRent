import { Typography } from '@mui/material';
import { BoxItemCard } from './CardPost.style';
import { ItemProps } from './CardPost.type';

export const InfoCard = ({ label, txt, children }: ItemProps) => {
  return (
    <>
      <BoxItemCard>
        <Typography variant="h5">{label}</Typography>
        {children}
        <Typography variant="body2" color="text.secondary" sx={{ paddingLeft: '3rem' }}>
          {txt}
        </Typography>
      </BoxItemCard>
    </>
  );
};
