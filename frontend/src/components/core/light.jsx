"use client";

import Image from "next/image";

export function TriangleLight({ rotation, position, alter = false }) {
  return (
    <div
      style={{
        rotate: `${rotation}deg`,
        top: `${position.top}%`,
        left: `${position.left}%`,
      }}
      className={`light absolute h-[819px] w-[616px]`}
    >
      <div className={`${alter ? "alter" : ""} relative w-full h-full`}>
        <Image alt="light" src="/light.png" fill />
      </div>
    </div>
  );
}

export function EllipsLight({ position }) {
  return <></>;
}
