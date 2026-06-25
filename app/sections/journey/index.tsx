"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const stages = [
  {
    year: "01",
    title: "SoftByte Learn",
    description: "Первый крупный образовательный проект"
  },
  {
    year: "02",
    title: "NEXSOL Site",
    description: "Первый коммерческий сайт"
  },
  {
    year: "03",
    title: "CRM v1",
    description: "Погружение в backend и MongoDB"
  },
  {
    year: "04",
    title: "Refactoring",
    description: "Переосмысление архитектуры"
  },
  {
    year: "05",
    title: "CRM v2",
    description: "Масштабируемая платформа"
  }
];

const JourneySection = () => {
  return (
    <section className={styles.section} id="journey">
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />

      <h1 className={styles.backgroundTitle}>
        JOURNEY
      </h1>

      <div className={styles.header}>
        <span>01</span>

        <h2>
          Путь
          <br />
          развития
        </h2>

        <p>
          Каждый следующий проект становился
          новым этапом профессионального роста,
          позволяя осваивать более сложные
          архитектурные и технические решения.
        </p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.line} />

        {stages.map((stage, index) => (
          <motion.div
            key={stage.title}
            className={styles.card}
            animate={{
              y:
                index % 2 === 0
                  ? [0, -15, 0]
                  : [0, 15, 0]
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span>{stage.year}</span>

            <h3>{stage.title}</h3>

            <p>{stage.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;