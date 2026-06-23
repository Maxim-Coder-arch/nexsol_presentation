"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const HeroSection = () => {
  return (
    <section id="hero-section" className={styles.hero}>
      <motion.div
        className={styles.hero__backgroundText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <span>SOLID NEXUS</span>
        <span>DIGITAL AGENCY</span>
      </motion.div>

      <div className={styles.hero__gradient} />

      <div className={styles.hero__content}>
        <motion.p
          className={styles.hero__label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PORTFOLIO PRESENTATION · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
        >
          Эволюция
          <br />
          разработки
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4
          }}
        >
          От первых коммерческих проектов
          <br />
          до масштабируемых CRM-систем
        </motion.h2>

        <motion.div
          className={styles.hero__footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1
          }}
        >
          <div>
            <span>Автор</span>
            <p>Максим</p>
          </div>

          <div>
            <span>Специализация</span>
            <p>Frontend Developer</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.hero__scroll}
        animate={{
          y: [0, 12, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        SCROLL
      </motion.div>
    </section>
  );
};

export default HeroSection;