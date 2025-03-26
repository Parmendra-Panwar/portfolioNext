import Image from "next/image";
import "../app/page.css";
import Link from "next/link";

export default function Profile() {
    return (
        <>
            <section id="profile" className="profile-section">
                <div className="section__text">
                    <p className="section__text__p1">Hello, I am</p>
                    <h1 className="title">Parmendra (paras) Panwar</h1>
                    <p className="section__text__p2">Web Developer</p>
                    <div className="btn-container">
                        <Link href={'/assets/ParmendraPanwar.pdf'} download>
                            <button className="btn btn-color-2">
                                Download CV
                            </button>
                        </Link>
                        <Link href={'./#contact'} scroll={false}>
                            <button className="btn btn-color-1">
                                Contact Info
                            </button>
                        </Link>
                    </div>
                    <div id="socials-container">
                        <a href="https://www.linkedin.com/in/parmendra-panwar/" target="_blank" rel="noopener noreferrer">
                            <Image width={50} height={50} src="/assets/linkedin.png" alt="My LinkedIn profile" className="icon" />
                        </a>
                        <a href="https://github.com/Parmendra-Panwar" target="_blank" rel="noopener noreferrer">
                            <Image width={50} height={50} src="/assets/github.png" alt="My Github profile" className="icon" />
                        </a>
                    </div>
                </div>
                <div className="section__pic-container">
                    <Image width={300} height={350} src="/assets/avtar.png" alt="John Doe profile picture" className="picHand" />
                </div>
            </section>
        </>
    );
}