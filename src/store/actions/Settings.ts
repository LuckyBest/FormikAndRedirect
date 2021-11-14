import axios from "axios";

export const fetchUsers = () => (dispatch:any) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users`
      )
      .then((response) => {
        dispatch(setUserList(response['data']));
    });
}


export const setValue = (data:any) => ({
    type: 'SET_SOMETHING_VALUE',
    payload:data
});

export const setUserList = (data:any) => ({
    type:'SET_USERS',
    payload:data
});

export const addUser = (data:any) => ({
    type:'ADD_USER',
    payload:data
});