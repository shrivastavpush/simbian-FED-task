"use client";

import { useState, useEffect } from "react";
import AlertCard from "../components/AlertCard";
import ContentCard from "../components/ContentCard";
import { AlertItemData, getRandomAlert } from "../data/alertItemData";
import { WithoutSimbianAlertCards } from "../data/alertCardData";
import { contentDataWithoutSimbian } from "../data/contentData";
import { motion, AnimatePresence } from "framer-motion";

export default function WithoutSimbian() {
    const [ignoredCount, setIgnoredCount] = useState(200);
    const [wronglyClosedCount, setWronglyClosedCount] = useState(35);
    const [activeThreatsCount, setActiveThreatsCount] = useState(5);

    const [ignoredAlerts, setIgnoredAlerts] = useState<AlertItemData[]>([]);
    const [wronglyClosedAlerts, setWronglyClosedAlerts] = useState<AlertItemData[]>([]);
    const [activeThreats, setActiveThreats] = useState<AlertItemData[]>([]);

    // Adding new alerts periodically
    useEffect(() => {
        const ignoredInterval = setInterval(() => {
            const newAlert = getRandomAlert();
            setIgnoredAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
            setIgnoredCount(prev => prev + 1);
        }, 5000);

        const wronglyClosedInterval = setInterval(() => {
            const newAlert = getRandomAlert();
            setWronglyClosedAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
            setWronglyClosedCount(prev => prev + 1);
        }, 3000);

        const threatsInterval = setInterval(() => {
            const newAlert = getRandomAlert();
            setActiveThreats(prev => [newAlert, ...prev.slice(0, 4)]);
            setActiveThreatsCount(prev => prev + 1);
        }, 4000);

        // setting initial alerts
        setIgnoredAlerts([getRandomAlert(), getRandomAlert(), getRandomAlert()]);
        setWronglyClosedAlerts([getRandomAlert(), getRandomAlert(), getRandomAlert()]);
        setActiveThreats([getRandomAlert(), getRandomAlert(), getRandomAlert()]);

        return () => {
            clearInterval(ignoredInterval);
            clearInterval(wronglyClosedInterval);
            clearInterval(threatsInterval);
        };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                key="without-simbian-section"
            >
                <motion.h2
                    className="text-3xl font-bold text-center mb-8 text-red-500"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5, ease: "easeInOut" }}
                >
                    Without Simbian
                </motion.h2>

                <div className="flex md:flex-row flex-col px-0 md:px-10 items-baseline justify-around gap-6 md:gap-0">
                    {/* sample content messages */}
                    <motion.div
                        className="flex flex-col items-center justify-evenly gap-4 mr-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.12 }
                            }
                        }}
                    >
                        {contentDataWithoutSimbian.map((data, idx) => {
                            const Icon = data.icon;
                            return (
                                <motion.div
                                    key={data.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.12, ease: "easeOut" }}
                                >
                                    <ContentCard
                                        title={data.title}
                                        className={data.className}
                                        icon={<Icon size={24} className="text-red-600" />}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* alert boxes */}
                    <motion.div
                        className="flex flex-col items-center gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.13 }
                            }
                        }}
                    >
                        {WithoutSimbianAlertCards.map((data, idx) => {
                            let count = 0;
                            let alerts: AlertItemData[] = [];

                            switch (data.type) {
                                case "ignored":
                                    count = ignoredCount;
                                    alerts = ignoredAlerts;
                                    break;
                                case "wronglyClosed":
                                    count = wronglyClosedCount;
                                    alerts = wronglyClosedAlerts;
                                    break;
                                case "active":
                                    count = activeThreatsCount;
                                    alerts = activeThreats;
                                    break;
                            }

                            return (
                                <motion.div
                                    key={data.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.55, delay: 0.35 + idx * 0.13, ease: "easeOut" }}
                                >
                                    <AlertCard
                                        title={data.title}
                                        countStart={data.countStart}
                                        countEnd={count}
                                        icon={<data.icon size={24} className="text-red-600" />}
                                        color={data.color}
                                        alerts={alerts}
                                        withSimbian={data.withSimbian}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
