"use client";
import { useCallback, useEffect, useState } from "react"
import { FaInstagram, FaLinkedin, FaGithub, FaHtml5, FaReact } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

import AboutBar from "./aboutBar";
import Project from "./project";
import Footer from "./footer";

export default function HomeClient() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [betreff, setBetreff] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [scrolled, setScrolled] = useState(false)
    const scrollThreshold = 50

    // Funktion, die beim Scrollen aufgerufen wird
    const handleScroll = useCallback(() => {
        if (window.scrollY > scrollThreshold) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    }, [scrollThreshold]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

  return (
    <div className="flex min-h-screen flex-wrap h-100">
      <div className="min-h-screen w-full flex flex-col items-center">
        <nav className={`flex w-full fixed items-start justify-between px-4 py-2 ${scrolled ? 'bg-[#121212e1] shadow-lg': 'bg-transparent'} bg-opacity-5  z-50`}>
            <h1 className="nav-logo text-2xl">TIM STOEPEL</h1>
            <img src="/icons/burger.svg" className="w-[35px]" onClick={() => setMenuOpen(true)}/>
            <div className={`bg-[#121212] min-h-100 w-full ${menuOpen ? 'flex' : 'hidden'} flex-col absolute top-0 left-0 items-center z-50`}>
                <header className="flex justify-between items-center flex-wrap w-full py-[3.5px] px-4">
                    <h1 className="nav-logo text-2xl">TIM STOEPEL</h1>
                    <img src="/icons/cross.svg" alt="" onClick={() => setMenuOpen(false)} />
                </header>
                <nav className="w-full h-screen px-5 flex justify-center">
                    <ul className="w-full flex flex-col gap-22 mt-22 text-3xl text-[#C8C8C8] font-semibold items-center">
                        <li className="hover:text-[#c8c8c8b8] cursor-pointer"><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li className="hover:text-[#c8c8c8b8] cursor-pointer"><a href="#about" onClick={() => setMenuOpen(false)}>Über mich</a></li>
                        <li className="hover:text-[#c8c8c8b8] cursor-pointer"><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
                        <li className="hover:text-[#c8c8c8b8] cursor-pointer"><a href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </nav>
      <section id="home" className="flex w-full flex-col lg:flex-row-reverse justify-center items-center h-4/5 justify-self-center mt-18 lg:gap-32">
        <img src="/icons/avatar.svg" className="max-w-lg lg:w-1/3" alt="" />
        <div className="flex gap-4 lg:w-1/3 w-5/6 flex-col mt-4">
          <h3 className="text-xl text-[#878787]">Hi, ich bin</h3>
          <h2 className="text-2xl text-[#C7C5C5]">Tim Stoepel</h2>
          <h1 className="text-4xl hero-gradient">Webentwickler</h1>
          <div className="w-full flex gap-6 items-center">
            <div className="bg-[#353535] rounded-full w-[35px] aspect-square border-1 border-[#878787] flex justify-center items-center"><FaInstagram className="text-[#C8C8C8] " /></div>

            <div className="bg-[#353535] rounded-full w-[35px] aspect-square border-1 border-[#878787] flex justify-center items-center"><FaLinkedin className="text-[#C8C8C8] " /></div>

            <div className="bg-[#353535] rounded-full w-[35px] aspect-square border-1 border-[#878787] flex justify-center items-center"><FaGithub className="text-[#C8C8C8] " /></div>

            <div className="bg-[#353535] rounded-full w-[35px] aspect-square border-1 border-[#878787] flex justify-center items-center"><FaXTwitter className="text-[#C8C8C8] " /></div>
          </div>
          <div className="mb-4 flex flex-col gap-3">
            <button className="w-full bg-[#FD6F00] py-2 mt-2 rounded-md shadow-lg text-white hover:bg-[#fd6e00db] transition-all duration-200">Stellen Sie mich ein</button>
            <button className="w-full bg-transparent py-2 rounded-md shadow-lg text-white border-1 border-[#878787] hover:border-[#878787c6] transition-all duration-200">Projekt starten</button>
          </div>
        </div>
      </section>
      </div>
      <section id="about" className="w-full min-h-screen flex items-center flex-col">
        <img src="/icons/aboutAvatar.svg" className="max-w-[225px] w-1/2 mt-14 " alt="" />
        <div className="w-5/6 lg:w-1/2 flex flex-col gap-4 mt-12">
            <h1 className="text-[#C1C1C1] text-3xl">Über mich</h1>
            <p className="text-[#878787]">Mein Name ist Tim Stoepel. Ich habe im Alter von 12 Jahren mit der Spielentwicklung angefangen. Seit 2019 sammel ich auch Erfahrungen in der Webentwicklung.</p>
            <div>
                <div className="flex gap-2 flex-col">
                    <AboutBar skill="CSS" percentage={90} />
                    <AboutBar skill="NextJS" percentage={75} />
                    <AboutBar skill="NodeJS" percentage={80} />
                    <AboutBar skill="MySQL" percentage={90} />
                </div>
            </div>
        </div>
        <div className="w-full flex mt-14 h-26 bg-[#1E1E1E] items-center justify-evenly lg:justify-center lg:gap-40 text-4xl text-[#C1C1C1]">
            <FaHtml5 />
            <IoLogoJavascript />
            <FaReact />
            <RiTailwindCssFill />
        </div>
      </section>
      <section id="portfolio" className="flex flex-col items-center mt-28 px-8 w-full">
        <h1 className="text-3xl font-bold text-[#C1C1C1] mb-8">Portfolio</h1>
        <div className="flex flex-wrap justify-center gap-16 w-full max-w-6xl mt-8">
            <Project project="Projekt" descrtiption="Cras vel placerat. vitae enim. tincidunt Cras lobortis, non libero, nisl. massa viverra non. malesuada consectetur elit Nam" demoLink="https://fotorallye.tim-stoepel.de" />
            <Project project="Projekt" descrtiption="Cras vel placerat. vitae enim. tincidunt Cras lobortis, non libero, nisl. massa viverra non. malesuada consectetur elit Nam" demoLink="https://fotorallye.tim-stoepel.de" />
            <Project project="Projekt" descrtiption="Cras vel placerat. vitae enim. tincidunt Cras lobortis, non libero, nisl. massa viverra non. malesuada consectetur elit Nam" demoLink="https://fotorallye.tim-stoepel.de" />
        </div>
      </section>
      <section id="contact" className="flex flex-col items-center justify-center py-36 w-full mt-28">
        <form className="flex flex-col lg:w-4/6 w-5/6 bg-[#353535] p-6 rounded-lg shadow-lg gap-4">
            <h1 className="text-[#C1C1C1] w-full text-2xl">Kontaktformular</h1>
            <label htmlFor="email" className="text-[#c1c1c195] mb-[-10px]">E-Mail</label>
            <input
              type="email"
              id="email"
              className="bg-[#878787b3] text-[#C1C1C1] rounded-md shadow-lg py-1 px-2 border-1 border-transparent outline-none focus:border-[#FD6F00] transition-all duration-200"
              placeholder="Geben Sie Ihre Email ein..."
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <label htmlFor="betreff" className="text-[#c1c1c195] mb-[-10px]">Betreff</label>
            <input type="text" id="betreff" className="bg-[#878787b3] text-[#C1C1C1] rounded-md shadow-lg py-1 px-2 border-1 border-transparent outline-none focus:border-[#FD6F00] transition-all duration-200" placeholder="Geben Sie Ihren Betreff ein..." value={betreff}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBetreff(e.target.value)}/>
            <label htmlFor="message" className="text-[#c1c1c195] mb-[-10px]">Nachricht</label>
            <textarea rows={5} id="message" className="bg-[#878787b3] text-[#C1C1C1] rounded-md shadow-lg py-1 px-2 border-1 border-transparent outline-none focus:border-[#FD6F00] transition-all duration-200" placeholder="Geben Sie Ihre Nachricht ein..." value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
            <button type="submit" className="w-full py-2 px-4 bg-[#FD6F00] text-white hover:bg-[#fd6e00db] transition-all duration-200 rounded-lg shadow-lg mt-6">Absenden</button>
        </form>
      </section>
      <Footer />
    </div>
  )
}