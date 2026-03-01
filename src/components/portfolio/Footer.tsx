const Footer = () => {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-8 border-t border-border flex items-center justify-between">
      <p className="text-xs font-body text-muted-foreground">
        © {new Date().getFullYear()} Lakshita Malhotra
      </p>
      <p className="text-xs font-body text-muted-foreground">
        Built with care
      </p>
    </footer>
  );
};

export default Footer;
