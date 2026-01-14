import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="py-20 px-8 md:px-24 max-w-3xl mx-auto">
            <div className="flex items-center mb-10">
                <span className="text-2xl font-bold text-slate-100 mr-4">
                    <span className="text-biolum-cyan font-mono text-xl mr-2">04.</span>
                    Academic Backing
                </span>
                <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
            </div>

            <div className="space-y-12 border-l-2 border-slate-700 ml-3 pl-8 py-2 relative">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-biolum-cyan bg-midnight-navy"></span>
                    <h3 className="text-xl font-bold text-slate-100">MSc Biochemistry</h3>
                    <p className="text-biolum-cyan font-mono text-sm mb-2">Ramnarain Ruia Autonomous College, Mumbai</p>
                    <p className="text-slate-400">Specialized in Molecular Biology & Enzymology. Thesis focused on computational modeling of protein interactions.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-slate-500 bg-midnight-navy"></span>
                    <h3 className="text-xl font-bold text-slate-100">BSc Biochemistry</h3>
                    <p className="text-biolum-cyan font-mono text-sm mb-2">Ramnarain Ruia Autonomous College, Mumbai</p>
                    <p className="text-slate-400">Foundation in Analytical Chemistry and Cell Biology. Graduated with Distinction.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
