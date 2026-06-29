import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="absolute w-full bottom-0 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="border-t border-neutral-700 py-2">
                    <p className="text-center py-2">
                        &copy; {new Date().getFullYear()} Ohnuki Yuu. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
