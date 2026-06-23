"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.scss";

const ProjectOrigins = () => {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlow}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          ИСХОДНАЯ ТОЧКА
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Создание первых
          <br />
          корпоративных систем
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          После завершения платформы SoftByte Learn началась
          разработка корпоративного сайта и CRM-системы для компании
          NEXSOL. Именно эти проекты стали переходом от учебных задач
          к созданию реальных информационных систем для бизнеса.
        </motion.p>

        <div className={styles.bottomBlock}>
          <motion.div
            className={styles.logoCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="/presentation/logo.png"
              alt="NEXSOL"
              width={260}
              height={260}
            />
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.stat}>
              <span>14</span>
              <p>дней на разработку сайта</p>
            </div>

            <div className={styles.stat}>
              <span>29</span>
              <p>дней на разработку CRM</p>
            </div>

            <div className={styles.stat}>
              <span>2026</span>
              <p>начало коммерческой разработки</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.quote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Первый опыт создания систем, которые решают реальные
          бизнес-задачи.
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectOrigins;