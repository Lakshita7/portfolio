import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm font-body text-primary tracking-widest uppercase mb-8"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight"
        >
          Let's work
          <br />
          together<span className="text-primary">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base font-body text-muted-foreground leading-relaxed"
        >
          Have a project in mind or just want to chat? I'm always open to new opportunities and interesting conversations! :)
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="mailto:lakshitamalhotrawork@gmail.com"
          className="inline-block mt-10 text-lg font-display font-medium text-foreground border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300"
        >
          lakshitamalhotrawork@gmail.com
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex gap-6"
        >
          {[
            { label: "GitHub", href: "https://github.com/Lakshita7" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/lakshitamalhotra/" },
            { label: "Substack", href: "https://substack.com/@lakshitamalhotra" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
