import React, {useState} from 'react';
import useFirestoreDocs from '../hooks/firestoreDocs';

const UsersModal = ({setUsers, setShowUsers}) => {
    const {docs} = useFirestoreDocs('users');
    const selectedUsers = [];

    const handleChange = (e, id) => {
        if(e.target.checked) {
            selectedUsers.push(id);
        }
        selectedUsers.filter((item) => item !== id);
    }

    const handleClick = (e) => {
        setShowUsers(false);
        setUsers(selectedUsers);
    }

    return (
        <div>
            {docs.map(user =>(
              <div key={user.id}>
                  <label key={user.id}>{user.firstName + " " + user.lastName}</label>
                  <input  key={user.id} type="checkbox" onChange={(e) => handleChange(e, user.id)} />
              </div>
            ))}
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default UsersModal;