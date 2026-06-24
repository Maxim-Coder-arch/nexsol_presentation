"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const NewCorporateSite = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.backgroundTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        NEXSOL 2.0
      </motion.h2>

      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className={styles.slideNumber}>07</span>

          <h3 className={styles.title}>
            Новый сайт
          </h3>

          <p className={styles.description}>
            Полное переосмысление архитектуры проекта.
            Улучшенная типизация, CSS Modules,
            масштабируемая структура компонентов
            и новая бизнес-логика формирования заявок.
          </p>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.preview}>
            <div className={styles.previewPlaceholder}>
              WEBSITE
              <span>Main Screen</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.features}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.card}>
          <span>01</span>
          <h4>CSS Modules</h4>
          <p>Полная изоляция стилей компонентов</p>
        </div>

        <div className={styles.card}>
          <span>02</span>
          <h4>TypeScript</h4>
          <p>Строгая типизация и контроль данных</p>
        </div>

        <div className={styles.card}>
          <span>03</span>
          <h4>Architecture</h4>
          <p>Модульная и масштабируемая структура</p>
        </div>

        <div className={styles.card}>
          <span>04</span>
          <h4>Business Logic</h4>
          <p>Автоматическая генерация заявок</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.stats}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <h5>100%</h5>
          <p>Сохранённой функциональности</p>
        </div>

        <div>
          <h5>+</h5>
          <p>Новые возможности</p>
        </div>

        <div>
          <h5>0</h5>
          <p>Конфликтов стилей</p>
        </div>
      </motion.div>
    </section>
  );
};

export default NewCorporateSite;