import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="py-20 px-8 md:px-24 max-w-4xl mx-auto">
            <div className="flex items-center mb-16">
                <span className="text-3xl font-bold text-slate-100 mr-4">
                    <span className="text-biolum-cyan font-mono text-2xl mr-2">04.</span>
                    Academic Backing
                </span>
                <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
            </div>

            <div className="relative">
                {/* Gradient Line */}
                <div className="absolute left-[9px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-biolum-cyan via-purple-500 to-transparent"></div>

                <div className="space-y-12 pl-12 relative">
                    {/* MSc Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                    >
                        {/* Glowing Node */}
                        <span className="absolute -left-[49px] top-6 h-5 w-5 rounded-full border-2 border-biolum-cyan bg-slate-900 shadow-[0_0_15px_rgba(100,255,218,0.6)] z-10 group-hover:scale-125 transition-transform duration-300"></span>

                        {/* Card Content */}
                        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm group-hover:border-biolum-cyan/30 group-hover:bg-slate-900/60 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-biolum-cyan transition-colors">MSc Biochemistry</h3>
                            <p className="text-biolum-cyan font-mono text-sm mb-3">Ramnarain Ruia Autonomous College, Mumbai</p>
                            <p className="text-slate-300 leading-relaxed">
                                Specialized in <span className="text-slate-100 font-medium">Molecular Biology & Enzymology</span>.
                                Thesis focused on computational modeling of protein interactions, bridging the gap between wet-lab biochem and data science.
                            </p>
                        </div>
                    </motion.div>

                    {/* BSc Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative group"
                    >
                        {/* Glowing Node */}
                        <span className="absolute -left-[49px] top-6 h-5 w-5 rounded-full border-2 border-biolum-cyan bg-slate-900 shadow-[0_0_15px_rgba(100,255,218,0.6)] z-10 group-hover:scale-125 transition-transform duration-300"></span>

                        {/* Card Content */}
                        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm group-hover:border-biolum-cyan/30 group-hover:bg-slate-900/60 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-biolum-cyan transition-colors">BSc Biochemistry</h3>
                            <p className="text-biolum-cyan font-mono text-sm mb-3">Ramnarain Ruia Autonomous College, Mumbai</p>
                            <p className="text-slate-300 leading-relaxed">
                                Foundation in <span className="text-slate-100 font-medium">Analytical Chemistry</span> and Cell Biology.
                                Graduated with Distinction, developing a rigorous scientific methodology for data analysis.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
