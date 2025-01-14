import { Link } from '@inertiajs/react';
import mainlogo from '../Assets/mainlogo.png';

export default function GuestLayout({ children }) {
    return (
        <div className="min-w-screen min-h-screen block ">
            <div className="flex flex-wrap items-center justify-between p-4 px-24 dark:bg-gray-900">
                <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={mainlogo} class="h-8" alt="Main Logo" />
                        <span class="self-center text-3xl font-oswald whitespace-nowrap dark:text-white">Immobilia</span>
                    </Link>
               <div className="w-full md:block md:w-auto" id="navbar-default">
                   <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                     
                             <>
                               <li>
                                 <Link href={route('login')} className="border border-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log In</Link>
                               </li>
                               <li>
                                 <Link href={route('register')} className="border border-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</Link>
                               </li>
                             </>
                             
                     </ul>
                   </div>
            </div>

            <div className="">
                {children}
            </div>
        </div>
    );
}
