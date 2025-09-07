import BallsContainer from "./components/BallsContainer/ballsContainer";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";

function App() {
  return (
    <div className="flex ">
      <BallsContainer />
      <div className="w-[40em] pt-14 flex justify-start items-center flex-col">
        <img src="./logo.svg" alt="logo" width={400} />
        <SettingsPanel />
      </div>
    </div>
  );
}

export default App;
