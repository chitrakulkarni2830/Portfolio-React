import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Terminal = ({ title = "analysis.py", code }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const syntaxHighlight = (line) => {
        // Simple mock highlighting
        if (line.startsWith('#')) return <span className="text-slate-500 italic">{line}</span>;
        if (line.includes('import')) return <span><span className="text-purple-400">import</span> {line.replace('import', '')}</span>;
        if (line.includes('def ')) return <span><span className="text-purple-400">def</span> {line.replace('def ', '')}</span>;
        if (line.includes('return')) return <span><span className="text-purple-400">return</span> {line.replace('return', '')}</span>;
        return line;
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden bg-[#011627] shadow-2xl border border-slate-700/50 font-mono text-sm my-8"
        >
            <div className="flex items-center justify-between px-4 py-3 bg-[#011627] border-b border-slate-700/50">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-slate-400 text-xs">{title}</div>
                <div className="w-10" />
            </div>
            <div className="p-4 text-slate-300 overflow-x-auto">
                <pre>
                    <code>
                        {code.split('\n').map((line, i) => (
                            <div key={i} className="leading-6">
                                <span className="text-slate-600 mr-4 select-none w-6 inline-block text-right">{i + 1}</span>
                                {syntaxHighlight(line)}
                            </div>
                        ))}
                    </code>
                </pre>
            </div>
        </motion.div>
    );
};

export default Terminal;
