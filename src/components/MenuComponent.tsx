import React from 'react';
import Link from "next/link";
import NavLinkClientComponent from './NavLinkClientComponent';

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/comments'}>Comments</Link>
                </li>
                <li>
                    <NavLinkClientComponent path={'/users'}>users</NavLinkClientComponent>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;