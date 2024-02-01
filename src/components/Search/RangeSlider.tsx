import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { UseRangeProps, useRange } from 'react-instantsearch-core';

const styles = {
  sliderValues: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
};

interface Props extends UseRangeProps {
  renderValue?: (arg: number) => string
}

interface Range {
  min: number,
  max: number
}

const getRange = (range: { min: number | undefined, max: number | undefined }) => {
  return {
    min: range.min || 0,
    max: range.max || 100
  }
}

const CustomRangeSlider = (props: Props) => {
  const {
    start,
    range,
    refine
  } = useRange(props);

  const [value, setValue] = useState<Range>(getRange(range));
  const [valueDisplay, setValueDisplay] = useState({
    min: range.min,
    max: range.max
  });

  useEffect(() => {
    if (value) {
      refine([value.min, value.max]);
    }
  }, [value, refine]);

  useEffect(() => {
    if (
      start[0] !== valueDisplay.min ||
      start[1] !== valueDisplay.max
    ) {
      const newRange = getRange({ min: start[0], max: start[1] })
      setValueDisplay({ ...newRange });
      setValue({ ...newRange })
    }
  }, [range, start]);

  const renderValue = (value: number | undefined, type: string) => {
    let display;

    if (value === Infinity || value === -Infinity) {
      display = type === 'min' ? range.min : range.max;
    } else {
      display = value;
    }

    if (props.renderValue && display) {
      display = props.renderValue(display)
    }

    return display;
  }

  return (
    <>
      <div style={styles.sliderValues}>
        <span>{renderValue(valueDisplay.min, 'min')}</span>
        <span>{renderValue(valueDisplay.max, 'max')}</span>
      </div>
      <Slider
        range
        defaultValue={[range.min || 0, range.max || 100]}
        onChange={v => setValueDisplay({ min: (v as number[])[0], max: (v as number[])[1] })}
        onAfterChange={v => setValue({ min: (v as number[])[0], max: (v as number[])[1] })}
        min={range.min}
        max={range.max}
        value={[valueDisplay.min || range.min || 0, valueDisplay.max || range.max || 100]}
      />
    </>
  );
};

export default CustomRangeSlider;
