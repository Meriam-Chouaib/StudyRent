/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SvgIcon from '@mui/material/SvgIcon';
import { Typography } from '@mui/material';
import { BoxSpaceBetweenCenter } from '../BoxCenter/BoxCenterSpaceBetween.styles';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

interface SelectTextFieldsProps {
  data: any;
  txt?: string;
  label?: string;
  icon?: any;
  onChange?: (value: any) => void;
}
export default function SelectTextFields({
  data,
  label,
  txt,
  icon,
  onChange,
}: SelectTextFieldsProps) {
  const [value, setValue] = useState('');

  return (
    <BoxSpaceBetweenCenter width={label ? 'auto' : 'max-content'}>
      <FormControl variant="standard">
        <Typography variant="h5">{label}</Typography>
        <Select
          sx={{ width: 'auto' }}
          defaultValue=""
          disableUnderline={true} // Add this prop
          displayEmpty={true}
          onChange={onChange}
          renderValue={(value) => {
            console.log(value);

            return (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <SvgIcon color="primary">{icon}</SvgIcon>
                {value || txt}
              </Box>
            );
          }}
        >
          {data.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </BoxSpaceBetweenCenter>
  );
}
