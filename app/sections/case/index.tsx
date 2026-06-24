"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./index.module.scss";

const RealCaseSlide = () => {
  return (
    <section className={styles.section}>

      {/* background glow */}
      <motion.div
        className={styles.blurOne}
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0]
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
          x: [0, -90, 0],
          y: [0, 70, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* background title */}
      <div className={styles.backgroundTitle}>
        REAL CASE STUDY
      </div>

      {/* header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span>10. REAL CASE</span>
        <h2>Commercial Implementation</h2>
        <p>
          Интернет-магазин наградных розеток и CRM-система,
          разработанные как единая бизнес-экосистема.
        </p>
      </motion.div>

      {/* main comparison */}
      <div className={styles.comparison}>

        {/* LEFT - SITE */}
        <motion.div
          className={styles.panel}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className={styles.label}>WEB SITE</div>

          <div className={styles.imageBox}>
            <Image
              src="/images/real_case_site.png"
              alt="site"
              fill
            />
          </div>

          <p>Frontend / UX / Orders / Catalog</p>
        </motion.div>

        {/* CENTER - IMPACT */}
        <motion.div
          className={styles.center}
          initial={{ scale: 0.95 }}
          animate={{ scale: [0.95, 1, 0.95] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <h3>BUSINESS IMPACT</h3>

          <div className={styles.metrics}>
            <div>
              <span>Full</span>
              <p>Stack System</p>
            </div>

            <div>
              <span>Real</span>
              <p>Client Project</p>
            </div>

            <div>
              <span>Live</span>
              <p>Usage</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - CRM */}
        <motion.div
          className={styles.panel}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        >
          <div className={styles.label}>CRM SYSTEM</div>

          <div className={styles.imageBox}>
            <Image
              src="/images/real_case_crm.png"
              alt="crm"
              fill
            />
          </div>

          <p>Analytics / Leads / Admin / Control</p>
        </motion.div>

      </div>

    </section>
  );
};

export default RealCaseSlide;