"use client"

import { motion, type Variants } from "framer-motion"
import type { IconType } from "react-icons"
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin, FaLocationDot } from "react-icons/fa6"


type ContactItem = {
  icon: IconType
  titre: string
  message: string
  link?: string
}

const contactes: ContactItem[] = [
  {
    icon: MdEmail,
    titre: "Email",
    message: "ilyaachi03@gmail.com",
    link: "mailto:ilyaachi03@gmail.com",
  },
  {
    icon: FaGithub,
    titre: "GitHub",
    message: "Achibani Ilyass",
    link: "https://github.com/ilyass0320",
  },
  {
    icon: FaLinkedin,
    titre: "LinkedIn",
    message: "Achibani Ilyass",
    link: "https://www.linkedin.com/in/ilyass-achibani-4b6444193/",
  },
  {
    icon: FaLocationDot,
    titre: "Location",
    message: "Tangier, Morocco",
  },
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-6 py-16 text-zinc-100 mb-3"
    >
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="mb-3 text-3xl font-bold text-amber-400 md:text-4xl"
      >
        Contact
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="text-2xl font-bold text-amber-100"
      >
        {"Let's work together"}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="mt-2 max-w-xl leading-relaxed text-amber-50/80"
      >
        Got a project in mind, or just fancy a chat? My inbox is always open.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Contact details */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-1"
        >
          {contactes.map((contc) => {
            const content = (
              <motion.div
                variants={card}
                whileHover={{ y: -4 , borderColor:"oklch(82.8% 0.189 84.429)"}}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-full items-center gap-4 rounded-xl border border-amber-400/30 bg-zinc-900/60 px-4 py-6 transition-colors"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                  <contc.icon  aria-hidden="true" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-light text-amber-100/70">
                    {contc.titre}
                  </span>
                  <span className="font-bold text-amber-50">
                    {contc.message}
                  </span>
                </div>
              </motion.div>
            )

            return contc.link ? (
              <a
                key={contc.titre}
                href={contc.link}
                target={contc.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  contc.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={contc.titre}>{content}</div>
            )
          })}
        </motion.div>

        {/* Contact form */}
        <motion.form
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            y: -6,
            boxShadow: "0 10px 40px -10px rgba(251, 191, 36, 0.35)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2 rounded-xl border border-amber-400/30 bg-zinc-900/60 px-5 py-6 text-gray-300"
        >
          <label htmlFor="nameC" className="text-sm text-amber-100/80">
            Name
          </label>
          <input
            type="text"
            name="nameC"
            id="nameC"
            className="mb-2 rounded-xl border border-amber-400/60 bg-transparent p-2 text-amber-50 outline-none transition-colors placeholder:text-amber-100/30 focus:border-amber-400"
            placeholder="Your name"
          />

          <label htmlFor="emailC" className="text-sm text-amber-100/80">
            Email
          </label>
          <input
            type="email"
            name="emailC"
            id="emailC"
            className="mb-2 rounded-xl border border-amber-400/60 bg-transparent p-2 text-amber-50 outline-none transition-colors placeholder:text-amber-100/30 focus:border-amber-400"
            placeholder="email@gmail.com"
          />

          <label htmlFor="messageC" className="text-sm text-amber-100/80">
            Message
          </label>
          <textarea
            name="messageC"
            id="messageC"
            rows={4}
            className="mb-3 resize-none rounded-xl border border-amber-400/60 bg-transparent p-3 text-amber-50 outline-none transition-colors placeholder:text-amber-100/30 focus:border-amber-400"
            placeholder="Tell me about your project..."
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl bg-amber-400 p-2 text-center font-bold text-zinc-900 transition-colors hover:bg-amber-300"
          >
            Envoyer
          </motion.button>
        </motion.form>
      </div>
    </section>
  
  )
}

export default Contact
