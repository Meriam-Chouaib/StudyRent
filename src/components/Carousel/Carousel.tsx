// _________________________________ React _______________________________
import { useEffect, useRef } from 'react';

// _________________________________ KeenSlider _______________________________
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

// _________________________________ utils _______________________________
import { getImageSrc } from '../../utils/getDefaultImage';

// _________________________________ mui _______________________________
import { Box } from '@mui/material';

// _________________________________ styles _______________________________
import { BoxImages, ImgSlider } from '../../pages/DetailPostPage/DetailPostPage.style';

interface CarouselProps {
  images?: File[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let keenSlider: typeof KeenSlider | null = null;

    const initializeSlider = () => {
      if (sliderRef.current && images && images.length > 0 && !keenSlider) {
        keenSlider = new KeenSlider(sliderRef.current, {
          loop: true,
          mode: 'free',
          slides: { origin: 'center', perView: 2.5, spacing: 10 },
          range: {
            min: -5,
            max: 5,
          },
        });
      }
    };

    const destroySlider = () => {
      if (keenSlider) {
        keenSlider = null;
      }
    };

    initializeSlider();
    destroySlider();
    initializeSlider();

    return () => {
      destroySlider();
    };
  }, [images]);

  return (
    <>
      <BoxImages ref={sliderRef} className="keen-slider">
        {images?.map((item: File, index) => (
          <Box className={`keen-slider__slide number-slide${index}`} key={index} sx={{}}>
            <ImgSlider src={getImageSrc(item.name)} alt={item.name} key={index} />
          </Box>
        ))}
      </BoxImages>
    </>
  );
};
