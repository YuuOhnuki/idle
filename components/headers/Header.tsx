import Image from 'next/image';
import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import HeaderLogo from './HeaderLogo';

const Header = () => {
    return (
        <header className="h-40 sticky flex justify-around border-b-4">
            <HeaderLogo />
            <HeaderNavigation />
        </header>
    );
};

export default Header;
