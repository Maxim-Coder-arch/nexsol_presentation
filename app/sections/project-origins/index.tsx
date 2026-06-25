"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.scss";

const metrics = [
  {
    value: "14",
    label: "дней на разработку сайта"
  },
  {
    value: "29",
    label: "дней на разработку CRM"
  },
  {
    value: "2026",
    label: "начало коммерческой разработки"
  }
];

const ProjectOrigins = () => {
  return (
    <section className={styles.section} id="project-origins">
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />

      <h1 className={styles.backgroundTitle}>
        FIRST COMMERCIAL PROJECT
      </h1>

      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.slide}>
            02
          </span>

          <h2>
            Точка
            <br />
            перехода
          </h2>

          <p>
            После завершения разработки платформы
            SoftByte Learn начался переход к созданию
            реальных коммерческих решений.
          </p>

          <p>
            Корпоративный сайт и CRM-система для
            компании NEXSOL стали первым опытом
            разработки продуктов, предназначенных
            для решения бизнес-задач реальной
            компании.
          </p>

          <div className={styles.metrics}>
            {metrics.map(item => (
              <div key={item.value}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.roadmap}>
            <div className={styles.card}>
              <span>ЭТАП 01</span>
              <h3>SoftByte Learn</h3>
            </div>

            <div className={styles.connector} />

            <div className={styles.card}>
              <span>ЭТАП 02</span>
              <h3>Корпоративный сайт</h3>
            </div>

            <div className={styles.connector} />

            <div className={styles.card}>
              <span>ЭТАП 03</span>
              <h3>CRM-система</h3>
            </div>
          </div>

          <motion.div
            className={styles.logoCard}
            animate={{
              y: [0, -12, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/presentation/logo.png"
              alt="NEXSOL"
              width={220}
              height={220}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOrigins;