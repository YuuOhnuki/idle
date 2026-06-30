import React from 'react';
import SectionTitle from './SectionTitle';
import { Link } from '@heroui/react';
import { SquareArrowOutUpRight } from 'lucide-react';

const AboutSection = () => {
    return (
        <div>
            <SectionTitle title={'About'} />
            <p>
                韓国の5人組ガールズグループ。
                <Link href="https://cubeent.co.jp/" className="mx-1">
                    CUBEエンターテインメント
                    <Link.Icon className="size-3">
                        <SquareArrowOutUpRight />
                    </Link.Icon>
                </Link>
                所属。韓国、タイ、中国、台湾出身の5人で構成されている。
            </p>
            <p>
                旧グループ名は、I-DLE。2025年5月2日にI-DLEからi-dleにグループ名を改名した。
            </p>
            <p>
                2018年5月2日、ミニアルバム『
                <Link className="mx-1">
                    I am
                    <Link.Icon className="size-3">
                        <SquareArrowOutUpRight />
                    </Link.Icon>
                </Link>
                』でデビュー。
            </p>
        </div>
    );
};

export default AboutSection;
