"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./index.module.scss";

const cards = [
  {
    title: "Analytics",
    image: "/images/new-crm/nexsol_crm_v2_analytics.png",
    description: "Отслеживание посещаемости и активности пользователей",
    delay: 0
  },
  {
    title: "Leads",
    image: "/images/new-crm/nexsol_crm_v2_leads.png",
    description: "Управление заявками и клиентской базой",
    delay: 1
  },
  {
    title: "Reviews",
    image: "/images/new-crm/nexsol_crm_v2_reviews.png",
    description: "Модерация отзывов",
    delay: 2
  },
  {
    title: "Clients",
    image: "/images/new-crm/nexsol_crm_v2_clients.png",
    description: "Учет клиентов и стадий сотрудничества",
    delay: 3
  }
];

const CrmV2Version = () => {
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
          x: [0, -100, 0],
          y: [0, 100, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className={styles.backgroundDashboard}
        animate={{
          scale: [1, 1.04, 1],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
      </motion.div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.slide}>08</span>

          <h2>
            CRM
            <br />
            SYSTEM
          </h2>

          <p>
            Новая версия CRM-системы создается
            как масштабируемая платформа для
            управления клиентами, аналитикой,
            проектами и будущими AI-инструментами.
          </p>

          <div className={styles.metrics}>
            <div>
              <span>28 → 5</span>
              <p>Pages</p>
            </div>

            <div>
              <span>50+ → 10</span>
              <p>API Routes</p>
            </div>

            <div>
              <span>∞</span>
              <p>Scalability</p>
            </div>
          </div>
        </motion.div>

        <div className={styles.right}>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={styles.card}
              animate={{
                y:
                  index % 2 === 0
                    ? [0, -18, 0]
                    : [0, 18, 0]
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                />
              </div>

              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <h1 className={styles.backgroundTitle}>
        THE FUTURE OF NEXSOL
      </h1>
    </section>
  );
};

export default CrmV2Version;