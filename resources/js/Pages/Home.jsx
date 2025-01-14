import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import room from '../Assets/room.jpg'
import { Head } from '@inertiajs/react';

export default function Home(props,posts) {
    console.log(posts);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            user={props.user}
            errors={props.errors}
        >
            <Head title="Home" />

            <div className='bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen w-full h-full pt-6'>
        <div id='searchbar' className='w-auto h-14 flex gap-5 justify-center'>

            <div className='bg-white flex-col content-center rounded-full px-4 space-x-4 border border-gray-800'>
              <span className=''>City</span>
              <input className='border border-gray-500 rounded placeholder:italic pl-1 py-0.5' type="text" name="city" id="city" placeholder='search by city' />
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GO</button>
            </div>

            <div className='bg-white flex-row space-x-4 content-center rounded-full px-4 border border-gray-800'>
              <span>Location Type</span>
               <select name="loctype" id="loctype" className='border border-gray-500 rounded'>
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
               </select>
               <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GO</button>
            </div>
            
            <div className='bg-white flex-row content-center rounded-full gap-5 px-4 space-x-4 border border-gray-800'>
              <span>Max Price</span>
              <input type="number" name="maxp" id="maxp" placeholder='1500 ' className='border text-center border-gray-500 rounded w-16' />
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GO</button>
            </div>
        </div>

    {posts.data.map((post) => (
    <div id='postcontainer' className='w-full h-full mt-10 grid grid-cols-4 px-12 gap-8 justify-center content-center '>
        <div className='bg-white my-5 border border-gray-500 rounded-md h-[28rem] w-[20rem]' >
          
            <div id='img' className='justify-center px-1 py-1'> 
              <img src={room} alt="room" className='h-[18rem] w-[20rem]' />
            </div>

            <div className='flex space-x-1 bg-blue-800 w-[8rem] ml-2 py-1 rounded-full'>
              <span className='text-3xl font-oswald pl-4 text-white'>{post.price}</span><span className='pt-2 font-bold text-white'>DH</span>
            </div>
            <div className='flex mt-4 ml-3 space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="CurrentColor" class="size-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

              <span className='font-oswald text-xl'>{post.city}</span>
            </div>

            <div className='flex mt-3 ml-3 space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span className='font-oswald text-xl'>{post.loctype}</span>

              <div className=''>
              
              <a href="#" className='flex'>
              <span className='font-oswald text-xl ml-[135px]'>More</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-1 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </a>
              </div>

            </div>
            
           
        </div>

    </div>
    ))}
    </div>

</AuthenticatedLayout>

    )
}
