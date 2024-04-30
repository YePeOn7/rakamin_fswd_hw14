"use client"
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import * as axiosModule from "@/lib/axios"

export default function CreateBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [year, setYear] = useState("");
    const [pages, setPages] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();

    const handleSubmit = async () => {
      // console.log("submit...");
      // console.log(title, author, publisher, year, pages, image);

      const fd = new FormData();
      fd.append("title", title);
      fd.append("author", author);
      fd.append("publisher", publisher);
      fd.append("year", year);
      fd.append("pages", pages);
      fd.append("image", image);

      const res = await axiosModule.createBook(fd);
      if(res){
        window.alert("Successfully Create a book");
        router.push("/");
      }
      else{
        window.alert("Fail to add book");
      }

      // console.log(fd.get("image"));

      // for (const [key, value] of fd.entries()) {
      //   console.log(key, value);
      // }
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center space-y-5 mt-10">
                <h1>Create Book</h1>
                <input type='text' className="border border-gray-500 rounded p-2" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                <input type='text' className="border border-gray-500 rounded p-2" placeholder='Author' onChange={(e) => setAuthor(e.target.value)} />
                <input type='text' className="border border-gray-500 rounded p-2" placeholder='Publisher' onChange={(e) => setPublisher(e.target.value)} />
                <input type='text' className="border border-gray-500 rounded p-2" placeholder='Year' onChange={(e) => setYear(e.target.value)} />
                <input type='text' className="border border-gray-500 rounded p-2" placeholder='Pages' onChange={(e) => setPages(e.target.value)} />
                <input type='file' className="border border-gray-500 rounded p-2" placeholder='Image' onChange={(e) => setImage(e.target.files[0])} />
                <button type='button' className="bg-blue-600 rounded max-w-32 p-2 text-white" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}
