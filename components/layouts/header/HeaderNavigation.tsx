import Link from 'next/link';
import { motion } from 'motion/react';

const HeaderNavigation = () => {
    return (
        <div className="flex space-x-12 items-center">
            <motion.div
                className="px-4"
                whileHover={{ scale: 1.05, boxShadow: '5px 5px #000' }}
                whileTap={{ scale: 0.95 }}
            >
                <Link className="tracking-wider" href={'/members'}>
                    Home
                </Link>
            </motion.div>
            <motion.div
                className="px-4"
                whileHover={{ scale: 1.05, boxShadow: '5px 5px #000' }}
                whileTap={{ scale: 0.95 }}
            >
                <Link className="tracking-wider" href={'/members'}>
                    Member
                </Link>
            </motion.div>
            <motion.div
                className="px-4"
                whileHover={{ scale: 1.05, boxShadow: '5px 5px #000' }}
                whileTap={{ scale: 0.95 }}
            >
                <Link className="tracking-wider" href={'/members'}>
                    Discography
                </Link>
            </motion.div>
        </div>
    );
};

export default HeaderNavigation;
