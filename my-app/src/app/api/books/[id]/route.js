import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req, {params}){
    try{
        const {id} = params;
        const data = await req.json();

        const changedBook = await prisma.book.update({
            where:{
                id: +id
            },
            data
        })

        return NextResponse.json(changedBook);
    } catch(e) {
        console.log(e);
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}