import { motion, useScroll, useTransform } from 'framer-motion';
export default function ExperienceCard({ role, company, period, description, technologies }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] hover:border-[#64ffda] transition-colors"
    >
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <p className="text-[#64ffda]">{company}</p>
        </div>
        <span className="text-[#8892b0]">{period}</span>
      </div>
      <ul className="text-[#8892b0] space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#64ffda] mr-2">▹</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-[#64ffda]/10 text-[#64ffda]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}