import Link from 'next/link';

const HeaderNavigation = () => {
    return (
        <div className="flex space-x-12 items-center">
            <Link className="tracking-wider" href={'/members'}>
                Home
            </Link>
            <Link className="tracking-wider" href={'/members'}>
                Member
            </Link>
            <Link className="tracking-wider" href={'/members'}>
                Discography
            </Link>
        </div>
    );
};

export default HeaderNavigation;
