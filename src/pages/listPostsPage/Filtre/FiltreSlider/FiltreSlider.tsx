import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { BoxSpaceBetweenCenter } from '../../../../components';

interface FilterSliderProps {
  label: string;
  interval: number[];
  onChange: (interval: number[], value: number | number[], activeThumb: number) => void;
  step?: number;
}

export default function FilterSlider({ label, interval, onChange }: FilterSliderProps) {
  const [value1, setValue1] = React.useState<number[]>(interval);
  const minDistance = interval && interval[0] ? interval[0] : 50;
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }

    onChange(value1, newValue, activeThumb);
  };

  return (
    <BoxSpaceBetweenCenter width={'100%'}>
      <Typography variant="h5">{label}</Typography>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </BoxSpaceBetweenCenter>
  );
}
