import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Protein Stability Predictor",
        description: "A machine learning model using Random Forest to analyze mutation impacts on protein stability (ΔΔG). Features feature engineering on PDB structures.",
        techs: ["Python", "Scikit-Learn", "Pandas", "Random Forest"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "BioStream Pro v5.1",
        description: "End-to-end genomic data processing pipeline handling FASTQ/BAM files. Integrates SQL for metadata management and storage optimization.",
        techs: ["Python", "SQL", "Bash", "Genomics"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "ACE Inhibition Kinetics",
        description: "Non-linear regression modeling of enzyme kinetics data. Uses SciPy to determine Km and Vmax values for potential hypertension drugs.",
        techs: ["Python", "SciPy", "Matplotlib", "Biochemistry"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Genomix Pro",
        description: "Lightweight generic sequence analysis tool backed by SQLite. Performs translation, transcription, and motif finding with Biopython.",
        techs: ["Python", "SQLite", "Biopython", "SQLAlchemy"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "BioFetcher Pro",
        description: "Automated ETL tool fetching data from NCBI/UniProt APIs. Features a Tkinter GUI for easy query construction and data export.",
        techs: ["Python", "Tkinter", "REST APIs", "ETL"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "DNA GC Content Analyzer",
        description: "Interactive web dashboard for visualizing GC content distribution across chromosome interactions. Built with Streamlit for rapid insights.",
        techs: ["Python", "Streamlit", "Plotly", "Pandas"],
        links: { github: "#", demo: "#" }
    }
];

const ProjectGallery = () => {
    return (
        <section id="projects" className="py-20 px-8 md:px-24 max-w-6xl mx-auto">
            <div className="flex items-center mb-10">
                <span className="text-2xl font-bold text-slate-100 mr-4">
                    <span className="text-biolum-cyan font-mono text-xl mr-2">03.</span>
                    Lab Results (Projects)
                </span>
                <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGallery;
