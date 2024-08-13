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
            <Link onClick={handleTransition} href={href} {...props}>{children}</Link>
        </>
    );
};



