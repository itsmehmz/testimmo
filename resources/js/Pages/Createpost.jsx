import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function CreatePost(props) {

        const{data , setData, post} = useForm({
            city: '',
            loctype: '',
            price: '',
            surface: '',
            address: '',
            description: '',
        });

        const submit = (e) => {
            e.preventDefault();
        };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="CreatePost" />
    
    <div className='bg-gradient-to-r from-indigo-500 to-sky-500 min-h-screen w-full flex justify-center'>
        <form onSubmit={submit}>
            <div className='border bg-gray-300 border-black rounded-3xl mt-10 h-auto w-[35rem] mb-12 '>
                <div className='text-center flex justify-center items-center space-x-4 font-oswald py-5 text-4xl bg-white rounded-t-3xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <span>Create post</span>
                </div>

                <div className='mx-10 my-2 font-oswald text-xl items-center justify-center'>

                    <div className='grid grid-cols-2 space-x-2 '>
                        <div className='grid gap my-4 space-y-2 '>
                            <label className='ml-2'>City</label>
                            <input type="text" value={data.city} onChange={e=>setData('city',e.target.value)} name="city" id="city" className='border border-black rounded-3xl text-center font-mono'  />
                        </div>

                        <div className='grid gap my-4 space-y-2' >
                            <label className='ml-2'>Location Type</label>
                            <select name="loctype" id="loctype" value={data.loctype} onChange={e=>setData('loctype',e.target.value)} className='border border-black rounded-3xl text-center font-mono'>
                                <option value="1r">Room</option>
                                <option value="2r">Studio</option>
                                <option value="3r">Apartement</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-2 space-x-2'>
                        <div className='grid gap my-4 space-y-2'>
                            <label className='ml-2'>Price <span className='text-sm'>(DH)</span></label>
                            <input type="number" name="price" id="price" value={data.price} onChange={e=>setData('price',e.target.value)} className='border border-black rounded-3xl text-center font-mono' />
                        </div>
                        
                        <div className='grid gap my-4 space-y-2'>
                            <label className='ml-2'>Surface <span className='text-sm'>(m2)</span></label>
                            <input type="number" name="surface" id="surface" value={data.surface} onChange={e=>setData('surface',e.target.value)} className='border border-black rounded-3xl text-center font-mono' />
                        </div>
                    </div>

                    <div className='grid gap my-4 space-y-2'>
                        <label className='ml-2'>Address</label>
                        <textarea name="address" id="address" value={data.address} onChange={e=>setData('address',e.target.value)} className='px-1 border border-black font-light'></textarea>
                    </div>

                    <div className='grid gap my-4 space-y-2'>
                        <label className='ml-2'>Description</label>
                        <textarea name="description" id="description" value={data.description} onChange={e=>setData('description',e.target.value)} className='px-1 border border-black font-light'></textarea>
                    </div>
                </div>

                <div id='imgupl' className='mx-10 grid gap my-4 space-y-2 font-oswald text-xl '>
                    <label className='ml-2'>Upload Image</label>
                    <label for="uploadFile1"
                    class="bg-white text-gray-500 font-semibold text-base rounded flex flex-col items-center justify-center w-full cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                        <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000" />
                        <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000" />
                    </svg>
                    <span>Upload file</span>
                    <input type="file" id='uploadFile1' class="hidden" />
                    <p class="text-xs font-medium text-gray-400 mt-2">only PNG and JPG.</p>
                    </label>
                </div>

                <div id='btns' className='flex justify-evenly my-5'>
                <button className='border border-black bg-green-500 text-xl font-mono rounded-2xl w-24 h-10' type="submit">Submit</button> 
                <button className='border border-black bg-slate-400 text-xl font-mono rounded-2xl w-24 h-10' type="reset">Cancel</button>
                </div>

            </div>
        </form>
    </div>
    
        </AuthenticatedLayout>
    );
}

