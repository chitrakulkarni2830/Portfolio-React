import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-8 text-center max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-biolum-cyan font-mono mb-4">05. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Initialize Connection</h2>
                <p className="text-slate-400 text-lg mb-10">
                    Whether you have a question about my research, a data project, or just want to discuss the latest in bioinformatics, my inbox is always open.
                </p>

                <a
                    href="mailto:kulkarnichitra2002@gmail.com"
                    className="inline-block px-10 py-4 text-sm font-mono text-biolum-cyan border border-biolum-cyan rounded hover:bg-biolum-cyan/10 transition-colors duration-300 mb-20"
                >
                    Send Signal
                </a>

                <div className="flex justify-center space-x-8 text-slate-400">
                    <a href="https://github.com/chitrakulkarni2830" target="_blank" rel="noopener noreferrer" className="hover:text-biolum-cyan hover:-translate-y-1 transition-all">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/chitra-kulkarni-21642123a/" target="_blank" rel="noopener noreferrer" className="hover:text-biolum-cyan hover:-translate-y-1 transition-all">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:kulkarnichitra2002@gmail.com" className="hover:text-biolum-cyan hover:-translate-y-1 transition-all">
                        <Mail size={24} />
                    </a>
                </div>

                <footer className="mt-20 text-xs font-mono text-slate-500">
                    Designed & Built with React + Tailwind
                </footer>
            </motion.div>
        </section>
    );
};

export default Contact;
