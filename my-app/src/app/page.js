"use client"
import Image from "next/image";
import Navbar from "./components/navbar";
import * as axiosModule from "@/lib/axios"
import { useEffect, useState } from "react";
import BookCard from "./components/bookCard";

export default function Home() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    async function fetchBook() {
      const res = await axiosModule.getAllBooks();
      // console.log("c>>>>", res);
      setBooks(res);
    }

    fetchBook();
  }, []);

  return (
    <>
      <Navbar currentActive="Home" />
      <div className="grid grid-cols-4 gap-4 m-10">
        {
          books.map((item) => (
            <BookCard key={item.id} {...item} />
          ))
        }
      </div>
    </>
  );
}
