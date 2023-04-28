import Flesh from '../../assets/images/felsh_list_posts.svg';
import MapImage from '../../assets/images/GoTomap.svg';
import { BoxCenter } from '../../components';
import { CustumImage, BoxFlesh } from './GoToMap.style';
import { Box } from '@mui/material';
export const GoToMap = () => {
  return (
    <BoxCenter paddingY={'1rem'} position={'relative'}>
      <Box>
        <CustumImage src={MapImage} />
      </Box>
      <BoxFlesh>
        <CustumImage src={Flesh} />
      </BoxFlesh>
    </BoxCenter>
  );
};
