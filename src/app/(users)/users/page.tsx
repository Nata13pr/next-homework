import UserComponent from '@/components/UserComponent';
import { userService } from '@/services/api.service';
import React from 'react';

const UsersPage = async () => {
    let allUsers=await userService.getAllUsers();

    return (
        <div>
            <ul>
            {
                allUsers.map((user:any)=>(<li key={user.id}><UserComponent user={user}/></li>))
            }
            </ul>
        </div>
    );
};

export default UsersPage;