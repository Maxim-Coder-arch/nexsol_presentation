"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const technologies = [
  {
    title: "Next.js",
    desc: "Fullstack React Framework",
  },
  {
    title: "React",
    desc: "Component Architecture",
  },
  {
    title: "TypeScript",
    desc: "Strict Type Safety",
  },
  {
    title: "MongoDB",
    desc: "Application Database",
  },
  {
    title: "SCSS",
    desc: "Flexible Styling",
  },
  {
    title: "CSS Modules",
    desc: "Style Isolation",
  },
  {
    title: "Framer Motion",
    desc: "Advanced Animations",
  },
  {
    title: "Recharts",
    desc: "Analytics & Charts",
  },
  {
    title: "ASP.NET Core",
    desc: "Backend Development",
  },
  {
    title: "PostgreSQL",
    desc: "Relational Database",
  },
];

const TechnologyStack = () => {
  return (
    <section className={styles.techStack} id="tecnology-stack">

      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className={styles.backgroundText}>
        TECH STACK
      </div>

      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className={styles.label}>
            11. TECHNOLOGIES
          </span>

          <h2>
            Технологии и инструменты разработки
          </h2>

          <p>
            Современный стек технологий, используемый при создании
            корпоративных сайтов, CRM-систем и коммерческих
            веб-приложений.
          </p>
        </motion.div>

        <motion.div
          className={styles.cards}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
        >
          {technologies.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05
              }}
            >
              <div className={styles.cardIndex}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <strong>10+</strong>
            <span>Технологий</span>
          </div>

          <div>
            <strong>Fullstack</strong>
            <span>Подход</span>
          </div>

          <div>
            <strong>Modern</strong>
            <span>Architecture</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechnologyStack;