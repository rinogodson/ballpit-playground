import React from "react";
import BallsContainer from "./components/BallsContainer/ballsContainer";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import { motion } from "framer-motion";

function App() {
  const [context, setContext] = React.useState({
    count: 150,
    showLight: false,
    colors: ["#D36135", "#D36135", "#7EB06A"],
    minSize: 0.5,
    maxSize: 1.2,
    lightSize: 2,
    lightIntensity: 250,
    gravity: true,
    gravityIntensity: 100,
  });
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="flex ">
      <BallsContainer show={show} context={context} setContext={setContext} />
      <div className="w-[40em] pt-14 flex justify-start items-center flex-col">
        <motion.div
          initial={{ scale: 0, translateY: -100, opacity: 0.5 }}
          animate={{ scale: 1, translateY: 0, opacity: 1 }}
          transition={{ duration: 0.3, type: "spring", damping: 10 }}
        >
          <img src="./logo.svg" alt="logo" width={400} />
        </motion.div>
        <SettingsPanel context={context} setContext={setContext} />
      </div>
    </div>
  );
}

export default App;
