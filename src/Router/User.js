import React from 'react';
import Description from '../Description';
import UserDetailsList from '../UserDetailsList';
function User(props) {
    
    return (
        <div>
            <Description/>
            <UserDetailsList/>
        </div>
    );
}

export default User;