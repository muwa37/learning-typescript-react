import React, {FC} from "react";
import { IUser } from "../types/types";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void;
}

const UserItem:FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div
            onClick={() => {onClick(user)}}
            style={{padding: 15, border: '1px solid teal'}}
        >
            {user.id}. {user.name} lives in {user.address.city} on {user.address.city} street;                    
        </div>
    )
}

export default UserItem