import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm font-body text-primary tracking-widest uppercase mb-6"
        >
          Designer & Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight text-foreground"
        >
          John
          <br />
          Doe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-md text-base font-body text-muted-foreground leading-relaxed"
        >
          I craft thoughtful digital experiences that live at the intersection of design and engineering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex gap-6"
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-body font-medium text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-300"
          >
            View Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
