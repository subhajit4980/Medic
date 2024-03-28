import React from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { useState } from 'react';

function Login(props) {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }
    return (
        <div>
            <section>
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative flex items-end m-10 md:justify-center lg:px-10 lg:pb-24">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full rounded-md object-cover "
                                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=100&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md shadow-xl"></div>
                        <div className="relative">
                            <div className="w-full max-w-xl p-2 xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                                <h3 className="text-4xl font-bold text-white">
                                    Your One-Stop Shop for Medical Products
                                </h3>
                                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white">Wide Range of Medical Products</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white">Secure Online Transactions</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white">Expert Product Recommendations</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white">Fast and Reliable Delivery</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                Sign In
                            </h2>
                            <p class="mt-2 text-base text-gray-600">
                                Don't have an account?{" "}
                                <a
                                    href="/signup"
                                    title=""
                                    class="font-medium text-black transition-all duration-200 hover:underline"
                                >
                                    Sign Up
                                </a>
                            </p>
                            <form action="#" method="POST" class="mt-8">
                                <div class="space-y-5">
                                    <div>
                                        <label for="email" class="text-base font-medium text-gray-900">
                                            {" "}
                                            Email address{" "}
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <label
                                                for="password"
                                                class="text-base font-medium text-gray-900"
                                            >
                                                {" "}
                                                Password{" "}
                                            </label>
                                        </div>
                                        <div class="mt-2 relative">
                                            <input
                                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type={type}
                                                placeholder="Password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="current-password"
                                            />
                                            <span class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleToggle}>
                                                <Icon icon={icon} size={25} />
                                            </span>
                                        </div>

                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Let's Go{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="ml-2"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;