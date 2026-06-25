'use client';

import Link from "next/link";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const data = [
    {
        sectionLabel: "Презентация",
        sectionId: "hero-section"
    },
    {
        sectionLabel: "Слайд 1",
        sectionId: "journey"
    },
    {
        sectionLabel: "Слайд 2",
        sectionId: "project-origins"
    },
    {
        sectionLabel: "Слайд 3",
        sectionId: "first-website"
    },
    {
        sectionLabel: "Слайд 4",
        sectionId: "crm-v1"
    },
    {
        sectionLabel: "Слайд 5",
        sectionId: "problems"
    },
    {
        sectionLabel: "Слайд 6",
        sectionId: "architecture"
    },
    {
        sectionLabel: "Слайд 7",
        sectionId: "new-website"
    },
    {
        sectionLabel: "Слайд 8",
        sectionId: "crm-v2"
    },
    {
        sectionLabel: "Слайд 9",
        sectionId: "comparision"
    },
    {
        sectionLabel: "Слайд 10",
        sectionId: "case"
    },
    {
        sectionLabel: "Слайд 11",
        sectionId: "tecnology-stack"
    },
    {
        sectionLabel: "Слайд 12",
        sectionId: "final"
    },
];

const Navigation = () => {
    const [activeHash, setActiveHash] = useState<string>("");
    const pathname = usePathname();

    useEffect(() => {
        // Функция обновления hash
        const updateHash = () => {
            const hash = window.location.hash.replace("#", "");
            setActiveHash(hash);
        };

        // Обновляем при монтировании
        updateHash();

        // Слушаем изменения hash
        window.addEventListener("hashchange", updateHash);
        
        // Дополнительно: слушаем клики по ссылкам с якорями
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            
            if (link && link.getAttribute('href')?.startsWith('#')) {
                // Даём браузеру время обновить hash
                setTimeout(updateHash, 50);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener("hashchange", updateHash);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    // Дополнительно: следим за изменениями в URL через MutationObserver
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const hash = window.location.hash.replace("#", "");
            if (hash !== activeHash) {
                setActiveHash(hash);
            }
        });

        observer.observe(document.querySelector('head')!, {
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, [activeHash]);

    return (
        <nav className={styles.navigation}>
            <ul>
                {data.map((item, index) => {
                    const isActive = activeHash === item.sectionId;

                    return (
                        <li 
                            key={index} 
                            className={isActive ? styles.active : ""}
                        >
                            <Link href={`#${item.sectionId}`}>
                                {item.sectionLabel}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;