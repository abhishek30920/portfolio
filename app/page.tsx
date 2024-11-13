'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/app/components/Navbar'
import SkillIcon from '@/app/components/Skillicon';
import ProjectCard from '@/app/components/ProjectCard';
import Background from '@/app/components/Background';
import SocialLinks from '@/app/components/Sociallinks';
import ExperienceCard from '@/app/components/ExperienceCard'
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored team of 5 junior developers, conducted code reviews",
        "Optimized database queries resulting in 40% performance improvement"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      role: "Full Stack Developer",
      company: "Innovation Labs",
      period: "2019 - 2021",
      description: [
        "Developed and maintained multiple client-facing applications",
        "Implemented real-time features using WebSocket",
        "Reduced application load time by 50% through optimization",
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"]
    }
  ];
  const skills = [
    { icon: "react", name: "React", color: "#61DAFB" },
    { icon: "node-js", name: "Node.js", color: "#68A063" },
    { icon: "js", name: "TypeScript", color: "#3178C6" },
    { icon: "database", name: "MongoDB", color: "#4DB33D" },
    { icon: "aws", name: "AWS", color: "#FF9900" },
    { icon: "docker", name: "docker", color: "#FF9900" },
    {icon:"html5", name:"html5" ,color:"red"}
  ];

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-white overflow-x-hidden">
     <Background />
      <Navbar />
      <SocialLinks />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.section 
        style={{ y, rotate, scale }}
        className="min-h-screen flex items-center justify-center py-20 px-4"
      >
        <div className="max-w-4xl w-full text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
         Abhishek Sharma
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-[#64ffda] mb-8"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#8892b0] text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            I build exceptional digital experiences that live at the intersection of design and technology.
          </motion.p>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-2xl mx-auto"
          >
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </motion.div>
        </div>
      </motion.section>
      </section>
  {/* About Section */}
  <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
  <motion.section
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "25%"]) }}
        className="min-h-screen flex items-center justify-center py-20 px-4"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl text-[#64ffda] text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-[#8892b0]">
              <p>
                Hello! I Am Abhishek, a passionate full-stack developer based in New York City. 
                I enjoy creating things that live on the internet, whether that be websites, 
                applications, or anything in between.
              </p>
              <p>
                My journey in web development started back in 2015 when I decided to try 
                customizing a Wordpress theme. Fast-forward to today, and I have had the 
                privilege of working at various companies, startups, and organizations.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and 
                digital experiences for a variety of clients.
              </p>
            </div>
            <div className="relative group mx-auto">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/300/300"
                  alt="Profile"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      </section>
      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-4">
      <motion.section
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "25%"]) }}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#64ffda] text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </motion.section>
</section>
      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
      <motion.section 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "25%"]) }}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#64ffda] text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution built with Next.js and Node.js"
              image="/api/placeholder/300/200"
            />
            <ProjectCard 
              title="Task Management App"
              description="Real-time task management application with team collaboration features"
              image="/api/placeholder/300/200"
            />
          </div>
        </div>
      </motion.section>
</section>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-xl w-full">
          <h2 className="text-4xl text-[#64ffda] text-center mb-12">Get In Touch</h2>
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg"
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg h-40"
            />
            <button 
              type="submit"
              className="w-full bg-[#64ffda] text-[#0a0a0a] py-4 rounded-lg font-medium hover:transform hover:-translate-y-1 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      </section>
    </div>
  );
}