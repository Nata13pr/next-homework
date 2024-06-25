import Link from 'next/link';
import React, { FC } from 'react';

interface IProps{
    user:IUser
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <Link href={`/users/${user.id}`}>{user.id}:{user.name}</Link>
        </div>
    );
};

export default UserComponent;