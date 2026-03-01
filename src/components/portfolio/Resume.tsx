import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experience = [
  {
    role: "Software Development Engineer",
    company: "Microtec",
    period: "Apr 2025 — Aug 2025",
    description: "Enhanced C++ optimization engine used by 200+ customers, improving prediction algorithms to cut material waste by 20%. Maintained C++/C#/.NET frameworks with CMake, NuGet, and Jenkins CI/CD. Improved application stability by profiling and optimizing critical C++ routines, reducing stalls by 70%.",
  },
  {
    role: "Software Development Engineer Intern",
    company: "Amgen",
    period: "June 2024 — Sept 2024",
    description: "Implemented and integrated a chatbot that reduced on-call workload by 85%. Enhanced the UI for 3,000 internal users and developed a Python-based monitoring tool for UI health and backend system integrity.",
  },
  {
    role: "Cloud Engineer",
    company: "Amazon Web Services (AWS)",
    period: "Apr 2022 — Aug 2023",
    description: "Provided architecture guidance and troubleshooting for Big Data services in AWS. Supervised 300+ enterprise customers to develop secure, scalable, fault-tolerant infrastructure. Collaborated with Product and Engineering teams on new features for Big Data services.",
  },
  {
    role: "System Engineer",
    company: "Tata Consultancy Services (TCS)",
    period: "Jul 2021 — Apr 2022",
    description: "Delivered scalable eConsent and health logging solutions for 9 major Pharma clients (e.g. Pfizer-BioNTech, Novartis) using React and Spring MVC. Built and optimized REST and web APIs, improving performance by 20% and enhancing UX for clinical trial participants.",
  },
];

const education = [
  {
    degree: "Master of Computer Science (GPA: 3.96/4.0)",
    school: "Oregon State University, Corvallis, OR",
    year: "Sept 2023 — Dec 2025",
  },
  {
    degree: "Bachelor of Technology, Information Technology",
    school: "Maharaja Surajmal Institute of Technology, India",
    year: "Aug 2017 — June 2021",
  },
];

const Resume = () => {
  return (
    <section id="resume" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <p className="text-sm font-body text-primary tracking-widest uppercase mb-4">Resume</p>
          {/* TODO: add your resume PDF URL (e.g. Google Drive or hosted link) */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground border border-border rounded-full px-4 py-2 transition-colors duration-300"
          >
            <Download size={14} />
            Download PDF
          </a>
        </motion.div>

        <div className="md:col-span-8 space-y-16">
          {/* Experience */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-8"
            >
              Experience
            </motion.p>
            <div className="space-y-0">
              {experience.map((job, i) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t border-border py-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground">{job.role}</h3>
                      <p className="text-sm font-body text-primary">{job.company}</p>
                    </div>
                    <p className="text-sm font-body text-muted-foreground shrink-0">{job.period}</p>
                  </div>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-lg mt-2">
                    {job.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-8"
            >
              Education
            </motion.p>
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-border py-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-sm font-body text-primary">{edu.school}</p>
                  </div>
                  <p className="text-sm font-body text-muted-foreground">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
