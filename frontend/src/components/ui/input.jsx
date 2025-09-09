export default function Input({ name, placeholder }) {
  return (
    <input
      id={name}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      className="bg-transparent w-full border-b-[1px] border-dark-accent px-[30px] py-[15px] focus:border-light-accent placeholder:text-[20px] placeholder:text-text/60"
    />
  );
}
