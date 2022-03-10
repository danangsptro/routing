import axios  from "axios";


const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 1000 *30,
    headers: {'token': ''}
  });
const Get=(route)=>{
    return instance.get(route).then(res=>res)
}
export {Get}