import {Metadata} from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "UsersLayout metadata"
}

type Props = {
    children: React.ReactNode
}
const UsersLayout = ({children}: Props) => {
   console.log('helll')
    return (
        <div>start
            {children}
            finish
        </div>
    )
}

export default UsersLayout;