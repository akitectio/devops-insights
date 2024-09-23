import { Slider } from "primereact/slider";
import { useState } from "react";

const RangeSlider = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]); // Tuple for range

  return (
    <div style={{ width: "300px" }}>
      <Slider
        value={rangeValue}
        onChange={(e) => setRangeValue(e.value as [number, number])}
        range
      />
      <p>
        Range: {rangeValue[0]} - {rangeValue[1]}
      </p>
    </div>
  );
};

export default RangeSlider;
