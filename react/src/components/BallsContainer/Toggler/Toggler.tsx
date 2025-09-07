function Toggler({
  icon,
  label,
  value,
  changeValue,
}: {
  icon: any;
  label: string;
  value: boolean;
  changeValue: Function;
}) {
  return (
    <button className="bg-[rgba(0,0,0,0.3)] border-1 border-[rgba(255,255,255,0.1)] text-white text-[1.2em] w-full h-30 p-3 pt-0 flex flex-col justify-end items-center rounded-[33.5px]">
      <div id="icon-cont">{icon}</div>
      <p className="max-w-[5ch]">{label}</p>
    </button>
  );
}

export default Toggler;
