import Image from 'next/image';

const HeaderLogo = () => {
    return (
        <Image
            src={'/I-dle_logo.svg'}
            alt="i-dle logo"
            width={100}
            height={300}
        />
    );
};

export default HeaderLogo;
