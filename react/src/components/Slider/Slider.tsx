import type { ReactElement } from "react";
import "./Slider.css";

function Slider({
  icon,
  minimum = 0,
  maximum = 100,
  text,
  value,
  onChangeFn,
  style,
}: {
  icon: ReactElement;
  minimum: number;
  maximum: number;
  text: string;
  value: number;
  onChangeFn: any;
  style: any;
}) {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] border-1 border-[rgba(255,255,255,0.1)] text-white text-2xl w-full h-30 p-3 pt-0 flex flex-col justify-end items-center rounded-[33.5px]">
      <div className="flex flex-row h-full w-full justify-between items-center px-2">
        <div className="flex justify-center items-center gap-2">
          {icon}
          <p className="h-full flex justify-center items-center">{text}</p>
        </div>
        <p>{value}</p>
      </div>
      <div className="slider-bg self-end w-full justify-self-end">
        <input
          className="slider"
          type="range"
          min={minimum}
          max={maximum}
          value={value}
          onChange={onChangeFn}
          id="range"
        />
      </div>
    </div>
  );
}

export default Slider;
