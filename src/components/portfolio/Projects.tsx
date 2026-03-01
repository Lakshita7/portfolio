import { motion } from "framer-motion";

const projects = [
  {
    title: "ConnectIT",
    category: "Web Application (JavaScript, Node.js)",
    description: "Real-time collaboration web application with video/audio calls via WebRTC, real-time chat, and an interactive whiteboard powered by Socket.io and Express.js.",
    year: "—",
  },
  {
    title: "HR Portal",
    category: "Frontend (Angular, Angular Material)",
    description: "Secure and efficient employee data management frontend with JWT-based authentication and APIs, reducing data retrieval time by 40%.",
    year: "—",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-8 md:px-16 lg:px-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-sm font-body text-primary tracking-widest uppercase mb-16"
      >
        Selected Work
      </motion.p>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group border-t border-border py-10 md:py-14 grid md:grid-cols-12 gap-4 md:gap-8 cursor-pointer"
          >
            <div className="md:col-span-1 text-sm font-body text-muted-foreground">
              {project.year}
            </div>
            <div className="md:col-span-4">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground mt-1">{project.category}</p>
            </div>
            <div className="md:col-span-7">
              <p className="text-base font-body text-muted-foreground leading-relaxed max-w-md">
                {project.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
