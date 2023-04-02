import { useState } from 'react';
import { BoxHoverEye, CardPostStyled } from './CardPost.style';
import { CardPostProps } from './CardPost.type';
// mui
import { CardContent, CardMedia, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { InfoCard } from './InfoCard';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Not_found_img } from '../../assets/images/empty_item.svg';
import { STATIC_URL } from '../../config/config';
export const CardPost = ({ title, price, city, img }: CardPostProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <CardPostStyled
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        sx={{ position: 'relative' }}
      >
        {img ? (
          <CardMedia sx={{ height: 140 }} image={`${STATIC_URL}/${img}`} title="green iguana" />
        ) : (
          <Not_found_img height={140} />
        )}

        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {title}
          </Typography>
          <InfoCard label={t('home.card_txt_city') as string} txt={city} />

          {isHovered && (
            <BoxHoverEye>
              <VisibilityIcon color="primary" fontSize="large" />
            </BoxHoverEye>
          )}
          <InfoCard label={t('home.card_txt_price') as string} txt={price.toString() + 'DT'} />
        </CardContent>
      </CardPostStyled>
    </>
  );
};
