"use client"
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import experiences from '../data/experiences.json'
import { useEffect, useState } from "react";

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("sobre");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        const handleScroll = () => {
            const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            if (nearBottom && sections.length > 0) {
                const lastSection = sections[sections.length - 1];
                setActiveSection(lastSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { name: "ABOUT", id: "about" },
        { name: "EXPERIENCES", id: "experiences" },
        // { name: "PROJECTS", id: "projects" },
    ];
    
    return (
        <div className="min-h-screen bg-nord-bg text-nord-fg selection:bg-nord-selection selection:text-nord-blue">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
            
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-nord-fg sm:text-5xl">
                        <Link href="/" className="hover:text-nord-blue transition-colors">Gabriel Ramos dos Santos</Link>
                    </h1>
                    <h2 className="mt-3 text-lg font-medium tracking-tight text-nord-blue sm:text-xl">
                        Fullstack Developer
                    </h2>
                    <p className="mt-4 max-w-xs leading-normal text-nord-comment">
                        Better code, better results.
                    </p>

                    <nav className="hidden lg:block mt-16">
                        <ul className="w-max">
                        {navItems.map((item) => (
                            <li key={item.id} className="py-3">
                            <a 
                                href={`#${item.id}`}
                                className="group flex items-center cursor-pointer"
                            >
                                <span className={`mr-4 h-px transition-all ${
                                activeSection === item.id 
                                    ? "w-16 bg-nord-blue" 
                                    : "w-8 bg-nord-selection group-hover:w-16 group-hover:bg-nord-blue"
                                }`}></span>
                                <span className={`text-xs font-bold uppercase tracking-widest transition-all ${
                                activeSection === item.id 
                                    ? "text-nord-blue" 
                                    : "text-nord-comment group-hover:text-nord-blue"
                                }`}>
                                {item.name}
                                </span>
                            </a>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>

                <ul className="ml-1 mt-8 flex items-center gap-5">
                <li className="text-nord-comment hover:text-nord-blue transition-colors">
                    <a href="https://github.com/ElderGr" target="_blank"><Github size={24} /></a>
                </li>
                <li className="text-nord-comment hover:text-nord-blue transition-colors">
                    <a href="https://www.linkedin.com/in/gabriel-ramos-dos-santos/" target="_blank"><Linkedin size={24} /></a>
                </li>
                </ul>
            </header>

            <main className="pt-24 lg:w-1/2 lg:py-24">
                
                <section id="about" className="mb-16 scroll-mt-16 text-nord-comment md:mb-24 lg:mb-36">
                    <p className="mb-4">
                       I'm a <span className="text-nord-blue">Fullstack Developer</span> having worked with technologies such as Node.js, React, MongoDB, PostgreSQL, Docker, AWS, among others.
                    </p>
                    <p className="mb-4">In addition, I have experience in tech education, training students in fullstack development and preparing them to enter the job market with confidence and hands-on experience.</p>
                    <p className="mb-4">I have participated in projects in industries such as fashion and automotive, covering all stages from requirements gathering to deployment and maintenance of applications. I have also worked on the development of SaaS products and marketplaces, focusing on building robust and scalable solutions.</p>
                    <p>Outside of work, I enjoy spending time with my family, engaging in outdoor activities, and staying physically active to maintain energy and focus. I also like studying technology topics that spark my curiosity and contribute to the quality of my work.</p>
                    
                </section>

                <section id="experiences" className="space-y-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-nord-fg lg:hidden mb-8">Experiences</h3>
                    {experiences.experiences.map((experience) => (
                        <div key={experience.id} className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 cursor-pointer">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-nord-bgLighter/50"></div>
                            
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-nord-comment sm:col-span-2">
                            {experience.startDate} —  {experience.endDate}
                            </header>

                            <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-tight text-nord-fg group-hover:text-nord-blue">
                                {experience.title}
                            </h3>
                            <h3 className="font-medium leading-tight text-nord-fg group-hover:text-nord-blue">
                                at {experience.company}
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-nord-comment">
                                {experience.description}
                            </p>
                            
                            <ul className="mt-2 flex flex-wrap gap-2">
                                {experience.skills.map((tech) => (
                                <li key={tech.id} className="flex items-center rounded-full bg-nord-blue/10 px-3 py-1 text-xs font-medium leading-5 text-nord-blue">
                                    {tech.activity}
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    ))}
                </section>

                {/* <section id="projects" className="my-24 scroll-mt-16 text-nord-comment md:mb-36 lg:mb-42">
                    <p className="mb-4">
                       
                    </p>
                </section> */}
            </main>
            </div>
        </div>
        </div>
    );
}