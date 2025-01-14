import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

export default function Index({ auth, posts, queryParams = null }) {
  queryParams = queryParams || {};

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("post.index"), queryParams);
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Index" />

      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen w-full h-full pt-6">
        <div id="searchbar" className="w-auto h-14 flex gap-5 justify-center">
          <div className="bg-white flex-col content-center rounded-full px-4 space-x-4 border border-gray-800">
            <span className="">City</span>
            <input
              className="border border-gray-500 rounded placeholder:italic pl-1 py-0.5"
              type="text"
              name="city"
              defaultValue={queryParams.city}
              onBlur={(e) => searchFieldChanged("city", e.target.value)}
              id="city"
              placeholder="search by city"
            />
            <button
              type="button"
              onClick={() => searchFieldChanged("city", queryParams.city)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              GO
            </button>
          </div>

          <div className="bg-white flex-row space-x-4 content-center rounded-full px-4 border border-gray-800">
            <span>Location Type</span>
            <select
              name="loctype"
              id="loctype"
              defaultValue={queryParams.loctype}
              onChange={(e) => searchFieldChanged("loctype", e.target.value)}
              className="border border-gray-500 rounded"
            >
              <option value="Room">Room</option>
              <option value="Studio">Studio</option>
              <option value="Apartment">Apartment</option>
            </select>
            <button
              type="button"
              onClick={() => searchFieldChanged("loctype", queryParams.loctype)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              GO
            </button>
          </div>

          <div className="bg-white flex-row content-center rounded-full gap-5 px-4 space-x-4 border border-gray-800">
            <span>Max Price</span>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="1500"
              defaultValue={queryParams.price}
              onBlur={(e) => searchFieldChanged("price", e.target.value)}
              className="border text-center border-gray-500 rounded w-[6rem]"
            />
            <button
              type="button"
              onClick={() => searchFieldChanged("price", queryParams.price)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              GO
            </button>
          </div>
        </div>

        <div className="w-full h-full mt-20 pl-[6.5rem] grid grid-cols-4 px-12 gap-8 justify-center content-center pb-36">
          {posts.data.length > 0 ? (
            posts.data.map((post) => (
              <div
                key={post.id}
                className="bg-white my-5 border border-gray-500 rounded-md h-[22rem] w-[16rem] transform transition-all duration-300 hover:scale-105"
              >
                <a href={route("post.show", post.id)}>
                <div id="img" className="justify-center px-1 py-1">
                  <img
                    src={post.img_path}
                    alt="room"
                    className="h-[12.5rem] w-[15.5rem]"
                  />
                </div>
                </a>

                <div className="flex space-x-1 bg-blue-800 w-[6.5rem] ml-2 py-1 rounded-full">
                  <span className="text-2xl font-oswald pl-4 text-white">
                    {post.price}
                  </span>
                  <span className="pt-2 font-bold text-white">DH</span>
                </div>
                <div className="flex mt-4 ml-3 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span className="font-oswald text-lg">{post.city}</span>
                </div>
                <div className="flex mt-3 mx-3 justify-between">
                  <div className='flex space-x-2'> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span className="font-oswald text-lg">{post.loctype}</span>
                  </div>
                  <div className="">
                    <a href={route("post.show", post.id)} className="flex">
                      <span className="font-oswald text-lg ml-[4rem]">
                        More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center text-3xl mt-36 text-gray-900 min-h-40">
              No posts available
            </div>
          )}
        </div>

        <div className="mb-16">
          <Pagination links={posts.meta.links} />
        </div>
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8" >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 Immobilia. All Rights Reserved.</p>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-400 mx-2 hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-400 mx-2 hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </AuthenticatedLayout>
  );
}
