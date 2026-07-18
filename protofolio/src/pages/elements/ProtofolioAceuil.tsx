import {motion, type Variants} from "framer-motion"
import { Typewriter } from "../NavBar/typeWriter";

const ProtofolioAceuil = () => {
  const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

  return (
    <div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <motion.section variants={container} initial="hidden" animate="show" className="flex flex-col">
          <motion.h1 variants={item} className="mb-3 text-lg font-medium text-primary text-amber-200">Hello, my name is</motion.h1>
          <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">ACHIBANI Ilyass</motion.h1>
          <motion.h1 variants={item} className="mt-3 min-h-10 text-2xl font-bold text-foreground md:min-h-14 md:text-4xl bg-linear-to-r from-amber-200 via-yellow-400 to-orange-800 bg-clip-text text-transparent">
            <Typewriter words={["Full Stack Developer","Frontend Modern", "Problem Solver"]} />
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{" I'm a Full-Stack Web Developer with a Bachelor's degree in Computer Engineering and Software Development from the Faculty of Sciences of Tetouan. I enjoy building modern, responsive, and user-friendly web applications that combine clean design with efficient functionality. My expertise includes HTML, CSS, Tailwind CSS, React, React Router and Spring Boot. Through academic and personal projects, I've developed scalable web applications, strengthened my problem-solving skills, and gained experience in creating intuitive user experiences."}</motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <motion.a
            href="projects"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px oklch(0.8 0.16 82 / 0.6)", color:"white",backgroundColor:"transparent", fontWeight:"bold" }}
            whileTap={{ scale: 0.96 }}
            className="rounded-lg bg-amber-400 px-8 py-3 font-extrabold text-primary-foreground"
          >
            Projects
          </motion.a>
          <motion.a
            href="contact"
            whileHover={{ scale: 1.05, backgroundColor: "oklch(0.8 0.16 82)", color:"white" , fontWeight:"bold" }}
            whileTap={{ scale: 0.96 }}
            className="rounded-lg border-2 border-amber-300 px-8 py-3 font-semibold text-amber-300 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>
        </motion.section>

        <motion.section
        initial={{ opacity: 0, scale: 0.85, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center md:justify-end"
      >
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative"
        >
          {/* glow */}
          <div className="absolute -inset-3 rounded-3xl bg-primary/30 blur-2xl" />
          <motion.div className="relative overflow-hidden rounded-3xl border-4 border-amber-100 bg-primary shadow-2xl" 
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px oklch(0.8 0.16 82 / 0.6)" }}
          whileTap={{ scale: 0.96 }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary/20" />
            <img
              src="./image-protof-AIlya.png"
              alt="Portrait-of-ACHIBANI-Ilyass"
              width={420}
              height={520}
              className="h-115 w-90 object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </motion.section>
        
      </div>
    </div>
  )
}

export default ProtofolioAceuil
