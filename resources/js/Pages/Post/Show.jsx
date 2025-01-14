import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react'
import React from 'react'

 export default function Show ({auth,post}) {
   console.log(post);
  return (
    <AuthenticatedLayout
                user={auth.user}
                
            >
      <Head title="Show" />
      <div className='bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen w-full h-full pt-24 '>
                <div className='bg-white flex justify-between mx-auto w-[80%] rounded-lg shadow-lg py-8 px-8 mb-24'>

                    <div className='flex-col items-center'>
                    {/* Post Image */}
                    <img src={post.data.img_path} alt="Post Image" className="rounded-lg mb-4 w-[35rem] h-[25rem]" />

                    {/* Post Price */}
                    <div className="flex items-center bg-blue-800 text-white py-2 px-4 rounded-full w-[10rem]">
                        <span className="text-3xl font-bold">{post.data.price}</span>
                        <span className="text-sm ml-2">DH / month</span>
                    </div>
                    </div>

                    <div className='flex-col'>
                            {/* Post Details */}
                            <div className="text-gray-900 space-y-4 mt-6 text-xl">
                                <p className="flex items-center gap-2">
                                    <strong>City:</strong>
                                    <span>{post.data.city}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <strong>Address:</strong>
                                    <span>{post.data.address}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <strong>Posted By:</strong>
                                    <span>{post.data.createdBy.name}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <strong>Contact:</strong>
                                    <span className='text-yellow-700'>{post.data.createdBy.phone}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <strong>Created at:</strong>
                                    <span>{post.data.created_at}</span>
                                </p>
                            </div>
                            
                            {/* Post Description */}
                            <div className="mt-6 border rounded-lg p-4 w-[35rem] h-auto">      
                                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                                <p>{post.data.description}</p>
                            </div>
                            </div>

                     </div>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                    <p>&copy; 2025 Immobilia. All Rights Reserved.</p>
                    <div className="mt-4">
                        <a href="#" className="text-blue-400 mx-2 hover:underline">
                        Terms of Service
                        </a>
                        <a href="#" className="text-blue-400 mx-2 hover:underline">
                        Privacy Policy
                        </a>
                    </div>
                    </div>
                </footer>

            </div>
    </AuthenticatedLayout>
  )
}

