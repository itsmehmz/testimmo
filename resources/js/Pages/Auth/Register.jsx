import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen w-full flex justify-center">
    <form onSubmit={submit}>
        <div className="border-2 border-black bg-gradient-to-r from-gray-300 to-gray-500 rounded-3xl my-20 h-auto w-[35rem]">
            {/* Header */}
            <div className="items-center flex justify-center space-x-4 text-center font-oswald py-5 text-4xl border-2 border-b-black bg-white rounded-t-3xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
                <span>Sign In</span>
            </div>

            <div className='px-24'>
            {/* Input Fields */}
            <div className="mt-6 space-y-6">
                {/* Name Field */}
                <div className="flex flex-col">
                    <InputLabel htmlFor="name" value="Name" className="text-lg font-semibold mb-2" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg font-mono w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                    />
                    <InputError message={errors.name} className="mt-1 text-red-500 text-sm" />
                </div>

                <div className="flex flex-col">
                    <InputLabel htmlFor="phone" value="phone" className="text-lg font-semibold mb-2" />
                    <TextInput
                        id="phone"
                        type="phone"
                        name="phone"
                        value={data.phone}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg font-mono w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                    />
                </div>


                {/* Email Field */}
                <div className="flex flex-col">
                    <InputLabel htmlFor="email" value="Email" className="text-lg font-semibold mb-2" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg  font-mono w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                    />
                    <InputError message={errors.email} className="mt-1 text-red-500 text-sm" />
                </div>

                {/* Password Field */}
                <div className="flex flex-col">
                    <InputLabel htmlFor="password" value="Password" className="text-lg font-semibold mb-2" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg font-mono w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />
                    <InputError message={errors.password} className="mt-1 text-red-500 text-sm" />
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                        className="text-lg font-semibold mb-2"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg font-mono w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-1 text-red-500 text-sm"
                    />
                </div>
            </div>
            </div>
            {/* Footer Links and Buttons */}
            <div className="flex items-center justify-between my-8 mx-24">
                <Link
                    href={route('login')}
                    className="text-sm text-gray-700 hover:text-gray-900 underline focus:ring-2 focus:ring-indigo-500"
                >
                    Already registered?
                </Link>
                <PrimaryButton
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                    disabled={processing}
                >
                    Register
                </PrimaryButton>
            </div>
        </div>
    </form>
</div>

        </GuestLayout>
    );
}
