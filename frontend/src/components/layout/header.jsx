"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isHideMenu, setIsHideMenu] = useState(true);

  function handleHideMenu() {
    if (window.innerWidth < 600) setIsHideMenu(true);
  }

  function handleChangeVisibleMenu() {
    setIsHideMenu(!isHideMenu);
  }

  return (
    <header className="fixed w-full">
      <div className="wrapper flex justify-between items-center pt-5">
        <Link href={"/#"} className="text-light-accent">
          Enjoy Frontend
        </Link>
        <nav
          className={`flex px-10 py-[15px] gap-[30px] bg-main/60 backdrop-blur-sm border-[1px] border-main rounded-full transition-all duration-[1s] right-10 max-[400px]:right-2.5 top-20 ${isHideMenu && "max-sm:translate-x-[200%]"} max-sm:flex-col max-sm:gap-2.5 max-sm:rounded-xl max-sm:absolute`}
        >
          <Link onClick={handleHideMenu} href={"/#about"} className="text-text">
            Обо мне
          </Link>
          <Link onClick={handleHideMenu} href={"/#skills"}>
            Навыки
          </Link>
          <Link onClick={handleHideMenu} href={"/#contact"}>
            Контакты
          </Link>
        </nav>
        <div className="flex gap-5 items-center">
          <button className="flex px-5 py-2.5 max-sm:p-2.5 gap-2.5 items-center bg-main/60 backdrop-blur-sm border-[1px] border-main rounded-full cursor-pointer">
            <div className="relative w-[30px] max-sm:w-6 h-[30px] max-sm:h-6">
              <Image src={"/lang.svg"} fill alt="lang" />
            </div>
            <span className="max-sm:hidden">Русский</span>
          </button>
          <button
            onClick={handleChangeVisibleMenu}
            className="flex p-2.5 items-center sm:hidden bg-main/60 backdrop-blur-sm border-[1px] border-main rounded-full cursor-pointer"
          >
            <div className="relative w-[30px] max-sm:w-6 h-[30px] max-sm:h-6">
              <Image src={"/menu.svg"} fill alt="menu" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
