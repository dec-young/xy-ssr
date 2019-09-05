import {Message} from 'element-ui'

export default ({$axios})=>{
    $axios.onError(res=>{
        // 解构出错误信息和代码
        const {message,statusCode} = res.response.data;
        if(statusCode === 400){
            Message.error(message)
        }
    })
}