// This is used to redirect the user between different links.
// like transactions, balances and accountid.
// Import custom images if I want to use them.
'use client'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import React from "react"; // Want to keep track of breadcrumbs.
import { BankIcon, Atm02Icon, Chart01Icon } from '@/app/lib/icons';

// Map of links to display in my topnav.
// If this grows a lot I should store this in a database!
const links = [
    { name: 'Accounts', href: '/accounts', icon: BankIcon }, // I can add custom icons here as well.
    { name: 'Transactions', href: '/transactions', icon: Atm02Icon },
    { name: 'Balances', href: '/balances', icon: Chart01Icon },
];
export default function NavLinks() {
    const pathName: string = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-xl font-medium md:flex-none md:justify-start md:p-2 md:px-3', // Increased text size
                            'm-2',
                            {
                                'bg-green-100 text-green-900 border-solid border-2 border-green-900': pathName === link.href,
                                'hover:bg-gray-300 hover:text-green-450 border-transparent': pathName !== link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}