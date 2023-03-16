import { Typography } from '@mui/material';
import { BoxItemCard } from './CardPost.style';
import { ItemProps } from './CardPost.type';

export const InfoCard = ({ label, txt }: ItemProps) => {
  return (
    <>
      <BoxItemCard>
        <Typography variant="h5">{label}</Typography>
        <Typography variant="body2" color="text.secondary">
          {txt}
        </Typography>
      </BoxItemCard>
    </>
  );
};
