import { Link } from 'react-router-dom';
import Flesh from '../../assets/images/felsh_list_posts.svg';
import MapImage from '../../assets/images/GoTomap.svg';
import { BoxCenter } from '../../components';
import { CustumImage, BoxFlesh } from './GoToMap.style';
import { Box } from '@mui/material';
import { PATHS } from '../../config/paths';
export const GoToMap = () => {
  return (
    <BoxCenter paddingY={'1rem'} position={'relative'}>
      <Box>
        <Link to={`${PATHS.MAIN.MAP}`}>
          <CustumImage src={MapImage} />
        </Link>
      </Box>
      <BoxFlesh>
        <CustumImage src={Flesh} />
      </BoxFlesh>
    </BoxCenter>
  );
};
