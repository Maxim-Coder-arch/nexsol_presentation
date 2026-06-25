"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./index.module.scss";

const stats = [
  {
    value: "19",
    title: "Компонентов"
  },
  {
    value: "3",
    title: "Страницы"
  },
  {
    value: "5",
    title: "API маршрутов"
  },
  {
    value: "14",
    title: "Дней разработки"
  }
];

const features = [
  "Формы заявок",
  "Отзывы",
  "Аналитика",
  "MongoDB"
];

const FirstWebsiteSection = () => {
  return (
    <section className={styles.section} id="first-website">
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />

      <h1 className={styles.backgroundTitle}>
        NEXSOL V1
      </h1>

      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.slide}>
            03
          </span>

          <h2>
            Первая версия
            <br />
            сайта
          </h2>

          <p>
            Первый полноценный коммерческий проект,
            созданный для компании NEXSOL.
          </p>

          <p>
            Помимо презентации услуг сайт включал
            формы заявок, систему отзывов,
            аналитику посещаемости, работу с
            MongoDB и административные механизмы
            обработки данных.
          </p>

          <div className={styles.stack}>
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>MongoDB</span>
            <span>SCSS</span>
            <span>Framer Motion</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.preview}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/old-nexsol-site.png"
            alt=""
            fill
          />

          <div className={styles.featureGrid}>
            {features.map(item => (
              <div key={item} className={styles.feature}>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className={styles.stats}>
        {stats.map(item => (
          <div key={item.title}>
            <span>{item.value}</span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FirstWebsiteSection;