import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <p className="text-sm font-body text-primary tracking-widest uppercase">About</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-8 space-y-6"
        >
          <p className="text-2xl md:text-3xl font-display font-medium leading-snug text-foreground">
            I'm a full-stack developer with a passion for clean code, beautiful interfaces, and meaningful user experiences.
          </p>
          <p className="text-base font-body text-muted-foreground leading-relaxed max-w-lg">
            With over 5 years of experience building for the web, I specialize in React, TypeScript, and modern design systems. I believe the best products are born from the overlap of empathy, craft, and technical excellence.
          </p>
          <div className="pt-6 flex flex-wrap gap-3">
            {["React", "TypeScript", "Node.js", "Figma", "Tailwind CSS", "PostgreSQL"].map((skill) => (
              <span
                key={skill}
                className="text-xs font-body text-muted-foreground border border-border rounded-full px-4 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
