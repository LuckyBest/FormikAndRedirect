import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './UsersComponent.module.scss';

type UsersComponentT = {
    name:string,
    id:string,
    username:boolean
};

export const UsersComponent:FC<UsersComponentT> = ({...props}):JSX.Element => {

    const {name, id, username} = props;

    return (
        <div className ={s.container}>
            <Link to = '/'>
                <div>{name}</div>
                <div>{id}</div>
                <div>{username}</div>
            </Link>
        </div>
    )
}
