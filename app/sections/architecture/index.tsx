"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const layers = [
  {
    title: "Пользовательский интерфейс",
    description: "Независимые UI-компоненты"
  },
  {
    title: "Бизнес-логика",
    description: "Изоляция логики от интерфейса"
  },
  {
    title: "API Layer",
    description: "Работа с серверными маршрутами"
  },
  {
    title: "MongoDB",
    description: "Хранение данных системы"
  },
  {
    title: "ASP.NET Core",
    description: "Подготовка к выделенному backend"
  }
];

const ArchitectureSection = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.blurOne}
        animate={{
          x: [0, 120, 0],
          y: [0, -100, 0]
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
        ARCHITECTURE
      </h1>

      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{
            opacity: 0,
            x: -80
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{ once: true }}
        >
          <span className={styles.slide}>
            06
          </span>

          <h2>
            НОВАЯ
            <br />
            АРХИТЕКТУРА
          </h2>

          <p>
            После анализа первых версий проектов
            было принято решение полностью
            пересмотреть архитектуру и создать
            фундамент для дальнейшего развития
            CRM-системы и корпоративного сайта.
          </p>

          <div className={styles.metrics}>
            <div>
              <span>SCSS</span>
              <p>→ CSS Modules</p>
            </div>

            <div>
              <span>any</span>
              <p>→ Strict TS</p>
            </div>

            <div>
              <span>Monolith</span>
              <p>→ Layered</p>
            </div>
          </div>
        </motion.div>

        <div className={styles.right}>
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              className={styles.card}
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>

              {index !== layers.length - 1 && (
                <div className={styles.line} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;