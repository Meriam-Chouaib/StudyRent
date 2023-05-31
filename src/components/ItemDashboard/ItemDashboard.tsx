import { CardMedia, Stack, Typography } from '@mui/material';
import { ItemDashboardProps } from './ItemDashboard.type';
import { Img } from './ItemDashboard.style';
import theme from '../../theme';
import { STATIC_URL } from '../../config/config';
import { StackItemDashboard } from '../CustomStack/CustomStackStyled.styles';

export const ItemDashboard = ({
  btns,
  img,
  txt_1,
  txt_2,
  heightImg,
  widthImg,
  altImg,
  isPost,
}: ItemDashboardProps) => {
  return (
    <>
      <StackItemDashboard direction="row">
        {/* <CardMedia sx={{ height: 140 }} image={`${STATIC_URL}/${img}`} title="green iguana" /> */}

        <Img
          width={widthImg}
          height={heightImg}
          src={isPost ? `${STATIC_URL}/${img}` : img}
          alt={altImg ? altImg : ''}
        />
        <Typography variant="h3">{txt_1}</Typography>
        <Typography variant="h3">{txt_2}</Typography>
        {btns}
      </StackItemDashboard>
    </>
  );
};
