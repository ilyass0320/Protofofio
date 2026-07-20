import { motion,type Variants } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      title: "Vehicle Services Platform and sell Acessories",
      image: "/projet1.png",
      description: "This is a web platform that brings together various motoring services within a single interface, designed to ensure a simple, fast and secure user experience. It enables users to buy or hire vehicles, purchase motoring accessories, and keep up to date with the latest industry news.",
      work:"undivided",
      technologies: ["React", "TypeScript", "Tailwind CSS","Spring Boot","MySQL", "GitHub","Spring Security","Spring Data JPA"],
      link: "https://github.com/ilyass0320/projet-fin-Etude"
    },
    {
      title: "To-Do List ",
      image: "/projet3.png",
      description: "A simple to-do-list",
      work:"undivided",
      technologies: ["HTML", "JavaScript", "Css"],
      link: "https://github.com/ilyass0320/To-Do-List"
    },
    {
      title: "Atria Fashion",
      image: "/projet2.png",
      description: "An online marketplace for selling clothing in various categories for men and women",
      work:"Team",
      technologies: ["HTML", "JavaScript", "Css","PHP",],
      link: "https://github.com/lamraniamal161/MINI-Projet"
    }
  ];
  const Experience =[{
    titre:"Organizer – CTF (Capture The Flag) 1st Edition",
    Faculte:"Faculty of Sciences, Tetouan",
    club:"iCodeClub",
    Taches:["Managed participant registration and check-in","Assisted the organizing team with event logistics and coordination","Contributed to the successful execution of the first CTF cybersecurity competition at the Faculty of Sciences in Tetouan."],
  }];
  const Certificats=[
    {
      titre:"Certificate Of Appreciation",
      image:"/CertificateOrganisateur.png"
    },
    {
      titre:"Certificate Of Participation",
      image:"/CertificateParticipation.png"
  }];
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
    <div className="mx-auto w-full max-w-1xl px-6 py-16 text-zinc-100 mb-3">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-16 text-3xl font-bold text-amber-400"
      >
        Projects
      </motion.h1>
      <h2 className="font-bold text-3xl text-shadow-amber-300 mb-2">Selected work</h2>
      <p className="font-light text-amber-50 mb-2">A few of the projects I've built while learning and experimenting.</p>
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
                <h3 className="text-lg font-bold text-amber-400">{project.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="rounded-md border border-amber-400/20 bg-amber-400/5 px-2 py-0.5 text-xs text-amber-200/80">
                      {tech}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, color:"white", backgroundColor:" oklch(82.9% 0.189 84.429)",boxShadow: "0 16px 50px -12px rgba(251, 191, 36, 0.35)" }}
                  className="mt-auto inline-flex items-center text-center gap-2 pt-3 text-sm font-medium text-amber-400  border w-32 p-3 rounded-2xl"
                >
                  View on GitHub
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
      <section>
        <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-16 text-3xl font-bold text-amber-400"
        >
        Experiences
        </motion.h1>
        {/* <h2 className="font-bold text-3xl text-shadow-amber-300 mb-2">Technolo</h2> */}
        {/* <p className="font-light text-amber-50 mb-2">A focused toolkit I'm using to build modern web applications.</p> */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {
            Experience.map((Exp,index)=>(
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
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-semibold font-bold text-amber-200 ">{Exp.Faculte} | {Exp.club}</h3>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {Exp.Taches.map((Tach) => (
                    <li key={Tach} className="list-[] px-2 py-0.5 text-sm text-amber-100/80 m-1 ml-4">
                      {Tach}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
            ))
          }
        </motion.div>
      </section>
      <section>
        <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-16 text-3xl font-bold text-amber-400"
        >
        Certifications
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {
            Certificats.map((cert,index)=>(
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
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-semibold font-bold text-amber-200 ">{cert.titre}</h3>
                <motion.img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.titre}
                  className="h-44 w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              </div>
            </motion.article>
            ))
          }
        </motion.div>
      </section>
    </div>
  )
}
