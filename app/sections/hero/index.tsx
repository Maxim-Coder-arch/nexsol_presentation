"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className={styles.hero}
    >
      <motion.div
        className={styles.hero__backgroundText}
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>PORTFOLIO</span>
        <span>PRESENTATION</span>
      </motion.div>

      <div className={styles.hero__gradient} />
      <div className={styles.hero__gradientSecondary} />

      <div className={styles.hero__number}>
        00
      </div>

      <div className={styles.hero__content}>
        <motion.p
          className={styles.hero__label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          ПОРТФОЛИО РАЗРАБОТЧИКА · 2026
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(20px)"
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}
          transition={{
            duration: 1.2
          }}
        >
          От идеи
          <br />
          до архитектуры
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: .4
          }}
        >
          Путь от первых коммерческих
          веб-проектов до создания
          масштабируемых CRM-систем
          и бизнес-приложений
        </motion.h2>

        <motion.div
          className={styles.hero__stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1
          }}
        >
          <div>
            <span>4</span>
            <p>Крупных проекта</p>
          </div>

          <div>
            <span>2</span>
            <p>CRM-системы</p>
          </div>

          <div>
            <span>2026</span>
            <p>Год развития</p>
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
        ↓
      </motion.div>
    </section>
  );
};

export default HeroSection;