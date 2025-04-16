'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { steps } from '../utils/stepsData'

const StepFlow = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Cycle through steps
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % steps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative mb-16">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        className={`${step.color} p-6 rounded-lg relative z-10 ${activeStep === index ? "ring-2 ring-offset-2 ring-offset-slate-900 ring-green-500" : ""
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: activeStep === index ? 1.05 : 1
                        }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.3
                        }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3">{step.icon}</div>
                            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                            <p className="text-sm text-gray-300">{step.description}</p>
                        </div>

                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20">
                                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default StepFlow