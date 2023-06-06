import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { getImageSrc } from '../../utils/getDefaultImage';
import { Box } from '@mui/material';
import theme from '../../theme';
import { BoxImages, ImgSlider } from '../../pages/DetailPostPage/DetailPostPage.style';
interface carouselProps {
  images?: File[];
}
export const Carousel = ({ images }: carouselProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',
    slides: { origin: 'center', perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });
  return (
    <>
      <BoxImages ref={ref} className="keen-slider">
        {images?.map((item: File, index) => (
          <Box className={`keen-slider__slide number-slide${index}`} key={index} sx={{}}>
            <ImgSlider src={getImageSrc(item.name)} alt={item.name} key={index} />
          </Box>
        ))}
      </BoxImages>
    </>
  );
};
