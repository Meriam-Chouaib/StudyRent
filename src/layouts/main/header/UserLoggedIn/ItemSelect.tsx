/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Typography } from '@mui/material';

import { BoxSpaceBetween } from '../../../../components';

export const ItemSelect = ({ onClick, txt, icon }: ItemSelectProps) => {
  return (
    <>
      <Button fullWidth onClick={onClick}>
        <BoxSpaceBetween width={'100% !important'}>
          <Typography variant={'h6'}>{txt}</Typography>
          {icon}
        </BoxSpaceBetween>
      </Button>
    </>
  );
};
interface ItemSelectProps {
  onClick: () => void;
  txt: string;
  icon: any;
}
