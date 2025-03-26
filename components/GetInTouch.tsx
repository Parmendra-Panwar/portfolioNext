import Image from "next/image";
import "../app/page.css";
import Link from "next/link";

export default function GetInTouch() {
    return (
        <>
            <section id="contact" className="section">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <Image width={300} height={350} src="/assets/email.png" alt="Email icon" className="icon contact-icon email-icon" />
                        <p className="makeMeSecondDark"><a href="mailto:panwparmendra7@gmail.com">panwparmendra7@gmail.com</a></p>
                    </div>
                    <div className="contact-info-container">
                        <Image width={300} height={350} src="/assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
                        <p className="makeMeSecondDark"><a href="https://www.linkedin.com/in/parmendra-panwar" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <nav>
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#experience">Experience</Link></li>
                            <li><Link href="#projects">Projects</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <p className="makeMeSecondDark"> 2025 Parmendra Panwar. All Rights Reserved.</p>
            </footer>
        </>
    );
}