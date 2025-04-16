import AlertCard from "../components/AlertCard";
import StepFlow from "../components/StepFlow";
import ContentCard from "../components/ContentCard";
import { contentDataWithSimbian } from "../data/contentData";
import { WithSimbianAlertCards } from "../data/alertCardData";
import { motion, AnimatePresence } from "framer-motion";

export default function WithSimbian() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                key="with-simbian-section"
            >
                <motion.h2
                    className="text-3xl font-bold text-center mb-8 text-green-500"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5, ease: "easeInOut" }}
                >
                    With Simbian
                </motion.h2>

                {/* added steps Flow Component */}
                <StepFlow />

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
                        {contentDataWithSimbian.map((data, idx) => (
                            <motion.div
                                key={data.title}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + idx * 0.12, ease: "easeOut" }}
                            >
                                <ContentCard
                                    title={data.title}
                                    className={data.className}
                                    icon={<data.icon size={24} className="text-green-600" />}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Cards with zero counts */}
                    <motion.div
                        className="flex flex-col items-center justify-evenly gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.13 }
                            }
                        }}
                    >
                        {WithSimbianAlertCards.map((data, idx) => (
                            <motion.div
                                key={data.title}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.55, delay: 0.35 + idx * 0.13, ease: "easeOut" }}
                            >
                                <AlertCard
                                    title={data.title}
                                    countStart={data.countStart}
                                    countEnd={data.countEnd}
                                    icon={<data.icon size={24} className="text-green-600" />}
                                    color={data.color}
                                    alerts={[]}
                                    withSimbian={data.withSimbian}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
