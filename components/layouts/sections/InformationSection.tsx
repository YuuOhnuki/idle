import React from 'react';
import SectionTitle from './SectionTitle';
import { Card } from '@heroui/react';
import Image from 'next/image';
import { motion } from 'motion/react';

const InformationSection = () => {
    return (
        <div>
            <SectionTitle title={'Information'} />
            <div className="flex items-center justify-evenly">
                <div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DYgE3SGPEqk?si=mkcMjGOTm1Gm87IN"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                    <h2>
                        i-dle (아이들) 'Mono (Feat. skaiwater)' Official Music
                        Video
                    </h2>
                </div>
                <Card className="col-span-6 min-h-[400px] min-w-[400px] overflow-hidden rounded-3xl lg:col-span-6">
                    {/* Background image */}
                    <Image
                        src="https://i-dle.cubeent.co.jp/wp-content/uploads/2026/01/i-dle_Mono_Online-Cover_small.jpg"
                        alt="mono"
                        fill
                    />
                    {/* Header */}
                    <Card.Header className="z-10 text-white">
                        <Card.Title className="text-xs font-semibold tracking-wide text-black/70">
                            <motion.p
                                className="w-full p-4"
                                initial={{
                                    boxShadow: '0 0 0 white',
                                }}
                                animate={{
                                    textShadow: '1px 1px 1px white',
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeInOut',
                                }}
                            >
                                Mono (Feat. skaiwater)
                            </motion.p>
                        </Card.Title>
                        <Card.Description className="text-sm leading-5 font-medium text-black/50">
                            Single
                        </Card.Description>
                    </Card.Header>
                    {/* Footer */}
                    <Card.Footer className="z-10 mt-auto flex items-center justify-between">
                        <div>
                            <div className="text-sm font-medium text-black">
                                2026.01.27
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default InformationSection;
