const initState={role:"",nickname:""};
export function loginReducer(prevState=initState,action){
    const{type,payload}=action;
    if(type==="add"){
        return payload
    }
    return prevState//默认值，首次会触发
}
const menu=[];
export function menuReducer(prevState=menu,action){
    const{type,payload}=action;
    if(type==="generate"){
        return payload
    }
    return prevState//默认值，首次会触发
}