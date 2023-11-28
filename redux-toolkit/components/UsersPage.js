"use client";
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { fetchUsers } from '@/redux/features/users/usersSclice';

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=>state.users);

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <div>
           <h1>Users</h1>
           {users.loading ? <h3>Loading...</h3> : null}
           {users.users.length ? users.users.map(user=><p key={user.id}>{user.name}</p>) : null}
        </div>
    );
};

export default UsersPage;