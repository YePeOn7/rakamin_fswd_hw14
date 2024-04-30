"use client"
import Navbar from "@/app/components/navbar";
import * as axiosModule from "@/lib/axios"
import { useEffect, useState } from "react";

export default function BookDetail({ params }) {
    const { id } = params;
    const [book, setBook] = useState({
        title: "",
        author: "",
        publisher: "",
        year: "",
        pages: "",
        image: ""
    })
    useEffect(() => {
        async function fetchBookDetail(id) {
            const res = await axiosModule.getBookDetail(id);
            console.log("c>>>>", res);
            setBook(res);
            console.log(book)
        }

        fetchBookDetail(id);
    }, []);

    useEffect(() => {
        console.log(book);
    }, [book])

    return (
        <>
            <Navbar currentActive="Home" />
            { book.title != "" > 0 && 
                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

                    <div id="profile"
                        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

                        <div className="p-4 md:p-12 text-center lg:text-left">
                        
                            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')" }}></div>

                            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{book.title}</h1>
                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
                            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">{book.year}</p>
                            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{book.author}</p>
                            <p className="pt-2 text-sm">{book.publisher}</p>
                        </div>

                    </div>

                    <div className="w-full lg:w-2/5">
                        <img src={book.image} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>

                    </div>

                </div>
            
            }
        </>
    );
}
