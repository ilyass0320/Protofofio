import { motion, type Variants } from "framer-motion";

const About = () => {
  const aboutSkills = [
    "Problem Solving",
    "Building Projects",
    "Learning New Technologies",
    "Communication Skills",
  ];
  const technologies = [
    ["public/tailwindcss.png","TailwindCss","Utility-first CSS framework, Rapid UI development, Responsive design utilities"],
    ["public/react.png", "React", "Component-based architecture, Virtual DOM for high performance, Ideal for Single Page Applications (SPAs)"],
    ["public/springboot.png", "Spring boot", "Rapid application development, Auto-configuration, RESTful API development, Spring Security integration, Database integration with Spring Data JPA"],
    ["public/github.png", "GitHub", "Version control using Git, Remote code repository hosting, Team collaboration,Branching and merging, Issue and project management"],
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
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* About */}
        <div>
        <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-10 text-3xl font-bold text-amber-400"
      >
            About Me
          </motion.h1>
          <h2 className="font-extrabold text-xl mb-2 text-amber-100">Passionate about creating web applications and interfaces.</h2>
          <div className="space-y-5 text-gray-300 leading-8">
            <p>
              I have a Bachelor’s Degree in Computer Engineering and Software
              Development from the Faculty of Sciences in Tetouan. I'm
              passionate about web development and modern front-end
              technologies, with a strong foundation in creating innovative
              digital solutions.
            </p>

            <p>
              Throughout my academic journey, I've strengthened my expertise in
              HTML, CSS, Tailwind CSS, PHP, React, and React Router. I've
              successfully delivered projects that combine algorithmic logic
              with dynamic user interfaces, demonstrating both technical and
              creative problem-solving skills.
            </p>

            <p>
              As a self-motivated developer who enjoys learning new
              technologies, I'm seeking a front-end internship where I can
              contribute to innovative projects while continuing to grow
              professionally.
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-40">
            {aboutSkills.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.06 , boxShadow: "0px 4px 15px rgba(255, 193, 7, 0.5)",borderColor: "rgba(255, 193, 7, 0.5)",borderWidth: "2px", color: "rgba(255, 193, 7, 0.5)", fontWeight: "bold" }}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="rounded-xl border border-amber-400/30 bg-zinc-900/60 px-5 py-4 text-center text-gray-300 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/10 hover:scale-105"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-10 text-3xl font-bold text-amber-400"
      >
        Technologies
      </motion.h1>
      <h2 className="font-extrabold text-xl mb-4 text-amber-100">A focused toolkit I'm using to build modern web applications.</h2>
      <section>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {technologies.map(([img, name, description], index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -6,
                borderColor: "rgba(251, 191, 36, 0.6)",
                boxShadow: "0 10px 40px -10px rgba(251, 191, 36, 0.35)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-xl border border-amber-400/30 bg-zinc-900/60 px-5 py-6 text-center text-gray-300"
            >
              <motion.img
                src={img || "/placeholder.svg"}
                alt={name}
                className="mx-auto mb-4 h-12 w-12"
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
              />
              <h3 className="text-lg font-semibold text-amber-400">{name}</h3>
              <p className="text-sm text-gray-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
    </section>
  );
};

export default About;