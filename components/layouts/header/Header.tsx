"use client";
import HeaderNavigation from './HeaderNavigation';
import HeaderLogo from './HeaderLogo';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

const Header = () => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
    return (
        <header className="sticky top-0 z-10">
                <motion.header
                animate={{
                    y: hidden ? -140 : 0,
                    opacity: hidden ? 0 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="max-w-7xl px-4 h-20 mx-auto flex justify-between items-center border-b border-neutral-700">
                    <HeaderLogo />
                    <HeaderNavigation />
                </div>
            </motion.header>
        </header>
    );
};

export default Header;
