import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Terminal from './components/Terminal';
import SkillMatrix from './components/SkillMatrix';
import ProjectGallery from './components/ProjectGallery';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
    const codeSnippet = `def bridge_disciplines(biochem_knowledge, data_skills):
    """
    Synthesizing biological insight with 
    computational power.
    """
    import pandas as pd
    import scipy.stats as stats
    
    # The Wet Lab Foundation
    hypothesis = biochem_knowledge.observe()
    
    # The Data Analytics Layer
    data = pd.read_sql("SELECT * FROM experiments")
    insights = stats.linregress(data.concentration, data.absorbance)
    
    if insights.r_value > 0.95:
        return "Significant Discovery"
    return "Refine Model"`;

    return (
        <div className="relative min-h-screen selection:bg-biolum-cyan selection:text-midnight-navy">
            <Background />

            <main className="relative z-10 flex flex-col gap-10">
                <Hero />

                <About />

                <div className="max-w-2xl mx-auto w-full px-8">
                    <Terminal title="transition_to_data.py" code={codeSnippet} />
                </div>

                <SkillMatrix />

                <ProjectGallery />

                <Education />

                <Contact />
            </main>

            {/* Navigation / Social Sidebars could go here, keeping it simple for now */}
            <div className="fixed bottom-0 left-10 hidden md:block w-10">
                <div className="flex flex-col items-center gap-6 text-slate-400">
                    <div className="w-[1px] h-20 bg-slate-400"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
