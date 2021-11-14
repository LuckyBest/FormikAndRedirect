
export const getValue = ({...state}) => {
    return state['Settings']['someThing'];
};

export const getUsersList = ({...state}) => {

    return state['Settings']['usersList']; 
}