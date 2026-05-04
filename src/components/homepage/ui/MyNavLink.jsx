import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={` text-black  ${pathname === href ? " text-main-gradient text-purple-500 font-semibold border-b-2 border-b-purple-500" : ""}`}
        >
            {children}
        </Link>
    );
};

export default MyNavLink;
