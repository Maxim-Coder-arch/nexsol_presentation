"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const ArchitectureSection = () => {
    return (
        <section className={styles.section} id="architecture">

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
                        ARCHITECTURE SHIFT
                    </span>

                    <h2 className={styles.title}>
                        Мы структурировали систему
                    </h2>

                    <p className={styles.text}>
                        После анализа CRM V1 было принято решение полностью пересмотреть архитектуру,
                        разделив логику, UI и инфраструктуру на независимые слои.
                    </p>

                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >

                    <div className={styles.card}>
                        <span>CRM V1</span>
                        <b>Monolith UI + Logic</b>
                        <p>Смешанная структура компонентов</p>
                    </div>

                    <div className={styles.arrow}>
                        →
                    </div>

                    <div className={styles.card}>
                        <span>CRM V2</span>
                        <b>Layered Architecture</b>
                        <p>UI / Logic / API separation</p>
                    </div>

                </motion.div>

                <motion.div
                    className={styles.backend}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <div className={styles.backendCard}>
                        <span>Backend Evolution</span>

                        <b>Next.js API → ASP.NET Core</b>

                        <p>
                            Готовность к вынесению сложной бизнес-логики в отдельный backend,
                            единый для CRM и сайта.
                        </p>
                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default ArchitectureSection;