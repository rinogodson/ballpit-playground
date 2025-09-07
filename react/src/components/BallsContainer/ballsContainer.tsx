import { motion } from "framer-motion";
import Ballpit from "../Ballpit";

function BallsContainer({
  show,
  context,
  setContext,
}: {
  show: boolean;
  context: any;
  setContext: any;
}) {
  return (
    <motion.div
      initial={{ scale: 0, translateY: -100, opacity: 0 }}
      animate={{ scale: 1, translateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, type: "spring", damping: 15 }}
      className="w-[60vw] h-screen p-10"
    >
      <div className="border-1 border-t-[1.5px] border-[rgba(255,255,255,0.24)] h-full w-full rounded-2xl overflow-hidden flex flex-col justify-between">
        <div className="h-[1.5em] w-full bg-linear-to-b to-[rgba(255,255,255,0.1)] from-[rgba(255,255,255,0.06)]" />
        <div className="bg-[rgba(255,255,255,0.1)] h-full">
          <div className="bg-black h-full rounded-2xl mx-1 overflow-hidden">
            {show && (
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "500px",
                  maxHeight: "10000px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Ballpit
                  key={
                    context.count +
                    context.gravity +
                    context.gravityIntensity +
                    context.lightIntensity +
                    context.maxSize +
                    context.minSize +
                    context.colors[0] +
                    context.colors[1] +
                    context.colors[2] +
                    context.lightSize +
                    context.showLight
                  }
                  count={context.count}
                  friction={0.85}
                  gravity={context.gravity ? context.gravityIntensity : 0}
                  wallBounce={0.95}
                  lightIntensity={context.lightIntensity}
                  maxSize={context.maxSize}
                  minSize={context.minSize}
                  colors={context.colors}
                  size0={context.lightSize}
                  followCursor={context.showLight}
                />
              </div>
            )}
          </div>
        </div>
        <div className="h-[1.5em] w-full bg-linear-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)]" />
      </div>
    </motion.div>
  );
}

export default BallsContainer;
