"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const Navbar = ({currentActive}) => {
    const router = useRouter();
    const [isLogedIn, setIsLogedIn] = useState(false);
    useEffect(() => {
        console.log(">>>", currentActive);
        const token = window.localStorage.getItem("token");
        if (token) {
            setIsLogedIn(true);
        }
      }, []);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Book Store</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                </button>
                <div className="block w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className={`block py-2 px-3 text-gray-100 ${currentActive === 'Home' ? " bg-blue-700 rounded" :  "text-gray-100 rounded hover:bg-blue-900"}`}>Home</a>
                        </li>
                        {/* <li>
                            <a href="#" className={`block py-2 px-3 text-gray-100 ${currentActive === 'View Book' ? " bg-blue-700 rounded" :  "text-gray-100 rounded hover:bg-blue-900"}`}>View Books</a>
                        </li> */}
                        <li>
                            <a href="/createbook" className={`block py-2 px-3 text-gray-100 ${currentActive === 'Create Book' ? " bg-blue-700 rounded" :  "text-gray-100 rounded hover:bg-blue-900"}`}>Create Books</a>
                        </li>
                        <li>
                            <a href="/login" className={`block py-2 px-3 text-gray-100 ${currentActive === 'Login' ? " bg-blue-700 rounded" :  "text-gray-100 rounded hover:bg-blue-900"}`}>{isLogedIn? 'Logout' : 'Login'}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
