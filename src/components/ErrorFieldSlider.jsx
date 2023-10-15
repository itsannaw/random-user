import { Slider, TextField } from "@mui/material";
import { useState } from "react";

const ErrorFieldSlider = () => {
  const min = 0;
  const max = 1000;
  const sliderMaxValue = 10;

  const [value, setValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue); // Обновляем значение в поле ввода
  };

  const handleInputChange = (event) => {
    let newValue = event.target.value;
    if (newValue > max) newValue = max;
    if (newValue < min) newValue = min;

    setValue(newValue); // Обновляем значение в слайдере
  };

  return (
    <div className="border rounded-md max-w-[1000px] mx-auto pb-[25px] mt-[5px]">
      <div className="flex mt-[20px] justify-center gap-[40px] items-center mx-auto max-w-[800px]">
        <span className="flex text-[16px] text-center font-semibold tracking-wide">
          Emulation of data <br /> entry errors
        </span>
        <div className="flex max-w-[200px]">
          <TextField
            type="number"
            size="small"
            color="success"
            value={value}
            onChange={handleInputChange}
            min={min}
            max={max}
          />
        </div>
        <Slider
          className="flex max-w-[180px] justify-center"
          color="success"
          defaultValue={0}
          value={value}
          onChange={handleSliderChange}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={0}
          max={sliderMaxValue}
          step={0.25}
          size="small"
        />
      </div>
    </div>
  );
};

export default ErrorFieldSlider;
