'use client';
import ScrollHero from '@/components/layouts/hero/ScrollHero';
import AboutSection from '@/components/layouts/sections/AboutSection';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="bg-zinc-50 dark:bg-black min-h-screen">
                <ScrollHero />
                <div className="max-w-7xl mx-auto my-4 space-y-4 px-4">
                    <AboutSection />
                </div>
            </div>
        </motion.div>
    );
}
