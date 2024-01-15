import React, {FC, useState, useEffect} from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import { useParams, useHistory } from 'react-router-dom';

interface UserItemPageParams {
    id:string;
}

const UserItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const history = useHistory();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
        setUser(response.data)
        } catch (e) {
        console.log(e)
        }
    }

    return (
        <div>
            <button
                onClick={() => {
                    history.push('/users')
                }}    
            > 
                back 
            </button>
            <h1>
                page of user {user?.name}
            </h1>
            <div>
                email: {user?.email}
            </div>
            <div>
                address: {user?.address.city}, {user?.address.street}, {user?.address.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage;