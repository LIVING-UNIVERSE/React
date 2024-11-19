import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {login as authLogin, login} from '../features/authSlice'

function Signup() {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const {register, submitHandler} = useForm()

    const create = async(data)=>{
        setError("")
        try {
            const userAccount = await authService.createAccount(data)
            if(userAccount){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData));
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center'>
        <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl
        p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={submitHandler(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name:"
                            placeholder = "Enter your full name"
                            {...register("name",{
                                required:true,
                            })}
                        />
                        <Input
              label = "Email:"
              type = 'email'
              placeholder ='Enter your email'
              {...register("email",{
                required:true,
                validate: {
                  matchPattern :(value)=>/[A-Za-z.]+@[a-z]+\.[a-z.]+/.test(value)||
                  "Email address must be valid",
                }
              })}
            />
            <Input
              label="password"
              type ="password"
              placeholder="Enter your password"
              {...register("password",{
                required:true,
              })}
            />
            <Button
            type='submit'
            className='w-full'
            >Create Account</Button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Signup