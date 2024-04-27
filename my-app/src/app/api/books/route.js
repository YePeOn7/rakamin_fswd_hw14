import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {hashPassword, comparePassword} from "@/lib/bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { uploadFile } from "@/lib/uploadFile";

export async function POST(req, {params}){
    try{
        const fd = await req.formData();
        const title = fd.get("title");
        const author = fd.get("author");
        const publisher = fd.get("publisher");
        const year = +fd.get("year");
        const pages = +fd.get("pages");
        const image = fd.get("image");

        const imagePath = await uploadFile(image, "/images")
        console.log(imagePath);

        const addedBook = await prisma.book.create({
            data:{
                title,
                author,
                publisher,
                year,
                pages,
                image: imagePath
            }
        })

        return NextResponse.json(addedBook);
       
    } catch(e) {
        console.log(e);
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}