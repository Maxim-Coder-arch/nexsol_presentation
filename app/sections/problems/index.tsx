"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const problems = [
  {
    number: "01",
    title: "Перегруженная CRM",
    text: "Система постепенно превратилась в универсальный инструмент, решающий слишком большое количество задач одновременно."
  },
  {
    number: "02",
    title: "Масштабируемость",
    text: "Некоторые архитектурные решения начали ограничивать дальнейшее развитие проекта."
  },
  {
    number: "03",
    title: "Типизация",
    text: "В отдельных местах использовался тип any, что снижало надежность кодовой базы."
  },
  {
    number: "04",
    title: "Структура компонентов",
    text: "Не существовало единого подхода к организации модулей и повторному использованию логики."
  },
  {
    number: "05",
    title: "SCSS",
    text: "Использовались только глобальные стили без изоляции компонентов."
  },
  {
    number: "06",
    title: "Необходимость рефакторинга",
    text: "Для дальнейшего роста потребовалась полная переработка архитектуры обеих систем."
  }
];

const ProblemsSection = () => {
  return (
    <section className={styles.section} id="problems">

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
          x: [0, -100, 0],
          y: [0, 80, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <h1 className={styles.backgroundTitle}>
        ARCHITECTURE AUDIT
      </h1>

      <div className={styles.content}>

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.slide}>
            05
          </span>

          <h2>
            Анализ
            <br />
            первых версий
          </h2>

          <p>
            После завершения разработки был проведён
            аудит архитектуры, структуры проекта и
            перспектив дальнейшего развития систем.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {problems.map((item, index) => (
            <motion.div
              key={item.number}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 80
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08
              }}
              animate={{
                y:
                  index % 2 === 0
                    ? [0, -10, 0]
                    : [0, 10, 0]
              }}
            >
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default ProblemsSection;