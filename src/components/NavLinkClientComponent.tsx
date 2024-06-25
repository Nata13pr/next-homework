'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

type IProps={
    path:string,
    children:React.ReactNode
}
const NavLinkClientComponent:FC<IProps> = ({path,children}) => {
   let pathname=usePathname()
pathname===path
    return (
        <div>
            <Link href={path} className={pathname===path ? 'active' : ''}>{children}</Link>
        </div>
    );
};

export default NavLinkClientComponent;