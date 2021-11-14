
export const middleware = (store:any) => (next:any) => (action:any) => {
    switch(action.type){
        
    }

    let result = next(action);


    return result;
}
