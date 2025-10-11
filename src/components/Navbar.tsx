import {
  IconBrain,
  IconBriefcase,
  IconCode,
  IconHome,
  IconPhone,
  IconTrophy,
  IconUser,
} from "@tabler/icons-react";
import { FloatingDock } from "./floating-dock";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#",
    },

    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#about",
    },

    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#timeline",
    },

    {
      title: "Skills",
      icon: (
        <IconBrain className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },

    {
      title: "Achievements",
      icon: (
        <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#certificates",
    },

    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },

    {
      title: "Contact",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#call",
    },
  ];
  return (
    <>
      <div className="fixed left-0 z-10 right-0 h-fit pt-5 px-5 flex justify-end items-end md:justify-center md:items-center">
        <FloatingDock items={links} />
      </div>
    </>
  );
}
