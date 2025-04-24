"use client"
import Image from "next/image";
import "../app/page.css";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">
          <Image width={300} height={350} src="/assets/icon.png" alt="" style={{ height: "55px", width: "auto" }} />
          Parmendra Panwar
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link href="./#about">About</Link>
            </li>
            <li>
              <Link href="./#experience">Experience</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Parmendra Panwar</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isOpen ? "open" : ""}`}>
            <li>
              <Link href="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/project" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}