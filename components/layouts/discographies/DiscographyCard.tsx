'use client';
import { Member } from '@/app/members/page';
import { Card } from '@heroui/react';
import Image from 'next/image';
import { motion, scale } from 'motion/react';
import { AlbumType, Discography } from '@/app/discography/page';

type DiscographyCardProps = {
    discographies: Discography[];
    type: AlbumType;
};

const DiscographyCard = ({ discographies, type }: DiscographyCardProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {discographies
                .filter((discography: Discography) => discography.type == type)
                .map((discography: Discography, index) => {
                    return (
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                opacity: 0.85,
                            }}
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            key={index}
                        >
                            <Card className="col-span-12 min-h-[350px] min-w-[350px] overflow-hidden rounded-3xl lg:col-span-6">
                                {/* Background image */}
                                <Image
                                    src={discography.image}
                                    alt={discography.title}
                                    fill
                                />
                                {/* Header */}
                                <Card.Header className="z-10 text-white">
                                    <Card.Title className="text-xl font-semibold tracking-wide text-black/70">
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
                                            {discography.title}
                                        </motion.p>
                                    </Card.Title>
                                    <Card.Description className="text-sm leading-5 font-medium text-black/50">
                                        {discography.type}
                                    </Card.Description>
                                </Card.Header>
                                {/* Footer */}
                                <Card.Footer className="z-10 mt-auto flex items-center justify-between">
                                    <div>
                                        <p>
                                            {discography.releasedDate.toDateString()}
                                        </p>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </motion.div>
                    );
                })}
        </div>
    );
};

export default DiscographyCard;
