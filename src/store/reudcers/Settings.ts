
const initialState:any = {
    someThing : '',
    usersList:[],
};

export const Settings = (state:any = initialState, action:any) => {
    switch(action.type){

        case 'SET_SOMETHING_VALUE':{
            
            return{
                ...state,
                someThing: action['payload']
            }
        }
        case "SET_USERS":{
            const userListCopy = JSON.parse(JSON.stringify(state['usersList'])); 
            userListCopy.push(...action.payload);

            return {
                ...state,
                usersList:userListCopy
            }
        }

        case 'ADD_USER':{
            const userListCopy = JSON.parse(JSON.stringify(state['usersList']));
            console.log('userListCopy', userListCopy);
            
            userListCopy.unshift(action.payload);

            return {
                ...state,
                usersList:userListCopy
            }
        }

        default:{
            return {
                ...state
            }
        }
    }
}