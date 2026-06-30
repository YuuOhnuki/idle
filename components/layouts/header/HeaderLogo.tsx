'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const HeaderLogo = () => {
    return (
        <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <Image
                src={'/I-dle_logo.svg'}
                alt="i-dle logo"
                width={100}
                height={300}
            />
        </motion.div>
    );
};

export default HeaderLogo;
