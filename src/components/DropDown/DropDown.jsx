import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import ThemeBtn from '../Button/ThemeBtn';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function DropDown({ dropdown }) {
    const [isOpen, setIsOpen] = useState(false);

    // Check if any option has title 'Account'
    const hasAccountOption = dropdown.title === 'Account';

    return (
        <Menu as="div" className="relative inline-block text-left border-none " onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-sans text-gray-900 hover:text-yellow-500 border-none dark:text-white  dark:bg-gray-800 dark:border-gray-700">
                {dropdown.icon}
                <p className='hidden md:flex'> {dropdown.title}</p>
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <Transition
                show={isOpen}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 font-sans"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="py-1">
                        {dropdown.options.map((option, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <Link to={option.href}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'flex  px-4 py-4 text-md font-semibold items-center gap-2'
                                        )}>
                                        {option.icon} {option.title}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                        {/* Conditional rendering of logout option */}
                        {hasAccountOption && (
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'flex w-full gap-2 px-4 py-4 text-left text-md font-semibold items-center'
                                        )}
                                        onClick={() => {
                                            // handle logout action
                                            console.log('Logging out...');
                                        }}
                                    >
                                        <IoLogOutOutline className="h-6 w-6" /> Logout
                                    </button>
                                )}
                            </Menu.Item>
                        )}
                        <Menu.Item>
                            <ThemeBtn className='flex  px-4 py-4 text-md font-semibold items-center gap-2'/>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
