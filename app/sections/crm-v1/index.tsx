"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.scss";

import dashboard from "@/public/images/crm-dashboard.png";
import analytics from "@/public/images/crm-analytics.png";
import templates from "@/public/images/crm-templates.png";

const CrmV1Section = () => {
    return (
        <section className={styles.crmV1}>
            <div className={styles.crmV1__container}>
                <motion.div
                    className={styles.crmV1__header}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span>CRM V1</span>

                    <h2>
                        От сайта для клиентов
                        <br />
                        к полноценной платформе
                    </h2>

                    <p>
                        Первая внутренняя система компании.
                        Управление клиентами, аналитикой,
                        заявками и бизнес-процессами.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.crmV1__stats}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .3 }}
                >
                    <div>
                        <strong>28</strong>
                        <span>Страниц</span>
                    </div>

                    <div>
                        <strong>32</strong>
                        <span>Компонента</span>
                    </div>

                    <div>
                        <strong>50+</strong>
                        <span>API маршрутов</span>
                    </div>
                </motion.div>

                <div className={styles.crmV1__showcase}>

                    <motion.div
                        className={`${styles.card} ${styles.left}`}
                        initial={{ opacity: 0, x: -120, rotate: -6 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={analytics}
                            alt="analytics"
                            fill
                        />
                    </motion.div>

                    <motion.div
                        className={`${styles.card} ${styles.center}`}
                        initial={{ opacity: 0, y: 120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={dashboard}
                            alt="dashboard"
                            fill
                        />
                    </motion.div>

                    <motion.div
                        className={`${styles.card} ${styles.right}`}
                        initial={{ opacity: 0, x: 120, rotate: 6 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 4 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={templates}
                            alt="templates"
                            fill
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CrmV1Section;