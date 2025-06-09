import Image from "next/image";

export default function FilterButton({ action, children, isActive }) {
  return (
    <button
      onClick={action}
      className={`rounded-full ${isActive ? "bg-dark-accent text-primary" : "bg-main/60 border-1 border-main text-text"} px-[15px] py-[6px] transition-all`}
    >
      {children}
    </button>
  );
}

export function SkillLabel({children, image}) {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <Image width={40} height={40} src={'/' + image} alt="image"/>
      <span className="text-lg text-text">{children}</span>
    </div>
  )
}