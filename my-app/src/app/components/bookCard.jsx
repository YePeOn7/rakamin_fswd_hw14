"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

function BookCard({ id, title, author, image, publisher, year }) {


    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`/book/${id}`}>
                <img className="rounded-t-lg" src={image} alt="" style={{ width: "100%", height: "300px" }} />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{year}</p>
                </div>
            </a>
        </div>


    );
}

export default BookCard;
