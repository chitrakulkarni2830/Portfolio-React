import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 max-w-6xl mx-auto pt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="font-mono text-biolum-cyan text-lg mb-4 block">
                    Hello, world. I represent the intersection of
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 leading-tight">
                    Biochemistry & <br />
                    <span className="text-slate-400">Data Analytics.</span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl text-slate-400 text-lg mb-8 leading-relaxed"
            >
                <p>
                    My name is Chitra Kulkarni and I am a MSc Biochemistry Graduate from Ramnarain Ruia Autonomous College turned Data Analyst.
                    I decode complex biological data into actionable insights using Python, SQL, and Tableau.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <a
                    href="#projects"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-mono text-biolum-cyan border border-biolum-cyan rounded hover:bg-biolum-cyan/10 transition-colors duration-300"
                >
                    View Lab Results
                    <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
