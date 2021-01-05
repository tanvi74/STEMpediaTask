const initState = ""

export default (state=initState,action)=>{
    if(action.type==="INPUT")
        return action.payload;
    else    
        return state
}