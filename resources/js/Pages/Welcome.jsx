import React from 'react'
import mainlogo from '../Assets/mainlogo.png'
import room1 from '../Assets/room1.jpg'
import room2 from '../Assets/room2.jpg'
import room3 from '../Assets/room3.jpg'
import { Head, Link } from '@inertiajs/react'
 
export default function Welcome ({ auth,posts }) {
  console.log(posts)
  const img = [room1,room2,room3]
  return (

<>
<Head title="Welcome" />  
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="flex flex-wrap items-center justify-between p-4 px-24">
    <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={mainlogo} class="h-8" alt="Main Logo" />
        <span class="self-center text-3xl font-oswald whitespace-nowrap dark:text-white">Immobilia</span>
    </Link>
    
    <div class="w-full md:block md:w-auto" id="navbar-default">
    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {auth.user ? (
              <>
                <li>
                  <Link href={route('post.index')} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" >Home</Link>
                </li>
                <li>
                  <Link href={route('logout')} method="post" as="button" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">logout</Link>
                </li>
              </>
              ) : (
              <>
                <li>
                  <Link href={route('login')} class="border border-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log In</Link>
                </li>
                <li>
                  <Link href={route('register')} class="border border-white py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</Link>
                </li>
              </>
              )}
      </ul>
    </div>
  </div>
</nav>

<div className="font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-green-400 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Perfect Rental Home
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Explore properties that fit your lifestyle and budget.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <div>
      <section className="bg-gradient-to-r from-blue-500 to-green-400 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Wide Selection</h3>
              <p>Browse through thousands of rental listings in your preferred area.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Affordable Prices</h3>
              <p>Find homes that match your budget without compromising on quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Trusted Support</h3>
              <p>Our team is here to assist you throughout your renting journey.</p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Property Listings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example property card */}
            {posts.map((post,i) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md shadow-slate-300 overflow-hidden transform transition-all duration-300 hover:scale-105"
              >      
              <a href={route('login')}>
                <img
                  src={img[i % img.length]}
                  alt={`Property ${post}`}
                  className="w-full h-48 object-cover"
                />
              </a>
              
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{post.loctype} in {post.city}</h3>
                  <p className="text-sm text-gray-600 mb-4">{post.price}dh / month</p>
                  <a href={route('login')}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                    View Details
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

</>
  )
}

