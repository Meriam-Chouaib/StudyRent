import { Box } from '@mui/material';
import { ItemSideBar } from '../../../components/ItemSideBar/ItemSideBar';
import theme from '../../../theme';
import { BoxItemsSidebar, BoxSidebar } from './SideBar.styles';
import { SideBarProps } from './SideBar.types';
import logoDark from '../../../assets/images/logo-bleu-roi.svg';
import { LogoHeader } from '../../../components';
import { ImageSideBack } from '../../../components/image/ImageSideBack.styles';
import ImgBack from '../../../assets/images/ImgBackSideBar.svg';
export default function SideBar({ items }: SideBarProps) {
  return (
    <BoxSidebar>
      <BoxItemsSidebar>
        <>
          <LogoHeader sx={{ height: '50px' }} src={logoDark} alt={'logo'} />
          <Box sx={{ marginTop: '5rem' }}>
            {items.map((item) => (
              <ItemSideBar
                icon={item.icon}
                txt={item.txt}
                key={item.txt}
                path={item.path}
                isActive={item.isActive}
                bgColor={`${theme.palette.warning.main}`}
              />
            ))}
          </Box>
          <ImageSideBack src={ImgBack} />
        </>
      </BoxItemsSidebar>
    </BoxSidebar>
  );
}
