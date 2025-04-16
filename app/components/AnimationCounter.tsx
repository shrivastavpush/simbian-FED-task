import { animate } from "framer-motion";
import React, { useEffect } from "react";

export default function Counter({ from, to, nodeRef }:
    {
        from: number;
        to: number;
        nodeRef: React.RefObject<HTMLParagraphElement>
    }) {

    useEffect(() => {
        const node = nodeRef.current;

        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = value.toFixed(2);
            },
        });

        return () => controls.stop();
    }, [from, to, nodeRef,]);

    return <p ref={nodeRef} />;
}