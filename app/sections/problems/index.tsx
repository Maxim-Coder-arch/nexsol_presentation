"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const ProblemsSection = () => {
    return (
        <section className={styles.section} id="problems">

            <div className={styles.glow} />

            <div className={styles.container}>

                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >

                    <span className={styles.label}>
                        SYSTEM ANALYSIS
                    </span>

                    <h2 className={styles.title}>
                        Ограничения первой архитектуры
                    </h2>

                    <p className={styles.text}>
                        Первая версия системы показала ограничения масштабирования и слабую изоляцию модулей.
                    </p>

                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >

                    <div className={styles.block}>
                        <div className={styles.dot} />
                        <span>Architecture</span>
                        <b>Overloaded</b>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.dot} />
                        <span>Components</span>
                        <b>Coupled</b>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.dot} />
                        <span>Types</span>
                        <b>Unsafe</b>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.dot} />
                        <span>Styles</span>
                        <b>Global scope</b>
                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default ProblemsSection;