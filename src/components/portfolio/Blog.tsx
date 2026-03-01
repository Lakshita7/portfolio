import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const posts = [
  {
    title: "Building Design Systems That Scale",
    excerpt: "How I approach creating design tokens, component APIs, and documentation that grows with your product.",
    date: "Feb 2025",
    url: "#",
  },
  {
    title: "The Art of Minimal Interfaces",
    excerpt: "Why removing features can be the most impactful design decision you make.",
    date: "Jan 2025",
    url: "#",
  },
  {
    title: "From Side Project to Production",
    excerpt: "Lessons learned shipping a weekend project that grew to 10k users in its first month.",
    date: "Dec 2024",
    url: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-32 px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-16"
      >
        <p className="text-sm font-body text-primary tracking-widest uppercase">Blog</p>
        <a
          href="https://substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
        >
          View all on Substack <ExternalLink size={12} />
        </a>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group block p-6 rounded-lg border border-border hover:border-primary/30 bg-card transition-all duration-300"
          >
            <p className="text-xs font-body text-muted-foreground mb-3">{post.date}</p>
            <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
              {post.title}
            </h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 mt-4 text-xs font-body text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Read on Substack <ExternalLink size={10} />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
