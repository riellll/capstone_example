'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Events",
        url: "/events"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },    {
        id: 5,
        title: "Contact",
        url: "/contact"
    }, 
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    }
]
/* 
<Link className='py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/dashboard'>
<span className={pathname == '/dashboard' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Dashboard</span>
</Link>
 */

const Navbar = () => {
    const pathname = usePathname();
    const isUserLoggedIn = true;

  return (
    <div className='bg-emerald-300'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='flex items-center'>
                <Link href="/" className='self-center text-2xl font-semibold whitespace-nowrap'><Image src='/assets/images/logo.png' width={200} height={100} alt='UCode Clinic Logo'/></Link>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-slate-200 bg-emerald-400 rounded-lg md:hidden hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-800" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className='hidden w-full md:block md:w-auto text-emerald-900' id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/'>
                            <span className={pathname == '/' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/portfolio'>
                            <span className={pathname == '/portfolio' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/events'>
                            <span className={pathname == '/events' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Events</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/about'>
                            <span className={pathname == '/about' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/contact'>
                            <span className={pathname == '/contact' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Contact Us</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar