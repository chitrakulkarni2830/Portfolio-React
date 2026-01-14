import { motion } from 'framer-motion';

const skills = {
    "Core Languages": ["Python", "SQL"],
    "Data Science": ["Pandas", "NumPy", "Scikit-Learn", "SciPy"],
    "Visualization": ["Tableau", "Matplotlib", "Seaborn", "Streamlit"],
    "Bioinformatics": ["Biopython", "Genomics", "Pymol"],
    "Databases": ["PostgreSQL", "SQLite", "MongoDB"],
    "Tools": ["Git", "Jupyter", "VS Code"]
};

const SkillMatrix = () => {
    return (
        <section className="py-20 px-8 md:px-24 max-w-4xl mx-auto">
            <div className="flex items-center mb-10">
                <span className="text-2xl font-bold text-slate-100 mr-4">
                    <span className="text-biolum-cyan font-mono text-xl mr-2">02.</span>
                    Technical Arsenal
                </span>
                <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass-panel p-5 rounded-lg"
                    >
                        <h3 className="text-lg font-bold text-slate-200 mb-4 border-b border-slate-700 pb-2">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <span key={skill} className="px-3 py-1 text-sm font-mono text-biolum-cyan border border-biolum-cyan/30 rounded-full hover:bg-biolum-cyan/10 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillMatrix;
