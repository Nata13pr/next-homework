import React from 'react';

type Params = { id: string }
const UserPage = ({params}: { params: Params }) => {
    return (
        <div>
            user page {params.id}
        </div>
    );
};

export default UserPage;