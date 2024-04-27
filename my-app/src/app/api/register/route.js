import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken"
import {hashPassword, comparePassword} from "@/lib/bcrypt"
import { cookies } from "next/headers";

const SECRET_KEY = "SECRET"

export const POST = async (req, {params}) => {
    try{
        const {name, email, password} = await req.json();
        console.log(name, email, password);
        const hashedPassword = hashPassword(password);

        const newUser = await prisma.user.create({
            data: {
            name,
            email,
            password: hashedPassword,
            },
        });
        return NextResponse.json({newUser}, {status:200});
    } catch(e) {
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}