"use client"
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    // const router = useRouter();

    const handleSubmit = async () => {
        // console.log(name, email, password);
        // try {
        //     await login({ email, password });
        //     Swal.fire({
        //         icon: "success",
        //         title: "Login Successful!",
        //         text: "Login Success!",
        //     });
        //     router.push("/")
        // } catch (error) {
        //     console.log("Something went wrong!", error)
        //     Swal.fire({
        //         icon: "error",
        //         title: "Invalid Username or Password!",
        //         text: "Please enter the correct username or password!",
        //     });
        // }
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center space-y-5 mt-10">
                <h1>Register</h1>
                <input type='text' className="border border-gray-500 rounded p-2" placeholder='Enter Name...' onChange={(e) => setName(e.target.value)} />
                <input type='email' className="border border-gray-500 rounded p-2" placeholder='Enter Email...' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' className="border border-gray-500 rounded p-2" placeholder='Enter Password...' onChange={(e) => setPassword(e.target.value)} />
                <button type='button' className="bg-blue-600 rounded max-w-32 p-2 text-white" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}
