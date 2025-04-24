import "./page.css";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Profile from "@/components/Profile";

export default function Home() {
  // function toggleMenu() {
  //   const menu = document.querySelector(".menu-links");
  //   const icon = document.querySelector(".hamburger-icon");
  //   menu.classList.toggle("open");
  //   icon.classList.toggle("open");
  // }
  return (
    <>
      <Profile />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
