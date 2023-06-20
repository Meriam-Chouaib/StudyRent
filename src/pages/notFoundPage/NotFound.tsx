import { ImageStyled } from '../../components/image/ImageStyled.type';
import img_404 from '../../assets/images/404.jpg';
import { BoxCenter } from '../../components';
export const NotFound = () => {
  return (
    <>
      <BoxCenter>
        <ImageStyled src={img_404} />
      </BoxCenter>
    </>
  );
};
