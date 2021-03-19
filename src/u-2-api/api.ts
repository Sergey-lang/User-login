import axios from 'axios'

const defaultOptions = {
    withCredentials: false,
    baseURL: 'https://tager.dev.ozitag.com',
    headers: {
        Accept: 'application/json',
    }
};

export const axiosInstance = axios.create(defaultOptions);

const interceptorConfigCreator = () => (config: any) => {
    const token = localStorage.getItem('accessToken')
    if (Boolean(token)) {
        config.headers.Authorization = `Bearer ${token}`
    } else {
        delete config.headers.Authorization
    }
    return config
}

const interceptorsConfig = interceptorConfigCreator()
axiosInstance.interceptors.request.use(interceptorsConfig)


// axiosInstance.interceptors.response.use(
//     response => {
//         return response
//     },
//     error => {
//         if (error.response.status === 401) {
//             const refreshToken = localStorage.getItem('refreshToken')
//             if (refreshToken) {
//                 axiosInstance
//                     .post(token / refresh /, {refresh: refreshToken})
//                     .then(response => {
//                         localStorage.setItem('accessToken', response.data.access)
//                     })
//                     .catch(e => {
//                         localStorage.clear()
//                     })
//             } else {
//                 return error
//             }
//         }
//     },
// )
