"use client"
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import * as axiosModule from "@/lib/axios"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const token = await axiosModule.login(email, password);
    if(token)
    {
      localStorage.setItem("accessToken", token);
      window.alert("Successfully Logged In");
    }
    else
    {
      window.alert("fail to login");
    }
    router.push("/")
  }

  return (
    <>
      <Navbar currentActive="Login" />
      <div className="flex flex-col items-center space-y-5 mt-10">
        <h1>Login</h1>
        <input type='email' className="border border-gray-500 rounded p-2" placeholder='Enter Email...' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' className="border border-gray-500 rounded p-2" placeholder='Enter Password...' onChange={(e) => setPassword(e.target.value)} />
        <button type='button' className="bg-blue-600 rounded max-w-32 p-2 text-white" onClick={handleSubmit}>Login</button>
        <p className="mr-2">{"Don't have an account?"} <a href="/register" className="text-blue-500">Register</a></p>
      </div>
    </>
  );
}
