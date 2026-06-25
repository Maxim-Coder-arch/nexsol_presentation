"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./index.module.scss";

const improvements = [
  {
    title: "Архитектура",
    before: "Монолитная структура",
    after: "Модульная система"
  },
  {
    title: "Типизация",
    before: "Использование any",
    after: "Strict TypeScript"
  },
  {
    title: "Стили",
    before: "Глобальный SCSS",
    after: "CSS Modules"
  },
  {
    title: "Масштабирование",
    before: "Ограниченное",
    after: "Готово к развитию"
  }
];

const ComparisonSection = () => {
  return (
    <section className={styles.section} id="comparision">

      <div className={styles.glow} />

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>РЕЗУЛЬТАТ РЕФАКТОРИНГА</span>

        <h2>
          Эволюция проектов
        </h2>

        <p>
          Переход от первых рабочих решений к архитектуре,
          рассчитанной на долгосрочное развитие и масштабирование.
        </p>
      </motion.div>

      <div className={styles.timeline}>

        <motion.div
          className={styles.version}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.versionLabel}>
            ПЕРВЫЕ ВЕРСИИ
          </div>

          <div className={styles.image}>
            <Image
              src="/images/old_site.png"
              alt=""
              fill
            />
          </div>

          <div className={styles.image}>
            <Image
              src="/images/old_crm.png"
              alt=""
              fill
            />
          </div>
        </motion.div>

        <div className={styles.centerLine}>
          <div className={styles.line} />

          <motion.div
            className={styles.arrow}
            animate={{
              y: [0, 15, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            ↓
          </motion.div>
        </div>

        <motion.div
          className={styles.version}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.versionLabel}>
            НОВОЕ ПОКОЛЕНИЕ
          </div>

          <div className={styles.image}>
            <Image
              src="/images/new_site.png"
              alt=""
              fill
            />
          </div>

          <div className={styles.image}>
            <Image
              src="/images/new_crm.png"
              alt=""
              fill
            />
          </div>
        </motion.div>

      </div>

      <div className={styles.improvements}>
        {improvements.map((item, index) => (
          <motion.div
            key={item.title}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * .15
            }}
          >
            <span>{item.title}</span>

            <div className={styles.compare}>
              <p>{item.before}</p>

              <div className={styles.separator} />

              <b>{item.after}</b>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ComparisonSection;