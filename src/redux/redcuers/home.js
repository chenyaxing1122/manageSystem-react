const initState={role:"",nickname:""};
export function loginRedcuer(prevState=initState,action){
    const{type,payload}=action;
    if(type==="add"){
        return payload
    }
    return prevState//默认值，首次会触发
}