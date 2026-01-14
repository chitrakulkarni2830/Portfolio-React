import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, techs, description, links, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 group"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="text-4xl group-hover:text-biolum-cyan transition-colors duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                </div>
                <div className="flex space-x-3">
                    {links.github && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-biolum-cyan transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {links.demo && (
                        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-biolum-cyan transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-biolum-cyan transition-colors">{title}</h3>

            <div className="mb-4 text-slate-400 text-sm leading-relaxed">
                {description}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {techs.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-biolum-cyan/80 bg-biolum-cyan/10 px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
