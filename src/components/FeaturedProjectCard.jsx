import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const FeaturedProjectCard = ({ title, techs, description, extendedDescription, links, image, index, isExpanded, onToggle, color = "#64ffda" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="col-span-1 group relative rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col min-h-[550px]"
            style={{
                '--accent-color': color
            }}
        >
            {/* Stronger Background Glow Effect */}
            <div
                className="absolute -inset-0.5 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: color }}
            ></div>

            <div className="flex flex-col h-full relative z-10 bg-slate-950/90 rounded-2xl border border-transparent group-hover:border-[color:var(--accent-color)] transition-colors duration-300">
                {/* Image Section */}
                <div className="h-52 md:h-72 overflow-hidden relative rounded-t-2xl flex-shrink-0">
                    <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover:text-[color:var(--accent-color)] transition-colors">
                            {title}
                        </h3>
                        <div className="flex space-x-3">
                            {links.github && (
                                <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <Github size={24} />
                                </a>
                            )}
                            {links.demo && (
                                <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <ExternalLink size={24} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="mb-6 text-slate-300 text-sm md:text-lg leading-relaxed">
                        {description}

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 text-slate-400 text-sm md:text-base border-t border-slate-800 mt-4">
                                        {extendedDescription}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={onToggle}
                            className="flex items-center gap-1 mt-2 text-sm font-medium transition-colors hover:underline decoration-[color:var(--accent-color)] underline-offset-4"
                            style={{ color: color }}
                        >
                            {isExpanded ? (
                                <>Show Less <ChevronUp size={16} /></>
                            ) : (
                                <>Read More <ChevronDown size={16} /></>
                            )}
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {techs.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs font-bold font-mono px-3 py-1.5 rounded-full border border-opacity-20"
                                style={{
                                    color: color,
                                    borderColor: color,
                                    backgroundColor: `${color}10`
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeaturedProjectCard;
