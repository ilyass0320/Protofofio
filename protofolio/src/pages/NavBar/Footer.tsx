import { motion, type Variants } from "framer-motion"
import type { IconType } from "react-icons"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin , FaArrowUp} from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

type SocialLink = {
  icon: IconType
  label: string
  link: string
}

const socials: SocialLink[] = [
  {
    icon: FaGithub,
    label: "GitHub",
    link: "https://github.com/ilyass0320",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ilyass-achibani-4b6444193/",
  },
  {
    icon: MdEmail,
    label: "Email",
    link: "mailto:ilyaachi03@gmail.com",
  },
]

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
}

const Footer = () => {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-amber-400/20 bg-zinc-950 text-zinc-100">
      {/* Subtle top glow accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-400/60 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto w-full max-w-5xl px-6 py-14"
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <motion.div variants={item} className="max-w-sm">
            <span className="text-2xl font-bold text-amber-400">
              Achibani Ilyass
            </span>
            <p className="mt-3 leading-relaxed text-amber-50/70">
              Full-stack developer crafting clean, thoughtful digital
              experiences. Always open to new ideas and collaborations.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav variants={item} aria-label="Footer navigation">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-amber-100/70">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((nav) => (
                <li key={nav.label}>
                  <motion.a
                    href={nav.href}
                    whileHover={{ color:"oklch(82.8% 0.189 84.429) " }}
                    className="text-amber-50/80 transition-colors "
                  >
                    {nav.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Socials */}
          <motion.div variants={item}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-amber-100/70">
              Follow
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => {
                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target={social.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    whileHover={{ y: -4 ,borderColor:"oklch(82.8% 0.189 84.429)",backgroundColor:"oklch(82.8% 0.189 84.429)",color:"black"}}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-400/30 bg-zinc-900/60 text-amber-400 transition-colors "
                  >
                    <social.icon  aria-hidden="true" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-row items-center justify-between gap-4 border-t border-amber-400/10 pt-6 "
        >
          <div></div>
          <p className="text-sm   text-amber-50/60">
            &copy; {year} Achibani Ilyass. All rights reserved.
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -3 , borderColor:"oklch(82.8% 0.189 84.429)",backgroundColor:"oklch(82.8% 0.189 84.429)", color:"black"}}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="flex items-end  gap-2 rounded-full border border-amber-400/30 bg-zinc-900/60 px-4 py-2 text-sm font-semibold text-amber-400 transition-colors"
          >
            Back to top
            <FaArrowUp  aria-hidden="true" />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
