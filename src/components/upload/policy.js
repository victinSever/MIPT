
import http from 'axios';
export function policy() {
   return  new Promise((resolve,reject)=>{
        http({
            url: "http://localhost:3000/api/thirdparty/oss/policy",
            method: "get",
            params: http.adornParams({})
        }).then(({ data }) => {
            resolve(data);
        })
    });
}