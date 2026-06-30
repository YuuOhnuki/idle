'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import HeroContent from './HeroContent';
import TrackElementWithinViewport from './TextScrollHero';

const ScrollHero = () => {
    return (
        <section className="overflow-x-hidden">
            <Image
                src={'/mono.jpg'}
                width={500}
                height={500}
                alt="mono"
                className="min-w-lvw"
            />
        </section>
    );
};

export default ScrollHero;
