export function BorderButton({ children, action }) {
  return (
    <button onClick={action} className="flex gap-2.5 rounded-full bg-transparent border-[1px] border-dark-accent text-text px-[30px] py-[15px]">
      {children}
    </button>
  );
}

export function FillButton({ children, action }) {
  return (
    <button onClick={action} className="rounded-full bg-dark-accent text-primary px-[30px] py-[15px]">
      {children}
    </button>
  );
}
