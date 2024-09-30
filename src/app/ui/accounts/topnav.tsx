import Link from 'next/link';
import NavLinks from './nav-links';

export default function TopNav() {
    return (
        <div className="bg-white shadow-md border-b-2">
            {/* Logo and Title Container */}
            <Link className="flex items-center" href="/">
                <h1 className="text-4xl ml-2 mr-2">Wealth.ax - Grow your wealth</h1>
            </Link>
            {/* Container to center the elements and add uniform padding */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 min-h-[70px]">
                {/* Centered Navigation Links */}
                <div className="flex-grow flex justify-center">
                    <NavLinks />
                </div>

                {/* Sign Out Button */}
                <form>
                    <button className="flex items-center h-10 px-4 text-md font-medium text-gray-700 bg-gray-100 hover:bg-gray-300 hover:text-green-450 active:bg-green-100 active:text-green-900 rounded-md">
                        <div>Sign out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
