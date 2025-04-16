'use client';
import { motion } from 'framer-motion';
import { JSX, useEffect, useState } from 'react';

interface CardProps {
    title: string;
    icon: JSX.Element;
    count: number;
    animateCount?: boolean;
}

export default function Card({ title, icon, count, animateCount = true }: CardProps) {
    const [displayCount, setDisplayCount] = useState(animateCount ? 0 : count);
    useEffect(() => {
        if (!animateCount) return;
        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            setDisplayCount(current);
            if (current >= count) clearInterval(interval);
        }, 20);
        return () => clearInterval(interval);
    }, [count, animateCount]);

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2 w-full max-w-sm"
            whileHover={{ scale: 1.05 }}
        >
            <div className="text-4xl">{icon}</div>
            <div className="text-3xl font-bold">{displayCount}</div>
            <div className="text-lg text-center">{title}</div>
        </motion.div>
    );
}
