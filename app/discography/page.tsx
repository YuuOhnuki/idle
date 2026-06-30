'use client';
import DiscographyCard from '@/components/layouts/discographies/DiscographyCard';
import DiscographyTabs from '@/components/layouts/discographies/DiscographyTabs';
import MemberCard from '@/components/members/MemberCard';
import { motion } from 'framer-motion';

export type Discography = {
    title: string;
    type: string;
    releasedDate: Date;
    image: string;
};

export type AlbumType = 'Full' | 'Mini' | 'Single';

export const discographies: Discography[] = [
    {
        title: 'I am',
        type: 'Mini',
        releasedDate: new Date('2018.05.02'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2021/12/1st-Mini-Album_I-am_Online-Cover.jpg',
    },
    {
        title: 'I made',
        type: 'Mini',
        releasedDate: new Date('2019.02.26'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2021/12/2nd-mini_I-made.jpg',
    },
    {
        title: 'Uh-Oh',
        type: 'Single',
        releasedDate: new Date('2019.06.26'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2021/12/%E1%84%8B%E1%85%A7%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%86%AF_Digital-Single_Uh-Oh_Online-Cover.jpg',
    },
    {
        title: 'I trust',
        type: 'Mini',
        releasedDate: new Date('2020.04.06'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2021/12/3rd-Mini-Album_I-trust_Online-Cover.jpg',
    },
    {
        title: 'i’M THE TREND',
        type: 'Single',
        releasedDate: new Date('2020.07.06'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2021/12/iM-THE-TREND_%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5.jpg',
    },
    {
        title: 'DUMDi DUMDi',
        type: 'Single',
        releasedDate: new Date('2020.08.03'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2021/12/DUMDi-DUMD.jpg',
    },
    {
        title: 'I burn',
        type: 'Single',
        releasedDate: new Date('2021.01.11'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2021/12/4th-Mini-Album_I-burn.jpg',
    },
    {
        title: 'A Page',
        type: 'Single',
        releasedDate: new Date('2021.05.13'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2021/12/%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5-%E1%84%8B%E1%85%AE%E1%84%80%E1%85%B5-%E1%84%8B%E1%85%A7%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%86%AF_Digital-Single_A-Page.jpg',
    },
    {
        title: 'I NEVER DIE',
        type: 'Full',
        releasedDate: new Date('2022.03.14'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2022/03/%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5-%E1%84%8B%E1%85%A7%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%86%AF_1st-full-Album_I-NEVER-DIE-1024x1024.jpg',
    },
    {
        title: 'I love',
        type: 'Mini',
        releasedDate: new Date('2022.10.17'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2022/10/%EC%95%84%EC%9D%B4%EB%93%A4_5th_%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%BB%A4%EB%B2%84-1024x1024.jpg',
    },
    {
        title: 'I feel',
        type: 'Mini',
        releasedDate: new Date('2023.05.15'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2023/05/%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5-%E1%84%8B%E1%85%A7%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%86%AFGI-DLE-6th-Mini-Album-I-feel-1024x1024.jpg',
    },
    {
        title: '2',
        type: 'Full',
        releasedDate: new Date('2024.01.29'),
        image: 'https://i-dle.cubeent.co.jp/wp-content/uploads/2024/01/%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%BB%A4%EB%B2%84-%EC%97%AC%EC%9E%90%EC%95%84%EC%9D%B4%EB%93%A4GI-DLE-2nd-Full-Album-2-1024x1024.jpg',
    },
];

const page = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="px-4 my-4">
                <h1 className="text-4xl my-2 tracking-wider">Discography</h1>
                <DiscographyTabs />
            </div>
        </motion.div>
    );
};

export default page;
