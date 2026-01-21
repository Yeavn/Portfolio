"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaReact,
  FaCode,
  FaMusic,
  FaGraduationCap,
  FaDownload,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import AboutBar from "./aboutBar";
import Project from "./project";
import Footer from "./footer";

export default function HomeClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [betreff, setBetreff] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [scrolled, setScrolled] = useState(false);
  const scrollThreshold = 50;

  const [aboutExpanded1, setAboutExpanded1] = useState(false);
  const [aboutExpanded2, setAboutExpanded2] = useState(false);
  const [aboutExpanded3, setAboutExpanded3] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Hero-Animation
    gsap.from("#home img", {
      opacity: 0,
      x: 80,
      duration: 1.2,
      ease: "power3.out",
    });
    gsap.from("#home div", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from("#about img", {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });
    gsap.from("#about > div", {
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    gsap.from("#portfolio .project-list > *", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
      },
    });

    gsap.from("#pricing", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#pricing",
        start: "top 90%",
      },
    });

    gsap.from("#contact form", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
    });
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);

  function handleMenuClose() {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => setMenuOpen(false),
      });
    }
  }

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [menuOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) {
      alert("Bitte füllen Sie das Formular korrekt aus.");
      return;
    }
    if (!betreff || !email || !message) {
      alert("Bitte füllen Sie alle Felder aus.");
      return;
    } else if (!email.includes("@")) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    } else {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, betreff, message }),
      });
      if (res.ok) {
        alert("Ihre Nachricht wurde erfolgreich gesendet!");
        setBetreff("");
        setEmail("");
        setMessage("");
        setName("");
      } else {
        const errorData = await res.json();
        alert(`Fehler beim Senden der Nachricht: ${errorData.error}`);
      }
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-wrap h-100">
        <div className="min-h-screen w-full flex flex-col items-center">
          <nav
            className={`flex w-full fixed items-start justify-between px-4 py-2 ${
              scrolled ? "bg-[#121212e1] shadow-lg" : "bg-transparent"
            } bg-opacity-5  z-50`}
          >
            <h1 className="nav-logo text-2xl z-50">TIM STOEPEL</h1>
            <img
              src="/icons/burger.svg"
              className="w-[35px]"
              onClick={() => setMenuOpen(true)}
            />
            <div
              ref={menuRef}
              className={`bg-[#121212] min-h-100 w-full ${
                menuOpen ? "flex" : "hidden"
              } flex-col absolute top-0 left-0 items-center z-40`}
            >
              <header className="flex justify-end items-center flex-wrap w-full py-[3.5px] px-4">
                <img src="/icons/cross.svg" alt="" onClick={handleMenuClose} />
              </header>
              <nav className="w-full min-h-screen px-5 flex justify-center">
                <ul className="w-full flex flex-col gap-18 mt-22 text-3xl text-[#C8C8C8] font-semibold items-center">
                  <li className="hover:text-[#c8c8c8b8] cursor-pointer">
                    <a href="#home" onClick={handleMenuClose}>
                      Home
                    </a>
                  </li>
                  <li className="hover:text-[#c8c8c8b8] cursor-pointer">
                    <a href="#about" onClick={handleMenuClose}>
                      Über mich
                    </a>
                  </li>
                  <li className="hover:text-[#c8c8c8b8] cursor-pointer">
                    <a href="#portfolio" onClick={handleMenuClose}>
                      Portfolio
                    </a>
                  </li>
                  <li className="hover:text-[#c8c8c8b8] cursor-pointer hidden">
                    <a href="#pricing" onClick={handleMenuClose}>
                      Preise
                    </a>
                  </li>
                  <li className="hover:text-[#c8c8c8b8] cursor-pointer">
                    <a href="#contact" onClick={handleMenuClose}>
                      Kontakt
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
          <section
            id="home"
            className="flex w-full flex-col lg:flex-row-reverse justify-center items-center h-4/5 justify-self-center mt-18 lg:gap-32"
          >
            <img
              src="/icons/Avatar.png"
              className="max-w-[350px] lg:w-1/3 rounded-full shadow-xl"
              alt=""
            />
            <div className="flex gap-4 lg:w-1/3 w-5/6 flex-col mt-4">
              <h3 className="text-xl text-[#878787]">Hi, ich bin</h3>
              <h2 className="text-2xl text-[#C7C5C5]">Tim Stoepel</h2>
              <h1 className="text-4xl hero-gradient">Webentwickler</h1>
              <div className="w-full flex gap-10 items-center">
                <div
                  className="bg-[#353535] rounded-full w-[35px] aspect-square border-1 border-[#878787] flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/t.stoepsel/#",
                      "_blank"
                    );
                  }}
                >
                  <FaInstagram className="text-[#C8C8C8] " />
                </div>

                <div
                  className="bg-[#353535] rounded-full w-[35px] aspect-square border-1 border-[#878787] flex justify-center items-center cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/tim-stoepel-7a035630a/",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedin className="text-[#C8C8C8] " />
                </div>

                <div
                  className="bg-[#353535] rounded-full w-[35px] aspect-square border-1 border-[#878787] flex justify-center items-center cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/Yeavn", "_blank")
                  }
                >
                  <FaGithub className="text-[#C8C8C8] " />
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-3">
                <a
                  className="w-full bg-[#FD6F00] py-2 mt-2 rounded-md shadow-lg text-white hover:bg-[#fd6e00db] transition-all duration-200 text-center"
                  href="#contact"
                  onClick={() => setBetreff("Anfrage Werksstudent 20h/Woche")}
                >
                  Jobanfrage
                </a>
                <a
                  className="w-full bg-transparent py-2 rounded-md shadow-lg text-white border-1 border-[#878787] hover:border-[#878787c6] transition-all duration-200 text-center"
                  href="#contact"
                  onClick={() => setBetreff("Projektanfrage")}
                >
                  Projekt starten
                </a>
              </div>
            </div>
          </section>
        </div>
        <section
          id="about"
          className="w-full min-h-screen flex items-center flex-col"
        >
          <img
            src="/icons/aboutAvatar.png"
            className="max-w-[600px] w-full mt-14 "
            alt=""
          />
          <div className="w-5/6 lg:w-1/2 flex flex-col gap-4 mt-12">
            <h1 className="text-[#C1C1C1] text-3xl">Über mich</h1>
            <div className="text-[#878787] space-y-6">
              <div className={aboutExpanded1 ? "" : "line-clamp-1"}>
                <div className="flex items-center gap-2 text-[#C1C1C1]">
                  <FaCode />{" "}
                  <h2 className="text-lg font-semibold">
                    Mein Einstieg in die Technik
                  </h2>
                  <button
                    className="text-xl"
                    onClick={() => setAboutExpanded1(!aboutExpanded1)}
                  >
                    {aboutExpanded1 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </button>
                </div>
                <p>
                  Mit 12 Jahren fing alles an – eigene Erweiterungen (Mods) für{" "}
                  <span className="text-[#C1C1C1] font-medium">Minecraft</span>.
                  Aus Neugier wurde Leidenschaft: Zwischen 2019 und 2022
                  programmierte ich intensiv mit{" "}
                  <span className="text-[#C1C1C1] font-medium">FiveM</span> und
                  sammelte erste Erfahrungen in der{" "}
                  <span className="text-[#C1C1C1] font-medium">
                    Webentwicklung
                  </span>
                  .
                </p>
              </div>

              <div className={aboutExpanded2 ? "" : "line-clamp-1"}>
                <div className="flex items-center gap-2 text-[#C1C1C1]">
                  <FaGraduationCap />{" "}
                  <h2 className="text-lg font-semibold">
                    Lernen als täglicher Begleiter
                  </h2>
                  <button
                    className="text-xl"
                    onClick={() => setAboutExpanded2(!aboutExpanded2)}
                  >
                    {aboutExpanded2 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </button>
                </div>
                <p>
                  Neue Technologien, eigene Projekte oder der Austausch mit
                  anderen Entwickler:innen – ich liebe es, dazuzulernen und über
                  den Tellerrand zu schauen. Ich bin immer auf der Suche nach
                  neuen{" "}
                  <span className="text-[#C1C1C1] font-medium">
                    Herausforderungen und Möglichkeiten
                  </span>
                  , meine Fähigkeiten zu erweitern und somit offen für{" "}
                  <span className="text-[#C1C1C1] font-medium">
                    alle Arten von Anfragen.
                  </span>
                </p>
              </div>

              <div className={aboutExpanded3 ? "" : "line-clamp-1"}>
                <div className="flex items-center gap-2 text-[#C1C1C1]">
                  <FaMusic />{" "}
                  <h2 className="text-lg font-semibold">Musik & Studium</h2>
                  <button
                    className="text-xl"
                    onClick={() => setAboutExpanded3(!aboutExpanded3)}
                  >
                    {aboutExpanded3 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </button>
                </div>
                <p>
                  Neben der Technik begleitet mich die{" "}
                  <span className="text-[#C1C1C1] font-medium">Musik</span>{" "}
                  schon mein ganzes Leben. 2023–2025 studierte ich{" "}
                  <span className="text-[#C1C1C1] font-medium">
                    Grundschullehramt mit Hauptfach Musik
                  </span>
                  . Jetzt starte ich mein Studium in{" "}
                  <span className="text-[#C1C1C1] font-medium">Informatik</span>{" "}
                  – eine perfekte Verbindung von Kreativität & Technik.
                </p>
              </div>

              <div className="bg-[#232323] rounded-lg p-4 mt-8 text-[#C1C1C1] text-center shadow">
                <span className="font-semibold text-[#FD6F00]">Aktuell</span>
                <br />
                Ich suche ein Team, in dem ich mich fachlich und persönlich
                weiterentwickeln und neue soziale Kontakte knüpfen kann.
                <br />
                <span className="text-[#C1C1C1b0]">
                  Freelancing-Anfragen sind aber weiterhin willkommen!
                </span>
              </div>

              <div className="italic text-[#C1C1C1]">
                Ob Musik, Medien oder Code – ich liebe es, Dinge zu gestalten,
                die Menschen begeistern.
              </div>
            </div>

            <div>
              <div className="flex gap-2 flex-col mt-4">
                <h1 className="text-[#C1C1C1] text-xl mb-4"></h1>
                <a
                  href="/lebenslauf.pdf"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  download
                  className="sm:w-1/2 w-full self-center py-2 px-4 bg-[#FD6F00] text-white hover:bg-[#fd6e00db] transition-all duration-200 rounded-lg shadow-lg mt-6 text-center flex items-center justify-center"
                >
                  <FaDownload className="mr-2" /> Lebenslauf herunterladen
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex mt-14 h-26 bg-[#1E1E1E] items-center justify-evenly lg:justify-center lg:gap-30 text-4xl text-[#C1C1C1]">
            <FaHtml5 />
            <IoLogoJavascript />
            <FaReact />
            <RiTailwindCssFill />
            <RiNextjsFill />
            <DiMysql />
          </div>
        </section>
        <section
          id="portfolio"
          className="flex flex-col items-center mt-28 px-8 w-full"
        >
          <h1 className="text-3xl font-bold text-[#C1C1C1] mb-8">Portfolio</h1>
          <div className="flex flex-wrap justify-center gap-16 w-full max-w-6xl mt-8 project-list">
            <Project
              project="Videospiele Datenbank"
              img="videogames-db.png"
              descrtiption="Ein modernes Webprojekt, das mit NextJS und TailwindCSS umgesetzt wurde. Es nutzt die RAWG API, um tausende Games zu durchsuchen, inklusive Bewertungen und Infos."
              demoLink="https://videogames-db.vercel.app/"
              github="https://github.com/Yeavn/videogame-api"
            />

            <Project
              project="nota bene leipzig – Chor-Website"
              img="nota-bene.png"
              descrtiption="Für den Leipziger Chor nota bene habe ich eine moderne Vereinswebsite mit WordPress umgesetzt. Der Fokus lag auf einer klaren Struktur, einfacher Pflege durch das Chorteam und einer ansprechenden Darstellung von Konzertterminen, Neuigkeiten und dem Chorprofil."
              demoLink="https://nota-bene-leipzig.de/"
            />

            <Project
              project="DMX-Lichtshow – Musikbasierte Programmierung"
              img="lichtshow.png"
              descrtiption="Im Rahmen einer DMX-Lichttechnik-Aufgabe habe ich mehrere 30-sekündige Lichtshows mit vier adressierten Scheinwerfern programmiert. Die Sequenzen wurden musikalisch synchron zu „Billie Jean“ von Michael Jackson sowie „September“ von Earth, Wind and Fire umgesetzt. Dabei lag der Fokus auf präzisem Timing, klarer Farbgestaltung und dynamischen Bewegungen. Die Shows wurden als Video inklusive Audio dokumentiert."
              demoLink="https://youtu.be/2PCWAtOEuUQ"
            />
          </div>
        </section>
        <div className="w-full flex items-center justify-center">
          <hr className="w-2/5 border-[#444] my-12 shadow-sm mt-48" />
        </div>
        <section
          id="pricing"
          className="flex-col items-center justify-center w-full min-h-screen hidden"
        >
          <div>
            <h1 className="text-[#c1c1c1] font-bold text-3xl mt-24 mb-10">
              Preise
            </h1>
          </div>
          <div className="flex flex-wrap gap-10 justify-center w-full max-w-6xl mt-12">
            <div className="bg-[#232323] rounded-xl shadow-lg p-8 flex flex-col items-center w-80 border border-[#444] hover:border-[#FD6F00] transition-all duration-200 price-card">
              <FaCode className="text-4xl text-[#FD6F00] mb-4" />
              <h2 className="text-2xl text-[#C1C1C1] font-semibold mb-2">
                Starter
              </h2>
              <p className="text-[#c1c1c1b0] mb-4 text-center">
                Kleine Website, Portfolio oder Landingpage. Perfekt für
                Einzelpersonen & kleine Unternehmen.
              </p>
              <div className="text-3xl font-bold text-[#FD6F00] mb-2">
                ab 399€
              </div>
              <ul className="text-[#C1C1C1] text-sm mb-6 space-y-1">
                <li>✓ 1–3 Seiten</li>
                <li>✓ Responsive Design</li>
                <li>✓ Kontaktformular</li>
                <li>✓ SEO-Basics</li>
              </ul>
              <a
                href="#contact"
                className="bg-[#FD6F00] text-white px-6 py-2 rounded-md shadow hover:bg-[#fd6e00db] transition-all duration-200 font-semibold"
                onClick={() => setBetreff("Anfrage Starter Paket")}
              >
                Anfragen
              </a>
            </div>

            <div className="bg-[#232323] rounded-xl shadow-lg p-8 flex flex-col items-center w-80 border border-[#444] hover:border-[#FD6F00] transition-all duration-200 price-card">
              <FaReact className="text-4xl text-[#FD6F00] mb-4" />
              <h2 className="text-2xl text-[#C1C1C1] font-semibold mb-2">
                Business
              </h2>
              <p className="text-[#c1c1c1b0] mb-10 text-center">
                Umfangreiche Website oder Web-App. Für Unternehmen, Vereine &
                größere Projekte.
              </p>
              <div className="text-3xl font-bold text-[#FD6F00] mb-2">
                ab 999€
              </div>
              <ul className="text-[#C1C1C1] text-sm mb-6 space-y-1">
                <li>✓ 4+ Seiten / Module</li>
                <li>✓ Individuelles Design</li>
                <li>✓ Interaktive Features</li>
                <li>✓ Performance-Optimierung</li>
              </ul>
              <a
                href="#contact"
                className="bg-[#FD6F00] text-white px-6 py-2 rounded-md shadow hover:bg-[#fd6e00db] transition-all duration-200 font-semibold"
                onClick={() => setBetreff("Anfrage Business Paket")}
              >
                Anfragen
              </a>
            </div>

            <div className="bg-[#232323] rounded-xl shadow-lg p-8 flex flex-col items-center w-80 border border-[#444] hover:border-[#FD6F00] transition-all duration-200 price-card">
              <FaCode className="text-4xl text-[#FD6F00] mb-4" />
              <h2 className="text-2xl text-[#C1C1C1] font-semibold mb-2">
                Individual
              </h2>
              <p className="text-[#c1c1c1b0] mb-4 text-center">
                Individuelle Lösungen, Schnittstellen, Datenbanken oder
                Sonderwünsche? Schreibe mir!
              </p>
              <div className="text-3xl font-bold text-[#FD6F00] mb-2">
                auf Anfrage
              </div>
              <ul className="text-[#C1C1C1] text-sm mb-6 space-y-1">
                <li>✓ Maßgeschneiderte Entwicklung</li>
                <li>✓ Beratung & Konzeption</li>
                <li>✓ API-Anbindung</li>
                <li>✓ u.v.m.</li>
              </ul>
              <a
                href="#contact"
                className="bg-[#FD6F00] text-white px-6 py-2 rounded-md shadow hover:bg-[#fd6e00db] transition-all duration-200 font-semibold"
                onClick={() => setBetreff("Anfrage Individual Paket")}
              >
                Anfragen
              </a>
            </div>
          </div>
          <div className="text-[#c1c1c1b0] text-sm mt-8 text-center max-w-2xl">
            Alle Preise sind Richtwerte und können je nach Aufwand variieren.
            Gerne erstelle ich ein individuelles Angebot!
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col items-center justify-center py-36 w-full"
        >
          <form
            className="flex flex-col lg:w-4/6 w-5/6 bg-[#353535] p-6 rounded-lg shadow-lg gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }} // Versteckt für User
              tabIndex={-1}
              autoComplete="off"
            />
            <h1 className="text-[#C1C1C1] w-full text-2xl">Kontaktformular</h1>
            <h2 className="text-[#c1c1c1b0]">
              Du hast Fragen, zu einem Projekt oder suchst Unterstützung im
              Entwickler-Team? Schreib mir gern!
            </h2>
            <label htmlFor="email" className="text-[#c1c1c195] mb-[-10px]">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#878787b3] text-[#C1C1C1] rounded-md shadow-lg py-1 px-2 border-1 border-transparent outline-none focus:border-[#FD6F00] transition-all duration-200"
              placeholder="Gib deine Email ein..."
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <label htmlFor="email" className="text-[#c1c1c195] mb-[-10px]">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#878787b3] text-[#C1C1C1] rounded-md shadow-lg py-1 px-2 border-1 border-transparent outline-none focus:border-[#FD6F00] transition-all duration-200"
              placeholder="Gib deinen Namen ein..."
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <label htmlFor="betreff" className="text-[#c1c1c195] mb-[-10px]">
              Betreff
            </label>
            <input
              type="text"
              id="betreff"
              className="bg-[#878787b3] text-[#C1C1C1] rounded-md shadow-lg py-1 px-2 border-1 border-transparent outline-none focus:border-[#FD6F00] transition-all duration-200"
              placeholder="Gib deinen Betreff ein..."
              value={betreff}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBetreff(e.target.value)
              }
            />
            <label htmlFor="message" className="text-[#c1c1c195] mb-[-10px]">
              Nachricht
            </label>
            <textarea
              rows={5}
              id="message"
              className="bg-[#878787b3] text-[#C1C1C1] rounded-md shadow-lg py-1 px-2 border-1 border-transparent outline-none focus:border-[#FD6F00] transition-all duration-200"
              placeholder="Gib deine Nachricht ein..."
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#FD6F00] text-white hover:bg-[#fd6e00db] transition-all duration-200 rounded-lg shadow-lg mt-6"
            >
              Absenden
            </button>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
}
