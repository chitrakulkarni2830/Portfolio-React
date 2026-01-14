import { motion } from 'framer-motion';
import portfolioImg from '../assets/portfolio-picture.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 px-8 md:px-24 max-w-4xl mx-auto">
            <div className="flex items-center mb-10">
                <span className="text-2xl font-bold text-slate-100 mr-4">
                    <span className="text-biolum-cyan font-mono text-xl mr-2">01.</span>
                    About Me
                </span>
                <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                <div className="col-span-2 text-slate-400 text-lg leading-relaxed space-y-4">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        My journey began in the wet lab, pipetting reagents and analyzing enzyme kinetics.
                        While completing my <span className="text-biolum-cyan">MSc in Biochemistry</span>, I realized that the future of biology wasn't just in the test tube—it was in the data.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        This pivot led me to dive deep into computational methods. I traded my lab coat for a code editor, mastering
                        <span className="text-biolum-cyan"> Python and SQL</span> to uncover patterns that manual analysis could never reveal.
                    </motion.p>
                    <p>
                        Today, I bridge the gap between biological complexity and analytical precision, building tools that make genomic and proteomic data accessible and actionable.
                    </p>
                </div>

                <div className="relative group w-full h-full min-h-[250px]">
                    <div className="absolute top-4 left-4 w-full h-full rounded-md border-2 border-biolum-cyan/50 z-0 transition-transform duration-300 group-hover:top-3 group-hover:left-3"></div>
                    <div className="relative z-10 w-full h-full rounded-md overflow-hidden bg-navy-light">
                        <img
                            src={portfolioImg}
                            alt="Profile"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
