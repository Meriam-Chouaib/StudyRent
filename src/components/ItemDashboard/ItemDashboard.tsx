import { CardMedia, Stack, Typography } from '@mui/material';
import { ItemDashboardProps } from './ItemDashboard.type';
import { Img } from './ItemDashboard.style';
import theme from '../../theme';
import { STATIC_URL } from '../../config/config';
import { StackItemDashboard } from '../CustomStack/CustomStackStyled.styles';
import { Link } from 'react-router-dom';
import { PATHS } from '../../config/paths';

export const ItemDashboard = ({
  btns,
  img,
  txt_1,
  txt_2,
  heightImg,
  widthImg,
  altImg,
  isPost,
  idPost,
}: ItemDashboardProps) => {
  return (
    <>
      <StackItemDashboard direction="row">
        <Link to={`/${PATHS.POSTS}/${idPost}`} style={{ textDecoration: 'none' }}>
          <Img
            width={widthImg}
            height={heightImg}
            src={isPost ? `${STATIC_URL}/${img}` : img}
            alt={altImg ? altImg : ''}
          />
        </Link>
        <Link to={`/${PATHS.POSTS}/${idPost}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h3">{txt_1}</Typography>
        </Link>
        <Link to={`/${PATHS.POSTS}/${idPost}`} style={{ textDecoration: 'none' }}>
          <Typography variant="h3">{txt_2}</Typography>
        </Link>
        {btns}
      </StackItemDashboard>
    </>
  );
};
