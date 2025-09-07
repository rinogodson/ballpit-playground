import React from "react";
import Slider from "../Slider/Slider";
import Toggler from "../BallsContainer/Toggler/Toggler";
import { Hash, Lightbulb } from "lucide-react";
import ColorPicker from "../ColorPicker/ColorPicker";

function SettingsPanel() {
  const [sliderValue, setSliderValue] = React.useState(0);

  return (
    <div className="p-2 w-full h-full mb-10 mt-6 bg-[rgba(255,255,255,0.06)] border-1 rounded-[3em] border-[rgba(255,255,255,0.1)]">
      <div className="w-full h-full bg-[rgba(0,0,0,0.3)] rounded-[2.5em] p-2 grid">
        <div className="grid grid-cols-[1fr_8em] gap-2">
          <Slider
            icon={<Hash />}
            minimum={0}
            maximum={100}
            text={"Count"}
            value={sliderValue}
            onChangeFn={(e: any) => {
              setSliderValue(e.target.value);
            }}
            style=""
          />
          <Toggler
            icon={<Lightbulb />}
            value={true}
            label="Toggle Light"
            changeValue={() => {}}
          />
        </div>
        <div className="h-30 flex flex-row gap-2">
          <ColorPicker label="Color 1" value="#00000" changeValue={() => {}} />
          <ColorPicker label="Color 2" value="#000000" changeValue={() => {}} />
          <ColorPicker label="Color 3" value="#ffffff" changeValue={() => {}} />
        </div>
        <div className="grid place-items-center grid-cols-2 grid-rows-[7.5rem_7.5rem] gap-2">
          <Slider
            icon={<div>#</div>}
            minimum={0}
            maximum={100}
            text={"Count"}
            value={sliderValue}
            onChangeFn={(e: any) => {
              setSliderValue(e.target.value);
            }}
            style=""
          />
          <Slider
            icon={<div>#</div>}
            minimum={0}
            maximum={100}
            text={"Count"}
            value={sliderValue}
            onChangeFn={(e: any) => {
              setSliderValue(e.target.value);
            }}
            style=""
          />
          <Slider
            icon={<div>#</div>}
            minimum={0}
            maximum={100}
            text={"Count"}
            value={sliderValue}
            onChangeFn={(e: any) => {
              setSliderValue(e.target.value);
            }}
            style=""
          />
          <Slider
            icon={<div>#</div>}
            minimum={0}
            maximum={100}
            text={"Count"}
            value={sliderValue}
            onChangeFn={(e: any) => {
              setSliderValue(e.target.value);
            }}
            style=""
          />
        </div>
        <div className="h-full place-items-end w-full grid gap-2 grid-rows-1 grid-cols-[8em_1fr]">
          <Toggler
            icon={<Lightbulb />}
            value={true}
            label="Toggle Light"
            changeValue={() => {}}
          />
          <Slider
            icon={<div>#</div>}
            minimum={0}
            maximum={100}
            text={"Count"}
            value={sliderValue}
            onChangeFn={(e: any) => {
              setSliderValue(e.target.value);
            }}
            style=""
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
