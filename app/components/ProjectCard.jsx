import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-xl overflow-hidden"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#8892b0] mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href="#" className="text-[#64ffda] hover:underline">
            <i className="fas fa-external-link-alt mr-2" />
            View Project
          </a>
          <a href="#" className="text-[#64ffda] hover:underline">
            <i className="fab fa-github mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}