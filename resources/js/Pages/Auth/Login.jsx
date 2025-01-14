import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
        <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 min-h-screen w-full flex justify-center pt-12'>
            <form onSubmit={submit}>
            <div className='border-2 border-black bg-gradient-to-br from-slate-100 to-gray-600 rounded-3xl mt-20 h-[25rem] w-[32rem] '>
                <div className='items-center flex justify-center space-x-4 text-center font-oswald py-5 text-4xl border-2 border-b-black bg-white rounded-t-3xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>Log In</span>
                </div>

                    <div className='grid grid-row-2 space-x-5 text-2xl justify-center font-oswald pt-5 px-6'>
                        <div className='flex items-center justify-evenly pl-12 space-x-3 my-4 space-y-2 '>
                            <InputLabel className='text-2xl' htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-[15rem]"
                                autoComplete="username"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className='flex items-center justify-evenly space-x-3 my-4 space-y-2'>
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-[15rem]"
                                autoComplete="current-password"
                                onChange={handleOnChange}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div>
                          
                            <div className="flex items-center justify-between mt-12">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="underline text-base text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}

                                <PrimaryButton className="" disabled={processing}>
                                    Log in
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>        
            </form>
        </div>
        </GuestLayout>
    );
}
