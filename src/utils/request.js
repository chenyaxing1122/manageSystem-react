import axios from "axios";
import { message } from 'antd';
const service=axios.create({
    baseURL:"http://47.98.219.152:3000"
})


service.interceptors.request.use((config)=>{
    if(sessionStorage.getItem('token')){
        config.headers['Authorization']=`Bearer ${sessionStorage.getItem('token')}`
    }
    return config
})

service.interceptors.response.use(res=>{
    if(res.data.code===-1){
        message.error(res.data.msg||"操作失败");
        return Promise.reject(res.data.msg||"操作失败")
    }
    return res.data
})

export default service