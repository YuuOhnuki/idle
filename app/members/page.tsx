import MemberCard from '@/components/members/MemberCard';
import React from 'react';

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
        image: '',
        introduction: 'グループの統括プロデューサー。',
    },
    {
        name: 'MIYEON',
        role: 'メインボーカル',
        birthday: new Date(),
        image: '',
        introduction: 'グループの統括プロデューサー。',
    },
    {
        name: 'MINNIE',
        role: 'メインボーカル',
        birthday: new Date(),
        image: '',
        introduction: 'グループの統括プロデューサー。',
    },
    {
        name: 'YUQI',
        role: 'リードダンサー',
        birthday: new Date(),
        image: '',
        introduction: 'グループの統括プロデューサー。',
    },
    {
        name: 'SHUHUA',
        role: 'サブボーカル',
        birthday: new Date(),
        image: '',
        introduction: 'グループの統括プロデューサー。',
    },
];

const page = () => {
    // console.log(members);
    return <MemberCard members={members} />;
};

export default page;
