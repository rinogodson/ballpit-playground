function BallsContainer() {
  return (
    <div className="w-[60vw] h-screen p-10">
      <div className="border-1 border-t-[1.5px] border-[rgba(255,255,255,0.24)] h-full w-full rounded-2xl overflow-hidden flex flex-col justify-between">
        <div className="h-[1.5em] w-full bg-linear-to-b to-[rgba(255,255,255,0.1)] from-[rgba(255,255,255,0.06)]" />
        <div className="bg-[rgba(255,255,255,0.1)] h-full">
          <div className="bg-black h-full rounded-2xl mx-1" />
        </div>
        <div className="h-[1.5em] w-full bg-linear-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)]" />
      </div>
    </div>
  );
}

export default BallsContainer;
