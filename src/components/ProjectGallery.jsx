import { useState } from 'react';
import ProjectCard from './ProjectCard';
import FeaturedProjectCard from './FeaturedProjectCard';

const featuredProjects = [
    {
        title: "Clinical Trials Biomarker Tracker",
        description: "Robust ETL pipeline extracting global clinical trial data (PD-L1, HER2, BRCA1). Features automated cleaning, SQL upserts, and prepares data for Tableau dashboards.",
        extendedDescription: (
            <>
                <p className="mb-2">
                    This project was born from the need to centralize disparate clinical trial data for precision oncology. I engineered a Python-based ETL pipeline that interfaces with the <strong>ClinicalTrials.gov API v2</strong> to fetch live study records.
                </p>
                <p className="mb-2">
                    <strong>Key Technical Challenges Solved:</strong>
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                    <li><strong>Data Normalization:</strong> Handled complex nested JSON structures to standardize biomarker fields across thousands of trials.</li>
                    <li><strong>Automated Scheduling:</strong> Implemented cron jobs to run the pipeline weekly, ensuring the SQL database is always in sync with global registries.</li>
                    <li><strong>Deduplication:</strong> Designed a robust upsert logic in SQLite to prevent duplicate records while preserving historical data changes.</li>
                </ul>
                <p>
                    The final output feeds into a Tableau dashboard used for identifying recruitment trends in Phase 2/3 cancer trials.
                </p>
            </>
        ),
        techs: ["Python", "SQL", "Tableau", "Pandas", "Matplotlib"],
        links: { github: "https://github.com/chitrakulkarni2830/TrialTrace-Global" },
        image: "/projects/clinical_trials.png",
        color: "#64ffda" // Teal
    },
    {
        title: "Virtual Screening Data Pipeline",
        description: "Computational drug discovery pipeline extracting chemical data from PubChem. Uses RDKit for molecular descriptors and simulates docking scores to compare Natural vs. Synthetic inhibitors.",
        extendedDescription: (
            <>
                <p className="mb-2">
                    A computational chemistry workflow designed to accelerate early-stage drug discovery. By automating the retrieval of chemical properties from <strong>PubChem</strong>, this pipeline eliminates manual data entry errors and speeds up candidate screening.
                </p>
                <p className="mb-2">
                    <strong>Technical Implementation:</strong>
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                    <li><strong>Cheminformatics:</strong> Utilized <strong>RDKit</strong> to calculate critical molecular descriptors like <em>LogP</em> (lipophilicity) and Molecular Weight, which are essential for assessing drug-likeness (Lipinski's Rule of 5).</li>
                    <li><strong>Simulated Docking:</strong> Developed a comparative scoring model to evaluate binding affinities, highlighting the distinct pharmacological profiles of natural substrates versus synthetic inhibitors.</li>
                    <li><strong>Visualization:</strong> Integrated Matplotlib to generate distribution plots that visualize the binding energy landscape of over 500 compounds.</li>
                </ul>
            </>
        ),
        techs: ["Python", "RDKit", "SQLite", "PubChem API", "Pandas", "Tableau"],
        links: { github: "https://github.com/chitrakulkarni2830/docking-data-pipeline" },
        image: "/projects/virtual_screening.png",
        color: "#d946ef" // Fuchsia/Pink
    },
    {
        title: "Protein Stability Predictor",
        description: "A machine learning model using Random Forest to analyze mutation impacts on protein stability (ΔΔG). Features feature engineering on PDB structures.",
        extendedDescription: (
            <>
                <p className="mb-2">
                    Predicting how mutations affect protein stability is crucial for understanding genetic diseases. I built a machine learning model to predict the change in Gibbs free energy (ΔΔG) upon mutation.
                </p>
                <p className="mb-2">
                    <strong>Methodology:</strong>
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                    <li><strong>Feature Engineering:</strong> Extracted structural features from PDB files, including solvent accessibility, secondary structure, and residue physicochemical properties.</li>
                    <li><strong>Model Selection:</strong> Trained and tuned a <strong>Random Forest Regressor</strong> using Scikit-Learn, achieving a high correlation coefficient on the validation set.</li>
                    <li><strong>Impact:</strong> This tool assists researchers in prioritizing potentially pathogenic mutations for experimental validation, saving significant time and resources in the wet lab.</li>
                </ul>
            </>
        ),
        techs: ["Python", "Scikit-Learn", "Pandas", "Random Forest", "Tableau"],
        links: { github: "https://github.com/chitrakulkarni2830/ProtStable-Analytics" },
        image: "/projects/protein_stability.png",
        color: "#f97316" // Orange
    }
];

const otherProjects = [
    {
        title: "BioStream Pro v5.1",
        description: "End-to-end genomic data processing pipeline handling FASTQ/BAM files. Integrates SQL for metadata management and storage optimization.",
        techs: ["Python", "SQL", "Bash", "Genomics", "Tableau"],
        links: { github: "https://github.com/chitrakulkarni2830/Biochem-ETL-Visualization" }
    },
    {
        title: "ACE Inhibition Kinetics",
        description: "Non-linear regression modeling of enzyme kinetics data. Uses SciPy to determine Km and Vmax values for potential hypertension drugs.",
        techs: ["Python", "SciPy", "Matplotlib", "Biochemistry", "Tableau"],
        links: { github: "https://github.com/chitrakulkarni2830/ACE-Inhibition-Kinetics" }
    },
    {
        title: "Genomix Pro",
        description: "Lightweight generic sequence analysis tool backed by SQLite. Performs translation, transcription, and motif finding with Biopython.",
        techs: ["Python", "SQLite", "Biopython", "SQLAlchemy", "Tableau"],
        links: { github: "https://github.com/chitrakulkarni2830/GenomeX" }
    },
    {
        title: "BioFetcher Pro",
        description: "Automated ETL tool fetching data from NCBI/UniProt APIs. Features a Tkinter GUI for easy query construction and data export.",
        techs: ["Python", "Tkinter", "REST APIs", "ETL", "Tableau"],
        links: { github: "https://github.com/chitrakulkarni2830/Sequence-Fetcher" }
    },
    {
        title: "DNA GC Content Analyzer",
        description: "Interactive web dashboard for visualizing GC content distribution across chromosome interactions. Built with Streamlit for rapid insights.",
        techs: ["Python", "Streamlit", "Plotly", "Pandas", "Tableau"],
        links: { github: "https://github.com/chitrakulkarni2830/GC-Content-Calculator" }
    }
];

const ProjectGallery = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <>
            <section id="projects" className="py-20 px-8 md:px-24 max-w-7xl mx-auto">
                {/* Featured Projects Section */}
                <div className="flex items-center mb-12">
                    <span className="text-3xl font-bold text-slate-100 mr-4">
                        <span className="text-biolum-cyan font-mono text-2xl mr-2">03.</span>
                        Featured Research
                    </span>
                    <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProjectCard
                            key={index}
                            {...project}
                            index={index}
                            isExpanded={expandedIndex === index}
                            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </section>

            <section className="py-20 px-8 md:px-24 bg-slate-900/30 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto">
                    {/* The Innovation Incubator Section */}
                    <div className="flex items-center mb-10">
                        <span className="text-2xl font-bold text-slate-200 mr-4">
                            The Innovation Incubator
                        </span>
                        <div className="h-[1px] bg-slate-700 flex-grow max-w-[100px]"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <ProjectCard key={index + featuredProjects.length} {...project} index={index + featuredProjects.length} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectGallery;
