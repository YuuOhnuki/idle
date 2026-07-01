'use client';
import MemberCard from '@/components/members/MemberCard';
import { motion } from 'framer-motion';

export type Member = {
    name: string;
    role: string;
    birthday: Date;
    image: string;
    introduction: string;
};

const members: Member[] = [
    {
        name: 'SOYEON',
        role: 'リーダー',
        birthday: new Date(),
        image: '/soyeon.jpg',
        introduction: 'グループの統括プロデューサー。',
    },
    {
        name: 'MIYEON',
        role: 'メインボーカル',
        birthday: new Date(),
        image: '/miyeon.jpg',
        introduction: 'グループの統括プロデューサー。',
    },
    {
        name: 'MINNIE',
        role: 'メインボーカル',
        birthday: new Date(),
        image: '/minnie.jpg',
        introduction: 'グループの統括プロデューサー。',
    },
    {
        name: 'YUQI',
        role: 'リードダンサー',
        birthday: new Date(),
        image: '/yuqi.jpg',
        introduction: 'グループの統括プロデューサー。',
    },
    {
        name: 'SHUHUA',
        role: 'サブボーカル',
        birthday: new Date(),
        image: '/shuhua.jpg',
        introduction: 'グループの統括プロデューサー。',
    },
];

const page = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-7xl mx-auto my-4 space-y-8 px-4">
                <h1 className="text-4xl my-2 tracking-wider">Members</h1>
                <MemberCard members={members} />
            </div>
        </motion.div>
    );
};

export default page;
