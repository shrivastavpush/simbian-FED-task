import React, { JSX } from "react";
import { AnimatePresence } from "framer-motion";

import AlertItem from "./AlertItem";
import AnimationCounter from "./AnimationCounter";
import { AlertItemData } from "../data/alertItemData";

import { FaRegCheckCircle } from "react-icons/fa";

export default function AlertCard(
    { title, countStart, countEnd, icon, color, alerts = [], withSimbian = false }:
        {
            title: string;
            countStart: number;
            countEnd: number;
            icon: JSX.Element;
            color: string;
            alerts: AlertItemData[];
            withSimbian: boolean
        }) {
    const nodeRef = React.useRef<HTMLDivElement>(null);

    return (
        <div className={`${color} md:w-[450px] w-[92vw] rounded-xl overflow-hidden shadow-lg p-4`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>{icon}</div>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <AnimationCounter from={countStart} to={countEnd} nodeRef={nodeRef} />
            </div>


            <div className="space-y-2 max-h-52 overflow-y-auto">
                <AnimatePresence>
                    {withSimbian ? (
                        <div className="flex items-center justify-center h-10 text-green-400 gap-2 py-4">
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
    );
}