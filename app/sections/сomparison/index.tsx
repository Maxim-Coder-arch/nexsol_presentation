"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.scss";

const improvements = [
  {
    before: "28",
    after: "5",
    title: "CRM Pages",
  },
  {
    before: "50+",
    after: "10",
    title: "API Routes",
  },
  {
    before: "SCSS",
    after: "CSS Modules",
    title: "Styling",
  },
  {
    before: "any",
    after: "Strict TS",
    title: "Typing",
  },
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className={styles.comparison}>
      <div className={styles.bgWord}>EVOLUTION</div>

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>REFACTORING RESULT</span>

        <h2>
          Было <span>→</span> Стало
        </h2>

        <p>
          Переход от первых рабочих решений к масштабируемой архитектуре,
          ориентированной на долгосрочное развитие проекта.
        </p>
      </motion.div>

      <div className={styles.projects}>
        <motion.div
          className={styles.side}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.sideTitle}>OLD GENERATION</div>

          <div className={styles.imageCard}>
            <Image
              src="/images/old_site.png"
              alt=""
              fill
            />
          </div>

          <div className={styles.imageCard}>
            <Image
              src="/images/new_site.png"
              alt=""
              fill
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.middle}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          →
        </motion.div>

        <motion.div
          className={styles.side}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.sideTitle}>NEW GENERATION</div>

          <div className={styles.imageCard}>
            <Image
              src="/images/old_crm.png"
              alt=""
              fill
            />
          </div>

          <div className={styles.imageCard}>
            <Image
              src="/images/new_crm.png"
              alt=""
              fill
            />
          </div>
        </motion.div>
      </div>

      <div className={styles.stats}>
        {improvements.map((item, index) => (
          <motion.div
            key={item.title}
            className={styles.stat}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.numbers}>
              <span>{item.before}</span>
              <span>→</span>
              <span>{item.after}</span>
            </div>

            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;