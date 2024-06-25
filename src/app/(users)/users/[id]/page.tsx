import {userService} from '@/services/api.service';
import React from 'react';

type Params = { id: string }
const UserPage = async ({params}: { params: Params }) => {
    let user = await userService.getUserById(params.id)
    return (
        <div>
            {user?.name} : {user?.email}
        </div>
    );
};

export default UserPage;