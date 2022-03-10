import { Get } from "../axios"

const GetUser=async (req,res)=>{
    return Get("/posts").then(data=>{
        return data
    })
}
export {
    GetUser
}