import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req, {params}){
    const {id} = params;
    try {
        const data = await prisma.book.findUnique({
            where:{
                id: +id
            }
        });

        return NextResponse.json(data, {status: 200})
    } catch(err) {
        console.log(err);
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})
    }
}

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

export async function DELETE(req, {params}){
    try{
        const {id} = params;

        const deletedBook = await prisma.book.delete({
            where:{
                id: +id
            }
        })

        return NextResponse.json(deletedBook);
    } catch(e) {
        console.log(e);
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}

