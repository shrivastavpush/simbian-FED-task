"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WithoutSimbian from "./pages/WithoutSimbian";
import WithSimbian from "./pages/WithSimbian";

export default function Home() {
    const [activeTab, setActiveTab] = useState("without");

    return (
        <main className="min-h-screen bg-blue-950 text-white overflow-x-hidden">
            <div className="container mx-auto px-4 py-8">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    Security Operations Experience
                </motion.h1>

                <div className="flex justify-center mb-8">
                    <div className="bg-slate-800 p-1 rounded-lg flex">
                        <button
                            className={`px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${activeTab === "without" ? "bg-red-500 text-white" : "text-gray-300 hover:text-white"
                                }`}
                            onClick={() => setActiveTab("without")}
                        >
                            Without Simbian
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${activeTab === "with" ? "bg-green-500 text-white" : "text-gray-300 hover:text-white"
                                }`}
                            onClick={() => setActiveTab("with")}
                        >
                            With Simbian
                        </button>
                    </div>
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {activeTab === "without" ? <WithoutSimbian /> : <WithSimbian />}
                </motion.div>
            </div>
        </main>
    );
}