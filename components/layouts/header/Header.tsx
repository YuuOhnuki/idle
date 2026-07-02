'use client';

import HeaderNavigation from './HeaderNavigation';
import HeaderLogo from './HeaderLogo';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

const Header = () => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const [heroHeight, setHeroHeight] = useState(0);

    useEffect(() => {
        const updateHeroHeight = () => {
            setHeroHeight(window.innerHeight);
        };

        updateHeroHeight();
        window.addEventListener('resize', updateHeroHeight);

        return () => {
            window.removeEventListener('resize', updateHeroHeight);
        };
    }, []);

    useMotionValueEvent(scrollY, 'change', (current) => {
        if (current > heroHeight - 80) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.header
            initial={{
                y: -100,
                opacity: 0,
            }}
            animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 z-50 w-full backdrop-blur-sm"
        >
            <div className="max-w-7xl px-4 h-20 mx-auto flex justify-between items-center border-b border-neutral-700">
                <HeaderLogo />
                <HeaderNavigation />
            </div>
        </motion.header>
    );
};

export default Header;
