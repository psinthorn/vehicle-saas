import Link from 'next/link';
import Image from 'next/image';
import CustomeButton from './CustomeButton';


const Navbar = () => {
  return (
    <header className='absolute w-full z-10'>
        <nav className='flex justify-between items-center mx-auto max-w-[1440px] sm:px-16 px-6 py-4'>
          <Link href="/" className='flex justify-center items-center'>
            <Image 
              src="/logo.svg"
              alt="My Samui Island Tour"
              width={118}
              height={18}
              className='object-contain'
            />
          </Link>
          <CustomeButton 
            title="Sign in" 
            btnType='button' 
            containerStyles='text-primary-blue rounded-full bg-white min-w{130px}' 
          />

        </nav>
    </header>
  )
}

export default Navbar