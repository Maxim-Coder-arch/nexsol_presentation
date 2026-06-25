"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const resources = [
    {
        type: "CRM SYSTEM V1",
        title: "Nexsol CRM",
        url: "nexsol-crm.vercel.app",
        description: "Первая версия CRM-системы"
    },
    {
        type: "CORPORATE WEBSITE",
        title: "Nexsol Website",
        url: "nexsol.ru",
        description: "Корпоративный сайт компании"
    },
    {
        type: "CORPORATE WEBSITE V2",
        title: "Nexsol 2.0",
        url: "nexsol-version-2.vercel.app",
        description: "Новая архитектура и бизнес-логика"
    },
    {
        type: "COMMERCIAL CASE",
        title: "Rossets Store",
        url: "test-rossets.vercel.app",
        description: "Интернет-магазин наградных розеток"
    },
    {
        type: "SOURCE CODE",
        title: "GitHub",
        url: "github.com/Maxim-Coder-arch",
        description: "Исходный код проектов"
    }
];

const FinalSection = () => {
    return (
        <section className={styles.finalSection}>

            <div className={styles.glowLeft} />
            <div className={styles.glowRight} />

            <div className={styles.backgroundText}>
                PROJECT ECOSYSTEM
            </div>

            <div className={styles.container}>

                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span>
                        12 · RESULTS
                    </span>

                    <h2>
                        Итоги проекта
                    </h2>

                    <p>
                        За время работы были разработаны корпоративные сайты,
                        CRM-системы и коммерческие решения. Ниже представлены
                        основные проекты и материалы для демонстрации результатов.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <strong>4</strong>
                        <span>Крупных проекта</span>
                    </div>

                    <div>
                        <strong>2</strong>
                        <span>Корпоративных сайта</span>
                    </div>

                    <div>
                        <strong>2</strong>
                        <span>CRM системы</span>
                    </div>

                    <div>
                        <strong>∞</strong>
                        <span>Потенциал развития</span>
                    </div>
                </motion.div>

                <div className={styles.resources}>
                    {resources.map((item, index) => (
                        <motion.div
                            key={item.url}
                            className={styles.resourceCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className={styles.type}>
                                {item.type}
                            </span>

                            <h3>
                                {item.title}
                            </h3>

                            <div className={styles.url}>
                                {item.url}
                            </div>

                            <p>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default FinalSection;