import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-main/30">
      <div className="wrapper flex max-lg:grid grid-cols-2 max-sm:grid-cols-1 justify-between gap-[50px] py-10">
        <Link href={"/#"} className="text-light-accent text-xl text-nowrap w-fit">
          Enjoy Frontend
        </Link>
        <div className="w-fit flex flex-col gap-5">
          <p className="text-light-accent text-xl">Навигация</p>
          <Link href={"/#about"} className="text-text text-xl w-fit">
            Обо мне
          </Link>
          <Link href={"/#skills"} className="text-text text-xl w-fit">
            Навыки
          </Link>
          <Link href={"/#contact"} className="text-text text-xl w-fit">
            Контакты
          </Link>
        </div>
        <div className="w-fit flex flex-col gap-5">
          <p className="text-light-accent text-xl">Контактные данные</p>
          <p className="text-text text-xl">
            Почта: 
            <Link href={"mailto:nikol.alex06@mail.ru"} className="text-dark-accent pl-1 text-xl w-fit">
              nikol.alex06@mail.ru
            </Link>
          </p>
          <p className="text-text text-xl">
            Телефон: 
            <Link href={"tel:89218121099"} className="text-dark-accent pl-1 text-xl w-fit">
              +7 (921) 812 10 99
            </Link>
          </p>
          <p className="text-text text-xl">
            Телеграм: 
            <Link href={"https://t.me/AliBabagg"} className="text-dark-accent pl-1 text-xl w-fit">
              @AliBabagg
            </Link>
          </p>
        </div>
        <div className="w-fit flex flex-col gap-5">
          <p className="text-light-accent text-xl">Ресурсы</p>
          <p className="text-text text-xl">
            GitHub: 
            <Link href={"https://github.com/AlexandrNikolaenko"} className="text-dark-accent pl-1 text-xl w-fit">
              мой github
            </Link>
          </p>
          <p className="text-text text-xl">
            Head Hunter: 
            <Link href={"https://spb.hh.ru/resume/120d7bfbff0dc9442f0039ed1f346d3466766f"} className="text-dark-accent pl-1 text-xl w-fit">
              мой профиль на hh.ru
            </Link>
          </p>
          <p className="text-text text-xl">
            LinkedIn: 
            <Link href={"https://spb.hh.ru/resume/120d7bfbff0dc9442f0039ed1f346d3466766f"} className="text-dark-accent pl-1 text-xl w-fit">
              мой профиль на LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
