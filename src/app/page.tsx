"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { 
  ArrowRight, Github, Linkedin, Twitter, Sun, Moon, Copy, Check, 
  Briefcase, Code, Terminal, Database, Cpu, Layers, 
  Globe, Palette, Server, FileCode, LayoutTemplate 
} from "lucide-react";
import { img } from "framer-motion/client";

// Lazy load 3D scene
const HeroScene = dynamic(() => import("@/app/components/canvas/HeroScene"), {
  ssr: false,
  loading: () => <div className="hidden" />, 
});

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Styles based on theme
  const bgClass = isDark ? "bg-neutral-950 text-white" : "bg-gray-50 text-neutral-900";
  const cardClass = isDark ? "bg-neutral-900 border-white/10" : "bg-white border-black/5 shadow-xl";
  const textMuted = isDark ? "text-neutral-400" : "text-neutral-600";

  const toggleTheme = () => setIsDark(!isDark);

  const copyEmail = () => {
    // REPLACE THIS WITH YOUR REAL EMAIL LATER
    navigator.clipboard.writeText("theabdullahx9779@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <main className={`relative min-h-screen font-sans transition-colors duration-500 ${bgClass} selection:bg-indigo-500 selection:text-white`}>
      
      {/* ------------------------------------------------------- */}
      {/* BACKGROUND LAYER (3D SCENE) - FIXED POSITION            */}
      {/* ------------------------------------------------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
         <HeroScene />
      </div>

      {/* ------------------------------------------------------- */}
      {/* FOREGROUND LAYER (UI) - RELATIVE POSITION               */}
      {/* ------------------------------------------------------- */}
      <div className="relative z-10">

        {/* Scroll Progress */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50" style={{ scaleX }} />

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-transform hover:scale-110"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* SECTION 1: HERO */}
        <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-20 overflow-hidden pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="max-w-5xl"
            >
              <div className={`inline-block px-4 py-2 border rounded-full mb-6 backdrop-blur-md ${isDark ? "bg-indigo-500/10 border-indigo-500/30" : "bg-white/80 border-indigo-200"}`}>
                <span className="text-indigo-500 font-bold tracking-wider text-sm uppercase">
                  Software Engineering Student
                </span>
              </div>

              <h1 className={`text-5xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
                I am <span className="text-indigo-500">Abdullah.</span> <br />
                Engineering the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                  Future.
                </span>
              </h1>
              
              <p className={`text-lg md:text-xl max-w-lg mb-10 leading-relaxed ${textMuted}`}>
                A multidisciplinary developer merging Software Architecture, AI, and Creative Design to build world-class digital solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
                  Hire Me <ArrowRight size={20} />
                </a>
                <a href="#work" className={`px-8 py-4 bg-transparent border rounded-full font-bold text-lg hover:bg-neutral-500/10 transition-colors backdrop-blur-sm ${isDark ? "border-white/20 text-white" : "border-black/20 text-black"}`}>
                  {/* View Projects */}
                </a>
              </div>
            </motion.div>
          
            {/* Scroll Indicator */}
            <motion.div 
              className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm ${textMuted}`}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className={`w-[1px] h-12 bg-gradient-to-b from-transparent to-transparent ${isDark ? "via-neutral-500" : "via-neutral-400"}`}></div>
              <span>Scroll</span>
            </motion.div>
        </section>

        {/* SECTION 2: STATS (Student Optimized) */}
        <section className={`border-y ${isDark ? "border-white/5 bg-neutral-900/50" : "border-black/5 bg-white/50"} backdrop-blur-md`}>
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Years Experience", value: "1+" }, // Realistic for a student
                { label: "Projects Built", value: "5+" },
                { label: "Tech Stack", value: "10+" },
                { label: "Commitment", value: "100%" }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                    <h3 className={`text-4xl font-bold ${isDark ? "text-white" : "text-neutral-900"}`}>{stat.value}</h3>
                    <p className={`${textMuted} text-sm uppercase tracking-wider mt-2`}>{stat.label}</p>
                </div>
              ))}
          </div>
        </section>

       {/* SECTION 3: TECHNICAL SKILLS (Updated Layout) */}
        <section className="py-24 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
              <h2 className={`text-3xl font-bold mb-12 ${isDark ? "text-white" : "text-neutral-900"}`}>Technical Skills</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* CARD 1: Frontend & Design */}
                <div className={`p-8 rounded-2xl border border-t-4 border-t-indigo-500 ${cardClass}`}>
                    <h3 className={`text-xl font-bold mb-8 flex items-center gap-2 ${isDark ? "text-white" : "text-neutral-900"}`}>
                        <LayoutTemplate size={20} className="text-indigo-500" /> Frontend & Design
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                        {[
                            { name: "React", icon: <Globe size={24}/> },
                            { name: "JavaScript", icon: <FileCode size={24}/> },
                            { name: "HTML5", icon: <LayoutTemplate size={24}/> },
                            { name: "CSS3", icon: <Palette size={24}/> },
                            
                            
                            { name: "Graphic Design", icon: <Layers size={24}/> },
                        ].map((skill, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 text-center group">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${isDark ? "bg-white/5 group-hover:bg-indigo-500" : "bg-black/5 group-hover:bg-indigo-500 group-hover:text-white"}`}>
                                    {skill.icon}
                                </div>
                                <span className={`text-xs font-medium ${textMuted}`}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CARD 2: Backend & Database */}
                <div className={`p-8 rounded-2xl border border-t-4 border-t-purple-500 ${cardClass}`}>
                    <h3 className={`text-xl font-bold mb-8 flex items-center gap-2 ${isDark ? "text-white" : "text-neutral-900"}`}>
                        <Server size={20} className="text-purple-500" /> Backend & Systems
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                        {[
                            { name: "C++", icon: <Cpu size={24}/> },
                            { name: "PHP", icon: <Code size={24}/> },
                            { name: "SQL", icon: <Database size={24}/> },
                            { name: "MongoDB", icon: <Server size={24}/> },
                            { name: "Node.js", icon: <Palette size={24}/> },
                            
                            { name: "Express.js", icon: <Palette size={24}/> }
                        ].map((skill, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 text-center group">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${isDark ? "bg-white/5 group-hover:bg-purple-500" : "bg-black/5 group-hover:bg-purple-500 group-hover:text-white"}`}>
                                    {skill.icon}
                                </div>
                                <span className={`text-xs font-medium ${textMuted}`}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

              </div>
          </div>
        </section>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { 
      title: "Bank Management", 
      cat: "C++ / System Software", 
      color: "from-blue-600",
      image: "/bank.png" // Ensure bank.jpg is in your 'public' folder
    },
    { 
      title: "E-Learning Platform", 
      cat: "EdTech / Full Stack", 
      color: "from-indigo-500",
      image: "/e-learning.jpg" 
    },
    { 
      title: "Food Delivery App", 
      cat: "Mobile / App Dev", 
      color: "from-orange-500",
      image: "/food-delivery.jpg" 
    },
    { 
      title: "To-Do List App", 
      cat: "Productivity Tool", 
      color: "from-emerald-500",
      image: "/to-do.jpg" 
    },
    { 
      title: "3D Portfolio", 
      cat: "Next.js / WebGL", 
      color: "from-purple-500",
      image: "/portfolio.png" 
    },
    { 
      title: "Coming Soon", 
      cat: "In Development", 
      color: "from-gray-600",
      image: "/coming.png" 
    }
  ].map((item, i) => (
    <div key={i} className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border transition-all hover:scale-[1.02] ${cardClass}`}>
        
        {/* 2. ADD THE IMAGE COMPONENT HERE */}
        {/* Make sure to import Image from "next/image" at the top of your file */}
        {item.image && (
          <Image 
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-50  group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color}/20 to-transparent opacity-50`} />
        
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
        
        {/* Text Content */}
        <div className="absolute bottom-0 left-0 p-8 w-full z-10">
          <span className="text-xs font-bold uppercase mb-2 block tracking-wider text-white/90 drop-shadow-md">{item.cat}</span>
          <h3 className={`text-2xl font-bold text-white drop-shadow-md`}>{item.title}</h3>
          <p className="text-xs mt-3 font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            {/* View Project &rarr; */}
          </p>
        </div>
    </div>
  ))}
</div>

        {/* SECTION 5: EXPERIENCE (Timeline - Student Adapted) */}
        <section className="py-24 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${isDark ? "text-white" : "text-neutral-900"}`}>Journey</h2>
            <div className="space-y-12">
                {[
                { role: "Freelance Developer", company: "Remote", date: "Present" },
                { role: "Open Source Contributor", company: "GitHub Community", date: "2024 - Present" },
                { role: "Software Engineering Student", company: "University", date: "2023 - Present" },
                ].map((job, i) => (
                <div key={i} className="flex gap-6 relative group">
                    {/* Timeline Line */}
                    <div className="w-px bg-indigo-500/30 h-full absolute left-[19px] top-2" />
                    <div className="w-10 h-10 rounded-full border border-indigo-500 bg-indigo-500/10 flex items-center justify-center shrink-0 z-10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Briefcase size={18} />
                    </div>
                    <div>
                    <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-neutral-900"}`}>{job.role}</h3>
                    <p className="text-indigo-400 text-sm font-semibold mb-2">{job.company}</p>
                    <p className={textMuted}>{job.date}</p>
                    <p className={`mt-2 ${textMuted} text-sm leading-relaxed max-w-lg`}>
                        Developing scalable applications, learning algorithms, and building software solutions for real-world problems.
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

      {/* SECTION 6: CONTACT & FOOTER */}
        <section id="contact" className={`py-24 border-t ${isDark ? "border-white/10 bg-neutral-900" : "border-black/10 bg-gray-50"}`}>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className={`text-4xl font-bold mb-8 ${isDark ? "text-white" : "text-neutral-900"}`}>Let's Work Together</h2>
            <p className={`${textMuted} mb-10`}>Have a project in mind or want to discuss Software Engineering? Copy my email or find me on social media.</p>
            
            {/* Copy Email Button */}
            <div className="flex justify-center mb-16">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 px-6 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all active:scale-95 shadow-lg"
              >
                {emailCopied ? <Check size={20} /> : <Copy size={20} />}
                <span className="font-semibold">{emailCopied ? "Email Copied!" : "Copy Email Address"}</span>
              </button>
            </div>

            {/* SOCIAL LINKS SECTION (UPDATED) */}
            <div className="flex justify-center gap-8 mb-8 text-neutral-500">
                {/* GitHub */}
                <a 
                  href="https://github.com/YOUR_USERNAME_HERE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="hover:text-indigo-500 cursor-pointer transition transform hover:-translate-y-1"/>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/YOUR_USERNAME_HERE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="hover:text-indigo-500 cursor-pointer transition transform hover:-translate-y-1"/>
                </a>

                {/* Twitter / X (Optional) */}
                <a 
                  href="https://twitter.com/YOUR_USERNAME_HERE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="hover:text-indigo-500 cursor-pointer transition transform hover:-translate-y-1"/>
                </a>
            </div>

            <p className="text-neutral-600 text-sm">&copy; 2025 Abdullah. All Rights Reserved.</p>
          </div>
        </section>
      </div> 
    </main>
  );
}