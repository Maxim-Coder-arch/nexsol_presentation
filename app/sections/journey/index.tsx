"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const stages = [
    "SoftByte Learn",
    "Первый сайт NEXSOL",
    "Первая CRM",
    "Рефакторинг",
    "Новая архитектура"
];

const JourneySection = () => {
    return (
        <section
            id="journey-section"
            className={styles.rootJourney}
        >
            <motion.div
                className={styles.backgroundNumber}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.08 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            >
                01
            </motion.div>

            <div className={styles.content}>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                >
                    От первых проектов <br />
                    к профессиональной разработке
                </motion.h2>

                <div className={styles.timeline}>
                    {stages.map((item, index) => (
                        <motion.div
                            key={item}
                            className={styles.timelineItem}
                            initial={{
                                opacity: 0,
                                x: -40
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .6,
                                delay: index * .15
                            }}
                        >
                            <div className={styles.dot} />

                            <span>{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;