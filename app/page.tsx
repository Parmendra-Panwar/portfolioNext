import Image  from "next/image";
import "./page.css";
import Link from "next/link";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Profile from "@/components/Profile";
import Nav from "@/components/Nav";

export default function Home() {
  // function toggleMenu() {
  //   const menu = document.querySelector(".menu-links");
  //   const icon = document.querySelector(".hamburger-icon");
  //   menu.classList.toggle("open");
  //   icon.classList.toggle("open");
  // }
  return (
    <>
      <Nav />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <GetInTouch />
    </>
  );
}
