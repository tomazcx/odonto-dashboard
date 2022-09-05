import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <main className='bg-blue-400 min-h-screen flex flex-col items-center justify-center'>
      <form className='rounded-lg bg-white px-6 py-8 flex flex-col gap-4 w-10/12 max-w-[415px]'>
        <h1 className='text-center text-xl'>Odonto Dashboard</h1>
        <hr className='border-gray-300' />
        <div className='flex flex-col gap-3'>
          <label htmlFor="login">Login</label>
          <input type="text" name='login' id='login' className='rounded-md bg-gray-100 px-2 py-1' />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="password">Senha</label>
          <input type="password" name='password' id='password' className='rounded-md bg-gray-100 px-2 py-1' />
        </div>
        <button className='bg-blue-400 text-white rounded-lg py-1 mt-6'>Entrar</button>
      </form>
    </main>
  )
}

export default Login
