'use client';
import { Member } from '@/app/members/page';
import { Card } from '@heroui/react';
import Image from 'next/image';
import { motion, scale } from 'motion/react';

type MemberCardProps = {
    members: Member[];
};

const MemberCard = ({ members }: MemberCardProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {members.map((member: Member, index) => {
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
                        <Card className="col-span-6 min-h-[400px] min-w-[400px] overflow-hidden rounded-3xl lg:col-span-6">
                            {/* Background image */}
                            <Image src={member.image} alt={member.name} fill />
                            {/* Header */}
                            <Card.Header className="z-10 text-white">
                                <Card.Title className="text-xs font-semibold tracking-wide text-black/70">
                                    {member.name}
                                </Card.Title>
                                <Card.Description className="text-sm leading-5 font-medium text-black/50">
                                    {member.role}
                                </Card.Description>
                            </Card.Header>
                            {/* Footer */}
                            <Card.Footer className="z-10 mt-auto flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-black">
                                        {member.introduction}
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default MemberCard;
