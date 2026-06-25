"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./index.module.scss";

const RealCaseSlide = () => {
  return (
    <section className={styles.section} id="case">

      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>10 · РЕАЛЬНЫЙ КОММЕРЧЕСКИЙ КЕЙС</span>

        <h2>
          Интернет-магазин
          <br />
          и CRM-система
        </h2>

        <p>
          Комплексное решение для управления заказами,
          товарами, аналитикой и взаимодействием с клиентами.
        </p>
      </motion.div>

      <div className={styles.showcase}>

        <motion.div
          className={styles.website}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.label}>
            КЛИЕНТСКАЯ ЧАСТЬ
          </div>

          <div className={styles.image}>
            <Image
              src="/images/real_case_site.png"
              alt=""
              fill
            />
          </div>

          <div className={styles.info}>
            Каталог товаров • Поиск • Фильтрация • Заказы
          </div>
        </motion.div>

        <motion.div
          className={styles.center}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.circle}>
            REAL
            <br />
            BUSINESS
          </div>
        </motion.div>

        <motion.div
          className={styles.crm}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.label}>
            CRM СИСТЕМА
          </div>

          <div className={styles.imageLarge}>
            <Image
              src="/images/real_case_crm.png"
              alt=""
              fill
            />
          </div>

          <div className={styles.info}>
            Аналитика • Товары • Отзывы • Заявки • Клиенты
          </div>
        </motion.div>

      </div>

      <div className={styles.bottomStats}>

        <div>
          <strong>1</strong>
          <span>Экосистема</span>
        </div>

        <div>
          <strong>2</strong>
          <span>Связанных приложения</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Реальный бизнес</span>
        </div>

      </div>

    </section>
  );
};

export default RealCaseSlide;