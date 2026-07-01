import { Splide, SplideSlide } from 'react-splide-ts';
import Image from 'next/image';

const HeroSlider = () => {
    return (
        <Splide
            aria-label="I-dle Hero Image"
            options={{
                type: 'fade',
                rewind: true,
                autoplay: true,
                interval: 1500,
            }}
            className="max-w-7xl mx-auto"
        >
            <SplideSlide>
                <Image
                    src="/group/1.jpg"
                    alt="Image 1"
                    className="w-full h-full object-cover"
                    width={2000}
                    height={2000}
                />
            </SplideSlide>
            <SplideSlide>
                <Image
                    src="/group/2.jpg"
                    alt="Image 2"
                    className="w-full h-full object-cover"
                    width={2000}
                    height={2000}
                />
            </SplideSlide>
            <SplideSlide>
                <Image
                    src="/group/3.png"
                    alt="Image 3"
                    className="w-full h-full object-cover"
                    width={2000}
                    height={2000}
                />
            </SplideSlide>
            <SplideSlide>
                <Image
                    src="/group/4.jpg"
                    alt="Image 4"
                    className="w-full h-full object-cover"
                    width={2000}
                    height={2000}
                />
            </SplideSlide>
        </Splide>
    );
};

export default HeroSlider;
