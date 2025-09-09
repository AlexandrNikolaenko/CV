import Image from "next/image";

export default function Card({ image, children }) {
  return (
    <div className="w-full flex gap-10 p-5 rounded-[20px] border-dark-accent border-[1px] items-center">
      <div className="relative min-w-[80px] max-sm:min-w-[60px] h-[80px] max-sm:h-[60px]">
        <Image src={image} fill alt={"icon"} />
      </div>
      <p className="text-xl max-sm:text-base">{children}</p>
    </div>
  );
}
