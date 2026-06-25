"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./index.module.scss";

const modules = [
  {
    title: "Аналитика",
    image: "/images/new-crm/nexsol_crm_v2_analytics.png"
  },
  {
    title: "Заявки",
    image: "/images/new-crm/nexsol_crm_v2_leads.png"
  },
  {
    title: "Отзывы",
    image: "/images/new-crm/nexsol_crm_v2_reviews.png"
  },
  {
    title: "Клиенты",
    image: "/images/new-crm/nexsol_crm_v2_clients.png"
  }
];

const CrmV2Version = () => {
  return (
    <section className={styles.section} id="crm-v2">

      <div className={styles.blurOne}/>
      <div className={styles.blurTwo}/>

      <h1 className={styles.backgroundTitle}>
        CRM PLATFORM
      </h1>

      <div className={styles.container}>

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.slide}>
            СЛАЙД 08
          </span>

          <h2>
            Новая
            <br />
            CRM-система
          </h2>

          <p>
            Полностью переработанная платформа,
            ориентированная на масштабируемость,
            расширяемость и долгосрочное развитие.
            Новая архитектура позволяет внедрять
            роли пользователей, управление проектами,
            работу с файлами и AI-инструменты
            без переработки существующей системы.
          </p>

          <div className={styles.metrics}>

            <div>
              <strong>28 → 5</strong>
              <span>страниц</span>
            </div>

            <div>
              <strong>50+ → 10</strong>
              <span>API маршрутов</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>потенциал роста</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >

          <div className={styles.mainDashboard}>

            <Image
              src="/images/new-crm/nexsol_crm_v2_analytics.png"
              alt="CRM"
              fill
            />

          </div>

          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              className={`${styles.module} ${styles[`module${index}`]}`}
              animate={{
                y: index % 2 === 0
                  ? [0, -10, 0]
                  : [0, 10, 0]
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src={module.image}
                alt={module.title}
                fill
              />

              <div className={styles.moduleOverlay}>
                {module.title}
              </div>
            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default CrmV2Version;