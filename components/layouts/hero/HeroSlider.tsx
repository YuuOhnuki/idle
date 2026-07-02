import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const images = ['/group/1.jpg', '/group/2.jpg', '/group/3.png'];

const HeroSlider = () => {
    return (
        <Swiper
            modules={[Mousewheel, EffectFade, Pagination]}
            slidesPerView={1}
            direction="vertical"
            effect="fade"
            mousewheel={{
                releaseOnEdges: true,
            }}
            fadeEffect={{
                crossFade: true,
            }}
            pagination={{
                clickable: true,
            }}
            className="w-full max-h-screen"
        >
            {images.map((src: string, index: number) => {
                return (
                    <SwiperSlide key={`${index}`}>
                        <Image
                            src={src}
                            alt={src}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 z-10 top-3/5">
                            <div className="aboslute z-20 text-center">
                                <h1 className="text-4xl text-white font-bold">
                                    i-dle
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default HeroSlider;
