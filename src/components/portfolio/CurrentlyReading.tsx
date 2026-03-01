import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const currentlyReading = {
  title: "The Design of Everyday Things",
  author: "Don Norman",
  progress: 42,
};

const CurrentlyReading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center gap-2.5 py-2 px-3 rounded-lg border border-border bg-card/40 hover:border-primary/20 transition-colors duration-300 max-w-[280px]"
    >
      <div className="flex-shrink-0 w-8 h-10 rounded bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
        <BookOpen className="w-3.5 h-3.5 text-primary/60" strokeWidth={1.5} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-body text-primary tracking-widest uppercase">
          Reading
        </p>
        <p className="text-sm font-display font-medium text-foreground truncate leading-tight">
          {currentlyReading.title}
        </p>
        <p className="text-[11px] font-body text-muted-foreground truncate">
          {currentlyReading.author} · {currentlyReading.progress}%
        </p>
      </div>
    </motion.div>
  );
};

export default CurrentlyReading;
