'use client';
import HeroSlider from '@/components/layouts/hero/HeroSlider';
import AboutSection from '@/components/layouts/sections/AboutSection';
import GallerySection from '@/components/layouts/sections/GallerySection';
import InformationSection from '@/components/layouts/sections/InformationSection';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="">
                <HeroSlider />
                <div className="max-w-7xl mx-auto my-4 space-y-8 px-4">
                    <AboutSection />
                    <InformationSection />
                    <GallerySection />
                </div>
            </div>
        </motion.div>
    );
}
