import axios from "axios";

// export function request(config,success,failure) {
//     const instance_one = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance_one(config).then(res=>success(res)).catch(err=>failure(err))
// }
export function request(config) {
    const instance_one = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        // timeout:5000
    })
    return instance_one(config)
}