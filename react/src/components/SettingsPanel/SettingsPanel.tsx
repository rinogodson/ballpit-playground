import React from "react";
import { motion } from "framer-motion";
import Slider from "../Slider/Slider";
import Toggler from "../BallsContainer/Toggler/Toggler";
import {
  Earth,
  Hash,
  Lightbulb,
  MinimizeIcon,
  Scan,
  Sparkle,
  Sun,
} from "lucide-react";
import ColorPicker from "../ColorPicker/ColorPicker";

function SettingsPanel({
  context,
  setContext,
}: {
  context: any;
  setContext: any;
}) {
  const [sliderValue, setSliderValue] = React.useState(0);

  return (
    <motion.div
      initial={{ scale: 0, translateY: 200, opacity: 0 }}
      animate={{ scale: 1, translateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, type: "spring", damping: 14 }}
      className="p-2 w-full h-full mb-10 mt-6 bg-[rgba(255,255,255,0.06)] border-1 rounded-[3em] border-[rgba(255,255,255,0.1)]"
    >
      <div className="w-full h-full bg-[rgba(0,0,0,0.3)] rounded-[2.5em] p-2 grid">
        <div className="grid grid-cols-[1fr_8em] gap-2">
          <Slider
            icon={<Hash />}
            minimum={0}
            maximum={200}
            text={"Count"}
            value={context.count}
            onChangeFn={(e: any) => {
              setContext((prev: any) => ({
                ...prev,
                count: Number(e.target.value),
              }));
            }}
            style=""
          />
          <Toggler
            icon={<Lightbulb />}
            value={context.showLight}
            label="Toggle Light"
            changeValue={() => {
              setContext((prev: any) => ({
                ...prev,
                showLight: !context.showLight,
              }));
            }}
          />
        </div>
        <div className="h-30 flex flex-row gap-2">
          <ColorPicker
            label="Color 1"
            value={context.colors[0]}
            changeValue={(e: any) => {
              const newColors = context.colors;
              newColors[0] = e.target.value;
              setContext((prev: any) => ({
                ...prev,
                colors: newColors,
              }));
            }}
          />
          <ColorPicker
            label="Color 2"
            value={context.colors[1]}
            changeValue={(e: any) => {
              const newColors = context.colors;
              newColors[1] = e.target.value;
              setContext((prev: any) => ({
                ...prev,
                colors: newColors,
              }));
            }}
          />
          <ColorPicker
            label="Color 3"
            value={context.colors[2]}
            changeValue={(e: any) => {
              const newColors = context.colors;
              newColors[2] = e.target.value;
              setContext((prev: any) => ({
                ...prev,
                colors: newColors,
              }));
            }}
          />
        </div>
        <div className="grid place-items-center grid-cols-2 grid-rows-[7.5rem_7.5rem] gap-2">
          <Slider
            icon={<Scan />}
            minimum={0}
            maximum={120}
            text={"Max. Size"}
            value={context.maxSize * 100}
            onChangeFn={(e: any) => {
              setContext((prev: any) => ({
                ...prev,
                maxSize: Number(e.target.value) / 100,
              }));
            }}
            style=""
          />
          <Slider
            icon={<MinimizeIcon />}
            minimum={0}
            maximum={120}
            text={"Max. Size"}
            value={context.minSize * 100}
            onChangeFn={(e: any) => {
              setContext((prev: any) => ({
                ...prev,
                minSize: Number(e.target.value) / 100,
              }));
            }}
            style=""
          />
          <Slider
            icon={<Sparkle />}
            minimum={0}
            maximum={20}
            text={"Light Size"}
            value={context.lightSize * 10}
            onChangeFn={(e: any) => {
              setContext((prev: any) => ({
                ...prev,
                lightSize: Number(e.target.value) / 10,
              }));
            }}
            style=""
          />
          <Slider
            icon={<Sun />}
            minimum={0}
            maximum={250}
            text={"Light Intensity"}
            value={context.lightIntensity}
            onChangeFn={(e: any) => {
              setContext((prev: any) => ({
                ...prev,
                lightIntensity: Number(e.target.value),
              }));
            }}
            style=""
          />
        </div>
        <div className="h-full place-items-end w-full grid gap-2 grid-rows-1 grid-cols-[8em_1fr]">
          <Toggler
            icon={<Earth />}
            value={context.gravity}
            label="Toggle Gravity"
            changeValue={() => {
              setContext((prev: any) => ({
                ...prev,
                gravity: !context.gravity,
              }));
            }}
          />
          <Slider
            icon={<Earth />}
            minimum={0}
            maximum={100}
            text={"Gravity"}
            value={context.gravityIntensity}
            onChangeFn={(e: any) => {
              setContext((prev: any) => ({
                ...prev,
                gravityIntensity: Number(e.target.value),
              }));
            }}
            style=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SettingsPanel;
