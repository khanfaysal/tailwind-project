import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useState} from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { context } from "../../App";



const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Photos", href: "/", current: false },
    { name: "Illustrations", href: "/", current: false },
    { name: "Videos", href: "/", current: false },
    // { name: 'Projects', href: '/', current: false },
    // { name: 'Calendar', href: '/', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const {isDarkMode, setIsDarkMode} = useContext(context);

  const handleDarkMode = () =>{
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('dark-mode', !isDarkMode);
  }

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50 shadow-lg">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faBars}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    {/* <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://i.ibb.co/nw7WTT1/image.png"
                      alt="logo"
                    /> */}
                    <h6 className="text-green-400 text-4xl font-bold">Pixel</h6>
                    <div className="hidden lg:block h-8 w-auto flex items-center text-white">
                      {/* <h6 className='text-green-400 text-4xl font-bold'>Pixel</h6> */}
                    </div>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white uppercase"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white uppercase",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div className='flex items-center'>
                          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-3">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://i.ibb.co/Db1FpSv/HI-THERE-2.png"
                              alt=""
                            />
                          </Menu.Button>
                            <DarkModeToggle
                            onChange={handleDarkMode}
                            checked={isDarkMode}
                            size={60}
                            speed={1.6}
                          />
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        ></Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white uppercase"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white uppercase",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default NavBar;
