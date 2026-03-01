import { motion } from "framer-motion";

const navItems = ["About", "Work", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md"
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-lg font-semibold tracking-tight text-foreground">
        JD<span className="text-primary">.</span>
      </button>
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollTo(item)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
