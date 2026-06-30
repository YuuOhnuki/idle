import { useScroll, useTransform } from 'motion/react';
import React from 'react';

const TextScrollHero = () => {
    const { scrollY } = useScroll();
    const invertScroll = useTransform(() => scrollY.get() * -1);

    const lines = [
        { text: 'Creative', reverse: false },
        { text: 'Design', reverse: true },
        { text: 'Motion', reverse: false },
        { text: 'Studio', reverse: true },
    ];
    return <div>TextScrollHero</div>;
};

export default TextScrollHero;
