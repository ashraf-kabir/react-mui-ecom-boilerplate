import React from 'react';
import { Box, Slider, Input } from '@mui/material';

function valuetext(value) {
  return `${value}`;
}

const PriceRangeSlider = ({
  minDistance,
  minVal,
  maxVal,
  startVal,
  endVal,
}) => {
  const [value, setValue] = React.useState([startVal, endVal]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        min={minVal}
        max={maxVal}
        color='secondary'
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        disableSwap
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Input
          value={value[0]}
          margin='dense'
          onChange={(event) => {
            setValue([
              Math.min(Number(event.target.value), value[1] - minDistance),
              value[1],
            ]);
          }}
          onBlur={() => {
            if (value[0] < minVal) {
              setValue([minVal, value[1]]);
            }
          }}
          inputProps={{
            step: minDistance,
            min: minVal,
            max: maxVal,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
        <Input
          value={value[1]}
          margin='dense'
          onChange={(event) => {
            setValue([
              value[0],
              Math.max(Number(event.target.value), value[0] + minDistance),
            ]);
          }}
          onBlur={() => {
            if (value[1] > maxVal) {
              setValue([value[0], maxVal]);
            }
          }}
          inputProps={{
            step: minDistance,
            min: minVal,
            max: maxVal,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Box>
    </Box>
  );
};

export default PriceRangeSlider;
