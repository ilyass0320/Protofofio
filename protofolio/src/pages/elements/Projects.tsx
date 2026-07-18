import { motion,type Variants } from "framer-motion";
import {Link} from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Vehicle Services Platform and sell Acessories",
      image: "public/project1.png",
      description: "This is a web platform that brings together various motoring services within a single interface, designed to ensure a simple, fast and secure user experience. It enables users to buy or hire vehicles, purchase motoring accessories, and keep up to date with the latest industry news.",
      work:"undivided",
      technologies: ["React", "TypeScript", "Tailwind CSS","Spring Boot","MySQL", "GitHub","Spring Security","Spring Data JPA"],
      link: ["public/GitHub","https://github.com/ilyass0320/projet-fin-Etude"]
    },
    {
      title: "To-Do List ",
      image: "public/project2.png",
      description: "A simple to-do-list",
      work:"undivided",
      technologies: ["HTML", "JavaScript", "Css"],
      link: ["public/GitHub","https://github.com/ilyass0320/To-Do-List"]
    },
    {
      title: "Market web site",
      image: "public/project2.png",
      description: "An online marketplace for selling clothing in various categories for men and women",
      work:"Team",
      technologies: ["HTML", "JavaScript", "Css","PHP",],
      link: ["public/GitHub","https://github.com/lamraniamal161/MINI-Projet"]
    }
  ];
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
  return (
     <div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-16 text-3xl font-bold text-amber-400"
      >
        Projects
      </motion.h1>

      <section>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                borderColor: "rgba(251, 191, 36, 0.6)",
                boxShadow: "0 16px 50px -12px rgba(251, 191, 36, 0.35)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-amber-400/30 bg-zinc-900/60 text-gray-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-44 w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
                <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/40">
                  {project.work}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold text-amber-400">{project.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>

                <ul className="mt-1 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-amber-400/20 bg-amber-400/5 px-2 py-0.5 text-xs text-amber-200/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-amber-400 hover:text-amber-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  View on GitHub
                </motion.a> */}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
