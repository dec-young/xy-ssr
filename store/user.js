// 登录管理
export const state = ()=>({
    // 采用接口返回的数据
    userInfo:{
        token:'',
        user:{}
    }
})

export const mutations = {
    // 把接口返回的数据保存到state
    setUserInfo(state,data){
        state.userInfo = data
    },

    // 清除userInfo实现退出
    clearUserInfo(state){
        state.userInfo = {
            token:'',
            user:{}
        }
    } 
}

export const actions = {
    // 处理登录的异步请求
    login({commit},data){
        return this.$axios({
            url:'/accounts/login',
            method:'POST',
            data:data
        }).then(res=>{
            // 接口返回的数据存到data中
            const data = res.data
            commit('setUserInfo',data)
            console.log(data)
            return data
        })
    }
}