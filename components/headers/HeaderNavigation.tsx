import Link from 'next/link';
import React from 'react';

const HeaderNavigation = () => {
    return (
        <div className="flex spaces-x-4">
            <Link className="tracking-wide" href={'/members'}>
                Members
            </Link>
            <Link className="tracking-wide" href={'/members'}>
                Members
            </Link>
            <Link className="tracking-wide" href={'/members'}>
                Members
            </Link>
        </div>
    );
};

export default HeaderNavigation;
