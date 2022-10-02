import type { NextPage } from 'next'
import {useForm} from 'react-hook-form'
import {setCookie} from 'nookies'
import {v4 as uuid} from 'uuid'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login: NextPage = () => {

  const {register, handleSubmit} = useForm()
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSignIn =(data : any) => {
    if(data.password === process.env.NEXT_PUBLIC_USER_PASSWORD && data.login===process.env.NEXT_PUBLIC_USER_LOGIN){
      const token = uuid()
      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60*60*8 //8 hours
      })
      return router.push('/dashboard/main')
    }
    setError(true)

  }

  return (
    <main className='bg-blue-400 min-h-screen flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit(handleSignIn)} className='rounded-lg bg-white px-6 py-8 flex flex-col gap-4 w-10/12 max-w-[415px]'>
        <h1 className='text-center text-xl'>Odonto Dashboard</h1>
        <hr className='border-gray-300' />
        <div className='flex flex-col gap-3'>
          <label htmlFor="login">Usuário</label>
          <input {...register('login')} type="text" name='login' id='login' className='rounded-md bg-gray-100 px-2 py-1' />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="password">Senha</label>
          <input {...register('password')} type="password" name='password' id='password' className='rounded-md bg-gray-100 px-2 py-1' />
        </div>
        <button className='bg-blue-400 text-white rounded-lg py-1 mt-6'>Entrar</button>
        {error ? <span className='text-sm text-red-400 text-center'>Credenciais inválidas</span> : <></>}
      </form>
    </main>
  )
}

export default Login
