"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./index.module.scss";

const features = [
  {
    title: "Изоляция стилей",
    value: "CSS Modules"
  },
  {
    title: "Строгая типизация",
    value: "TypeScript"
  },
  {
    title: "Модульная структура",
    value: "Components"
  },
  {
    title: "Автоматизация заявок",
    value: "Business Logic"
  }
];

const NewCorporateSite = () => {
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
          x: [0, -120, 0],
          y: [0, 120, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <h1 className={styles.backgroundTitle}>
        CORPORATE WEBSITE
      </h1>

      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.slide}>
            07
          </span>

          <h2>
            НОВАЯ ВЕРСИЯ
            <br />
            САЙТА
          </h2>

          <p>
            Проект сохранил весь функционал
            первой версии, но получил новую
            архитектуру, независимые компоненты,
            строгую типизацию и расширенную
            систему формирования заявок.
          </p>

          <div className={styles.metric}>
            <span>100%</span>
            <p>Сохранённой функциональности</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.preview}
          initial={{
            opacity: 0,
            scale: .9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/new_site.png"
            alt=""
            fill
          />

          {features.map((item, index) => (
            <motion.div
              key={item.title}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
              animate={{
                y:
                  index % 2 === 0
                    ? [0, -15, 0]
                    : [0, 15, 0]
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span>
                {item.title}
              </span>

              <strong>
                {item.value}
              </strong>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewCorporateSite;