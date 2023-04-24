import { ClipLoader } from 'react-spinners';
import { BoxCenter } from '../BoxCenter/BoxCenter.styles';

export const LoaderBox = () => {
  return (
    <BoxCenter width={'100%'} height={'100vh'}>
      <ClipLoader color="primary" size={100} />
    </BoxCenter>
  );
};
