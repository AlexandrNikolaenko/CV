import Image from "next/image";

export default function Card({ image, children }) {
  return (
    <div className="w-full flex gap-10 p-5 rounded-[20px] border-dark-accent border-[1px] items-center">
      <div className="relative min-w-[80px] h-[80px]">
        <Image src={image} fill alt={"icon"} />
      </div>
      <p className="text-[20px]">{children}</p>
    </div>
  );
}
