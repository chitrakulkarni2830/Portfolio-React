import { motion } from 'framer-motion';
import DNAAnimation from './DNAAnimation';


const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Molecular Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#64ffda 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating Blobs (simulating organic shapes) */}
            <motion.div
                animate={{
                    y: [0, -50, 0],
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-biolum-cyan/10 blur-[100px]"
            />

            <motion.div
                animate={{
                    y: [0, 100, 0],
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", delay: 5 }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]"
            />

            {/* DNA Helix Representation (Abstract) */}

            {/* DNA Helix Representation (Abstract) */}
            <DNAAnimation />
        </div>
    );
};

export default Background;
