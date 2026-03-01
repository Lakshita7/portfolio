import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md"
    >
      <NavLink
        to="/"
        className="font-display text-lg font-semibold tracking-tight text-foreground"
      >
        LM<span className="text-primary">.</span>
      </NavLink>
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-8">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-sm font-body transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
