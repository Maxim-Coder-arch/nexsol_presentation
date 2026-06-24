"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const stats = [
  {
    value: "4",
    label: "Large Projects"
  },
  {
    value: "2",
    label: "Corporate Sites"
  },
  {
    value: "2",
    label: "CRM Systems"
  },
  {
    value: "∞",
    label: "Next Steps"
  }
];

const FinalSection = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.blurOne}
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className={styles.blurTwo}
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <h1 className={styles.backgroundTitle}>
        BUILDING THE FUTURE
      </h1>

      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span>12</span>

          <h2>
            RESULTS
            <br />
            & FUTURE
          </h2>

          <p>
            От первых полноценных веб-приложений
            к проектированию масштабируемых
            информационных систем.
          </p>
        </motion.div>

        <div className={styles.right}>
          {stats.map((item) => (
            <div
              key={item.label}
              className={styles.stat}
            >
              <span>{item.value}</span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className={styles.links}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <a
          href="https://nexsol.ru"
          target="_blank"
        >
          NEXSOL.RU
        </a>

        <a
          href="https://github.com/Maxim-Coder-arch"
          target="_blank"
        >
          GITHUB.COM/MAXIM-CODER-ARCH
        </a>
      </motion.div>
    </section>
  );
};

export default FinalSection;