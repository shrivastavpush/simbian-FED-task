import { animate } from "framer-motion";
import React, { useEffect } from "react";

export default function AnimationCounter({ from, to, nodeRef }:
    {
        from: number;
        to: number;
        nodeRef: React.RefObject<HTMLDivElement | null>;
    }) {

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            },
        });

        return () => controls.stop();
    }, [from, to, nodeRef]);

    return (
        <div
            className="text-3xl font-bold"
            ref={nodeRef}
            aria-live="polite"
            aria-label={`Count: ${to}`}
        />
    );
}