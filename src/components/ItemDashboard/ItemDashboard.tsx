import { Stack, Typography } from '@mui/material';
import { ItemDashboardProps } from './ItemDashboard.type';
import { Img } from './ItemDashboard.style';
import theme from '../../theme';

export const ItemDashboard = ({
  btns,
  img,
  txt_1,
  txt_2,
  heightImg,
  widthImg,
  altImg,
}: ItemDashboardProps) => {
  return (
    <>
      <Stack
        direction="row"
        // spacing={20}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          boxShadow: `1px 1px 7px 1px  ${theme.palette.grey[400]}`,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '5px 5px',
        }}
      >
        <Img width={widthImg} height={heightImg} src={img} alt={altImg ? altImg : ''} />
        <Typography variant="h3">{txt_1}</Typography>
        <Typography variant="h3">{txt_2}</Typography>
        {btns}
      </Stack>
    </>
  );
};
