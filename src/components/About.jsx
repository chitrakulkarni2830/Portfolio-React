import { motion } from 'framer-motion';

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

                <div className="relative group">
                    <div className="absolute inset-0 bg-biolum-cyan/20 rounded-md translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 border border-biolum-cyan"></div>
                    <div className="absolute inset-0 bg-navy-light rounded-md group-hover:bg-transparent transition-colors duration-300 z-10 mix-blend-multiply"></div>
                    {/* Placeholder for profile image if user adds one later, currently a stylized box */}
                    <div className="relative z-20 w-full h-full min-h-[250px] bg-[#112240] rounded-md flex items-center justify-center border border-slate-700 overflow-hidden">
                        <span className="text-6xl">🧬</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
