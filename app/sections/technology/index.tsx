"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const technologies = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "MONGODB",
  "SCSS",
  "CSS MODULES",
  "FRAMER MOTION",
  "RECHARTS",
  "ASP.NET CORE",
  "POSTGRESQL"
];

const TechnologyStack = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.blurOne}
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className={styles.blurTwo}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <h1 className={styles.backgroundTitle}>
        TECH STACK
      </h1>

      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.slide}>11</span>

          <h2>
            TECHNOLOGY
            <br />
            STACK
          </h2>

          <p>
            Современный стек технологий,
            используемый при разработке
            корпоративных сайтов,
            CRM-систем и коммерческих
            веб-приложений.
          </p>
        </motion.div>

        <div className={styles.right}>
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              className={styles.card}
              animate={{
                y:
                  index % 2 === 0
                    ? [0, -12, 0]
                    : [0, 12, 0]
              }}
              transition={{
                duration: 5 + index * .4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;