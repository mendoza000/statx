import Image from 'next/image'
import Nav from '../ui/Nav'

const LoginView = () => {
  return (
    <div className='flex flex-col items-center bg-gray-100 min-h-screen'>
      <Nav />
      <div className="mx-4 my-10 shadow-xl w-4/5 bg-white flex justify-center items-center flex-col py-7 rounded-xl">
        <Image 
          src={"/tienda.png"}
          width={50}
          height={50}
          alt={"statx icon"}
          className={""}
        />
        <h2 className='text-xl font-bold mt-2'>
          Welcome back!
        </h2>
        <span className='opacity-80 font-semibold'>
          Login to your account
        </span>

        <form className='flex flex-col justify-center items-center gap-4 mt-8'>
          <div>
            <input 
              type="text" 
              placeholder='Email'
              className='outline-none bg-slate-100 rounded-md px-4 py-2'
              />
          </div>
          <input 
            type="text" 
            placeholder='Password'
            className='outline-none bg-slate-100 rounded-md px-4 py-2'
            />
        </form>
      </div>
    </div>
  )
}

export default LoginView