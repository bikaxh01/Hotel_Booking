import zod, { string } from 'zod'

export const singUpSchema = zod.object({
    email:string({message:"Email is required"}).email({message:"Invalid Email"}),
    username:string({message:"username is required"}),
    password:string({message:"Password is required"})
})
export const singInSchema = zod.object({
    email:string({message:"Email is required"}).email({message:"Invalid Email"}),
    password:string({message:"Password is required"})
})