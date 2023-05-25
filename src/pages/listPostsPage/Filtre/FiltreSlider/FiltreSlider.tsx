import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { BoxSpaceBetweenCenter } from '../../../../components';
import { useEffect, useState } from 'react';

interface FilterSliderProps {
  label: string;
  interval: number[];
  onChange: (interval: number[], value?: number | number[], activeThumb?: number) => void;
  step?: number;
}

export default function FilterSlider({ label, interval, onChange }: FilterSliderProps) {
  const [value1, setValue1] = React.useState<number[]>(interval);
  const minDistance = 10;

  const [value, setValue] = useState<number[]>([0, 0]);

  useEffect(() => {
    setValue1(interval);
  }, [interval]);
  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([newValue[0], value[1]]);
    } else {
      setValue([value[0], newValue[1]]);
    }

    onChange(value, newValue, activeThumb);
  };
  const valueLabelFormat = (value: number) => {
    return `${value * 10}`;
  };
  return (
    <BoxSpaceBetweenCenter width={'100%'}>
      <Typography variant="h5">{label}</Typography>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        disableSwap
      />
    </BoxSpaceBetweenCenter>
  );
}
