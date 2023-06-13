const initState = 0;
export const reducer = (state:any = initState , actions:any) => {
    const {type,data} = actions;
    switch(type) {
        case 'add':
            return state + data;
        case "decrement":
            return state - data;
        default:
            return state;
    }
}
