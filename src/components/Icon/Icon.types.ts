import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IconStyledProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error' | undefined;
  isActive?: boolean;
}
