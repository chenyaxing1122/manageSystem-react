import request from "../utils/request"
export function loginApi(data){
    return request({
        url:"user/login",
        method:"post",
        data
    })
}