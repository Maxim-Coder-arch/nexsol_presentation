"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./index.module.scss";

const FirstWebsiteSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundText}>
        NEXSOL 01
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.label}>
            FIRST COMMERCIAL PROJECT
          </span>

          <h2>
            Первая версия
            <br />
            корпоративного сайта
          </h2>

          <p>
            Первый полноценный коммерческий проект для компании
            NEXSOL. Сайт был разработан для презентации услуг,
            сбора заявок и формирования первого цифрового
            присутствия компании.
          </p>

          <div className={styles.tech}>
            <span>Next.js</span>
            <span>React</span>
            <span>MongoDB</span>
            <span>TypeScript</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.mockup}>
            <Image
              src="/images/old-nexsol-site.png"
              alt="Old NEXSOL"
              fill
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.stats}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <h3>19</h3>
          <span>COMPONENTS</span>
        </div>

        <div>
          <h3>3</h3>
          <span>PAGES</span>
        </div>

        <div>
          <h3>5</h3>
          <span>API</span>
        </div>

        <div>
          <h3>14</h3>
          <span>DAYS</span>
        </div>
      </motion.div>
    </section>
  );
};

export default FirstWebsiteSection;