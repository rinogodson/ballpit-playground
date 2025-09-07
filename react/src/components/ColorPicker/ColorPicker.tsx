import { Palette } from "lucide-react";

function ColorPicker({
  label,
  value,
  changeValue,
}: {
  label: string;
  value: string;
  changeValue: any;
}) {
  return (
    <div className="gap-2 bg-[rgba(0,0,0,0.3)] border-1 border-[rgba(255,255,255,0.1)] text-white text-[1.2em] w-full h-30 p-3 flex flex-col justify-end items-center rounded-[33.5px]">
      <div className="flex justify-center items-center gap-2">
        <div id="icon-cont">
          <Palette />
        </div>
        <p className="max-w-[10ch]">{label}</p>
      </div>
      <input
        onChange={changeValue}
        type="color"
        className="w-full h-full rounded-3xl"
        value={value}
      />
    </div>
  );
}

export default ColorPicker;
