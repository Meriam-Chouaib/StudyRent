import { SvgIconProps } from '@material-ui/core/SvgIcon';

export interface ItemSideBarProps {
  icon?: React.ReactElement<SvgIconProps>;
  txt: string;
  bgColor?: string;
  isActive?: boolean;
  path: string;
}
