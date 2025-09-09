"use client";

import { BorderButton, FillButton } from "@/components/ui/buttons";
import Card from "@/components/ui/card";
import FilterButton, { SkillLabel } from "@/components/ui/filter";
import Image from "next/image";
import { useId, useState } from "react";
import { skillCategories, skillsList } from "@/components/data/data";
import Input from "@/components/ui/input";
import Link from "next/link";
import sendMail from "@/api/send-contact-info";
import { TriangleLight } from "@/components/core/light";

// const sections = [
//   {
//     id: 0,
//     name: ''
//   },
//   {
//     id: 1,
//     name: 'about'
//   },
//   {
//     id: 2,
//     name: 'skills'
//   },
//   {
//     id: 3,
//     name: 'contacts'
//   },
// ]

export default function Home() {
  const [activeSkills, setActiveSkills] = useState(
    skillCategories.map((skill) => skill.name),
  );
  const formId = useId();
  const pdfLinkId = useId();
  // const [activeSection, setActiveSection] = useState(0);

  // function handleScrollSection(e) {
  //   const currentSection = document.getElementById(sections.find(section => section.id == activeSection).name)
  //   const timeout = setTimeout(() => {
  //     let nextSection;
  //     if (activeSection == sections[sections.length - 1].id) nextSection = 0;
  //     else nextSection = activeSection + 1;
  //     const section = document.getElementById(sections.find(section => section.id == nextSection).name);
  //     section.scrollIntoView({behavior: 'smooth', block: 'start'});
  //   }, 1000)
  // }

  function handleChangeActiveSkills(skill) {
    if (skill == "all")
      setActiveSkills(skillCategories.map((skill) => skill.name));
    else {
      if (activeSkills.includes(skill))
        setActiveSkills(activeSkills.filter((elem) => elem != skill));
      else setActiveSkills(activeSkills.concat(skill));
    }
  }

  function handleDownloadPDF() {
    document.getElementById(pdfLinkId).click();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(document.getElementById(formId)),
    );

    function onSuccess() {
      console.log("success");
    }

    function onError() {
      console.log("error");
    }

    sendMail({ body: formData, onSuccess, onError });
  }

  return (
    <>
      <section id="" className="w-full">
        <div className="absolute w-full h-full top-[-50%]">
          <div className="relative h-full w-full">
            {/* <div className={`light absolute h-[819px] w-[616px] rotate-[-21.41deg] top-[25%] left-[-10%]`}>
              <div className={`relative w-full h-full`}>
                <Image alt="light" src='/light.png' fill />
              </div>
            </div> */}
            <TriangleLight rotation={-21.41} position={{ top: 0, left: -15 }} />
            <TriangleLight
              rotation={-4.43}
              position={{ top: -20, left: 15 }}
              alter
            />
            <TriangleLight rotation={6.51} position={{ top: -20, left: 45 }} />
            <TriangleLight
              rotation={20.05}
              position={{ top: 0, left: 75 }}
              alter
            />
            {/* <TriangleLight rotation={-4.43} position={{top: 0, left: 24.22}} alter/>
            <TriangleLight rotation={-6.51} position={{top: 0, left: 42.55}} />
            <TriangleLight rotation={-20.05} position={{top: 7.24, left: 60.09}} alter/> */}
          </div>
        </div>
        <div className="wrapper h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-[30px] max-w-[545px]">
            <h1 className="text-center text-light-accent text-[120px] max-sm:min-[300px]:text-[64px] max-[300px]:text-[48px] leading-[80%] tracking-[.05rem]">
              Frontend
              <br />
              Developer
            </h1>
            <p className="text-center leading-[150%] tracking-[.05rem] text-lg max-sm:text-base">
              Меня зовут Александр, я занимаюсь frontend-разработкой более 2
              лет. Ищу классную команду для работы над интересными проектами
            </p>
            <div className="flex max-sm:flex-col gap-10 max-sm:gap-5 items-center">
              <BorderButton action={handleDownloadPDF}>
                <Link
                  id={pdfLinkId}
                  href={"/CV_Николаенко_А.И._Фронтенд.pdf"}
                  download={true}
                  className="hidden"
                />
                Donwload CV
                <Image
                  src={"/download.svg"}
                  width={24}
                  height={24}
                  alt="download"
                />
              </BorderButton>
              <FillButton>Contact me</FillButton>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="wrapper flex max-md:flex-col-reverse h-screen items-center">
          <div className="flex flex-col gap-10 w-full">
            <h2 className="text-center text-[64px] max-sm:min-[300px]:text-[64px] max-[300px]:text-[48px]">
              Обо мне
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Enim aliquam sit pulvinar
              porttitor. Massa duis eu turpis sodales phasellus. Nulla fermentum
              sed aliquet malesuada dignissim. Porttitor eget leo interdum
              pretium eget aliquam mi. Vestibulum tellus scelerisque dictum
              ipsum.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Enim aliquam sit pulvinar
              porttitor. Massa duis eu turpis sodales phasellus. Nulla fermentum
              sed aliquet malesuada dignissim. Porttitor eget leo interdum
              pretium eget aliquam mi. Vestibulum tellus scelerisque dictum
              ipsum.
            </p>
          </div>
          <div className="w-full"></div>
        </div>
      </section>
      <section id="skills">
        <div className="wrapper min-h-screen pb-[150px] max-md:pb-10 pt-0 max-md:pt-10 flex flex-col items-center gap-10">
          <h2 className="text-center text-[64px] max-sm:min-[300px]:text-[64px] max-[300px]:text-[48px]">
            Мои навыки
          </h2>
          <div className="w-full flex flex-col gap-10">
            <h3 className="text-[40px] text-center">Hard skills</h3>
            <div className="flex justify-center items-center flex-wrap gap-x-[30px] gap-y-[15px] max-sm:gap-2.5">
              <FilterButton
                action={() => handleChangeActiveSkills("all")}
                isActive={activeSkills.length == skillCategories.length}
              >
                Все
              </FilterButton>
              {skillCategories.map((skill) => (
                <FilterButton
                  action={() => handleChangeActiveSkills(skill.name)}
                  key={skill.id}
                  isActive={activeSkills.includes(skill.name)}
                >
                  {skill.name}
                </FilterButton>
              ))}
            </div>
            <div className="flex justify-center items-center flex-wrap gap-[20px]">
              {skillsList.map((skill) => {
                if (activeSkills.includes(skill.category)) {
                  return (
                    <SkillLabel image={skill.image} key={skill.id}>
                      {skill.name}
                    </SkillLabel>
                  );
                }
              })}
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <h3 className="text-[40px] text-center">Soft skills</h3>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 max-md:gap-5">
              <Card image={"/shake-hands.svg"}>
                Умение договариваться с людьми и разрешать конфликтные ситуации
              </Card>
              <Card image={"/team.svg"}>Умение работать в команде</Card>
              <Card image={"/education.svg"}>
                Умение и желание учиться и развиваться
              </Card>
              <Card image={"/done.svg"}>
                Ответственное отношение к поставленным задачам
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="wrapper flex max-md:flex-col gap-2 pb-10 items-center">
          <div className="w-full aspect-square relative">
            <Image src={"/FormImage.svg"} alt="get in touch" fill />
          </div>
          <div className="w-full flex flex-col items-center gap-[30px]">
            <form
              id={formId}
              onSubmit={handleSubmit}
              className="flex flex-col w-full gap-[30px] items-center"
            >
              <Input placeholder={"Ваше имя"} name={"name"} />
              <Input placeholder={"Номер телефона"} name={"phone"} />
              <FillButton action={() => {}}>Send</FillButton>
            </form>
            <div className="flex w-full gap-5 items-center text-dark-accent">
              <div className="w-full h-[1px] bg-dark-accent rounded-full"></div>
              или
              <div className="w-full h-[1px] bg-dark-accent rounded-full"></div>
            </div>
            <div className="flex items-center gap-5">
              Contact me by:
              <Link href={"/#"}>
                <Image
                  width={40}
                  height={40}
                  src={"/linkedin.svg"}
                  alt="linkedin"
                />
              </Link>
              <Link
                href={
                  "https://spb.hh.ru/resume/120d7bfbff0dc9442f0039ed1f346d3466766f"
                }
              >
                <Image width={40} height={40} src={"/hh.svg"} alt="hh" />
              </Link>
              <Link href={"https://t.me/AliBabagg"}>
                <Image
                  width={40}
                  height={40}
                  src={"/telegram.svg"}
                  alt="telegram"
                />
              </Link>
              <Link href={"mailto:nikol.alex06@mail.ru"}>
                <Image width={40} height={40} src={"/gmail.svg"} alt="gmail" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
