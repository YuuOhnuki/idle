import HeaderNavigation from './HeaderNavigation';
import HeaderLogo from './HeaderLogo';

const Header = () => {
    return (
        <header className="sticky top-0 z-10">
            <div className="max-w-7xl px-4 h-20 mx-auto flex justify-between items-center border-b border-neutral-700">
                <HeaderLogo />
                <HeaderNavigation />
            </div>
        </header>
    );
};

export default Header;
