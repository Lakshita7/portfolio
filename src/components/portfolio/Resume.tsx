import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Acme Corp",
    period: "2023 — Present",
    description: "Leading the design system team, building component libraries used across 8 product teams.",
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2021 — 2023",
    description: "Built and shipped the core product from 0 to 50k users. React, Node.js, PostgreSQL.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co",
    period: "2019 — 2021",
    description: "Delivered 20+ client projects spanning e-commerce, SaaS dashboards, and marketing sites.",
  },
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "University of Technology",
    year: "2019",
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
