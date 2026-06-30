import React, { useRef } from 'react';
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'motion/react';

const HeroContent = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const filter = useTransform(
        scrollYProgress,
        [0, 1],
        ['blur(0px)', 'blur(5px)']
    );

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

    return (
        <div className="absolute items-center w-full">
            <motion.div
                style={{
                    scale,
                }}
            >
                <h1 className="text-4xl text-center mx-auto">i-dle</h1>
            </motion.div>
        </div>
    );
};

export default HeroContent;
