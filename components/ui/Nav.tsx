import Image from 'next/image'

const Nav = () => {
  return (
    <div className='shadow-md h-12 flex items-center px-6 min-w-full bg-white'>
      <Image 
        src={'/tienda.png'}
        width={30}
        height={30}
        alt={"statx icon"}
        />
      <span className='ml-3 font-bold text-lg'>
        Statx
      </span>
    </div>
  )
}

export default Nav