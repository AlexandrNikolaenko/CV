"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full">
      <div className="wrapper flex justify-between items-center pt-5">
        <Link href={"/#"} className="text-light-accent">
          Enjoy Frontend
        </Link>
        <nav className="flex px-10 py-[15px] gap-[30px] bg-main/60 border-[1px] border-main rounded-full">
          <Link href={"/#about"} className="text-text">
            Обо мне
          </Link>
          <Link href={"/#skills"}>Навыки</Link>
          <Link href={"/#contact"}>Контакты</Link>
        </nav>
        <div className="flex px-5 py-2.5 max-sm:p-2.5 gap-2.5 items-center bg-main/60 border-[1px] border-main rounded-full cursor-pointer">
          <div className="relative w-[30px] max-sm:w-6 h-[30px] max-sm:h-6">
            <Image src={"/lang.svg"} fill alt="lang" />
          </div>
          <span className="max-sm:hidden">Русский</span>
        </div>
      </div>
    </header>
  );
}
