import React, { JSX } from "react";
import { AnimatePresence } from "framer-motion";

import AlertItem from "./AlertItem";
import AnimationCounter from "./AnimationCounter";
import { AlertData } from "../utils/alertData";

import { FaRegCheckCircle } from "react-icons/fa";

export default function AlertCard(
    { title, count, icon, color, alerts = [], withSimbian = false }:
        {
            title: string;
            count: number;
            icon: JSX.Element;
            color: string;
            alerts: AlertData[];
            withSimbian: boolean
        }) {
    const nodeRef = React.useRef<HTMLParagraphElement>(null);

    return (
        <div className={`${color} rounded-xl overflow-hidden shadow-lg`}>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <div>{icon}</div>
                </div>

                <AnimationCounter from={0} to={count} nodeRef={nodeRef} />

                <div className="space-y-2 max-h-52 overflow-y-auto">
                    <AnimatePresence>
                        {withSimbian ? (
                            <div className="flex items-center justify-center h-20 text-green-400 gap-2">
                                < FaRegCheckCircle size={24} />
                                All Clear
                            </div>
                        ) : (
                            alerts.map((alert, index) => (
                                <AlertItem key={alert.id} alert={alert} index={index} />
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}