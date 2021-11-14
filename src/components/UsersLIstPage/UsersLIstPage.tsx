import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/actions/Settings';
import { getUsersList } from '../../store/selectors/selectors';
import { UsersComponent } from '../UsersComponent/UsersComponent';
import s from './UsersLIstPage.module.scss';

export const UsersListPage = () => {

    const dispatch = useDispatch();
    const usersData: any = useSelector(getUsersList);
    const [isFetching, setIsFetching] = React.useState(true);

    React.useEffect(()=> {
        if(isFetching){
            dispatch(fetchUsers());
            setIsFetching(false);
            return;
        };
    }, [isFetching, usersData]);

    
    return (
        <div className = {s.container}>
            <div className = {s.wrapper}>
                {
                    !isFetching && usersData.map((item:any, index:number):JSX.Element => {
                        
                        return(
                            <UsersComponent 
                                name = {item['name']}
                                id = {item['id']}
                                username = {item['username']}
                                key = {`${index}_${item['id']}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
