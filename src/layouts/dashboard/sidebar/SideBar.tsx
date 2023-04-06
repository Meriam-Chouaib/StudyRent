import { Box } from '@mui/material';
import { ItemSideBar } from '../../../components/ItemSideBar/ItemSideBar';
import theme from '../../../theme';
import { BoxItemsSidebar, BoxSidebar } from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import logoDark from '../../../assets/images/logo-bleu-roi.svg';
import { LogoHeader } from '../../../components';
import { ImageSideBack } from '../../../components/image/ImageSideBack.styles';
import ImgBack from '../../../assets/images/ImgBackSideBar.svg';
import { useState } from 'react';
export default function SideBar({ items }: SideBarProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    console.log('The link was clicked.');
    setIsActive(true);
    console.log(isActive);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index: number) => {
    console.log(index);
    setActiveIndex(index);
  };
  return (
    <BoxSidebar>
      <BoxItemsSidebar>
        <>
          <LogoHeader sx={{ height: '50px' }} src={logoDark} alt={'logo'} />
          <Box sx={{ marginTop: '5rem' }}>
            {items.map((item, index) => (
              <ItemSideBar
                icon={item.icon}
                txt={item.txt}
                key={item.txt}
                path={item.path}
                isActive={index === activeIndex}
                bgColor={`${theme.palette.warning.main}`}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </Box>
          <ImageSideBack src={ImgBack} />
        </>
      </BoxItemsSidebar>
    </BoxSidebar>
  );
}
