import api from "./api";

interface RegisterParams{
    name:string
    email:string
    password:string
    nickname:string
    cpf:string
    birth:string
    phone:string
    celphone:string
}

interface LoginParams{
    email:string
    password: string
    staylogged: boolean
}

const authService = {
    register: async (params: RegisterParams) =>{
        const res = await api.post('/cadastro', params).catch((error)=>{
            if (error.response.status === 400){
                return error.response
            }
            return error
        })
        return res
    },
    showPassword: async (id:string, icon:string) => {
        let inputType = document.getElementById(id.toString())
        let showIcon = document.getElementById(icon.toString())
        if (inputType?.getAttribute('type') == 'password'){
            inputType.setAttribute('type', 'text')
            showIcon?.setAttribute('style','opacity:0')

        }else if (inputType?.getAttribute('type') == 'text'){
            inputType.setAttribute('type', 'password')
            showIcon?.setAttribute('style','opacity:1')
        }
    },
    login: async (params:LoginParams)=>{
        const res = await api.post('/login',params).catch((error)=>{
            if(error.response.status === 400 || error.response.status === 401){
                return error.response
            }
            return error
        })
        if (res.status === 201){
            sessionStorage.setItem('cf-token', res.data.token)
        }
        return res
    },
}

export default authService;