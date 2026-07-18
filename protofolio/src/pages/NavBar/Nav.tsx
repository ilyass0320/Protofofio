import { motion } from "framer-motion";

const Nav = () => {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
return (
  <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-primary/40 bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.a
          href="/"
          className="text-2xl text-amber-300 font-extrabold tracking-tight text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Portfolio
        </motion.a>
        <ul className="flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.path}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            >
              <a
                href={`${link.path.slice(1).toLowerCase()}`}
                className="group relative text-base font-medium text-foreground/90 transition-colors hover:text-primary hovLink"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
)
}

export default Nav;
