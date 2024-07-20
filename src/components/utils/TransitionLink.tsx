"use client";
import Link, { LinkProps } from 'next/link';
import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsLoading(true);

        const body = document.querySelector("body");

        body?.classList.add("page-transition");

        await sleep(150);

        router.push(href);

        await sleep(150);

        body?.classList.remove("page-transition");
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 rounded z-50 text-lg pointer-events-none">
                    Loading...
                </div>
            )}
            <Link onClick={handleTransition} href={href} {...props}>{children}</Link>
        </>
    );
};



