import React from "react";
import Slider from "../Slider/Slider";

function SettingsPanel() {
  const [sliderValue, setSliderValue] = React.useState(7);

  return (
    <div className="p-2 w-full h-full mb-10 mt-6 bg-[rgba(255,255,255,0.06)] border-1 rounded-[3em] border-[rgba(255,255,255,0.1)]">
      <div className="w-full h-full bg-[rgba(0,0,0,0.3)] rounded-[2.5em] p-2 grid">
        <Slider
          icon={<div>#</div>}
          minimum={0}
          maximum={100}
          text={"Count"}
          value={sliderValue}
          onChangeFn={(e: any) => {
            setSliderValue(e.target.value);
          }}
          style="die"
        />
      </div>
    </div>
  );
}

export default SettingsPanel;
