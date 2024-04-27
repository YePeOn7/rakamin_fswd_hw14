import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

const SECRET_KEY = "SECRET"

export const POST = async (req, {params}) => {
    try{
        const {email, password} = await req.json();
        console.log(email, password);
        
        const foundUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(!foundUser)
        {
            throw {name: "InvalidCredentials"}
        }

        const comparePassword = bcrypt.compareSync(password, foundUser.password);

        if(comparePassword){
            console.log("Masooook");
            // Create access token
            const accessToken = jwt.sign({
                id: foundUser.id,
                email: foundUser.email
            }, SECRET_KEY);

            console.log(accessToken);
            // setup cookies
            cookies().set({
                name: "accessToken",
                value: accessToken,
                maxAge: 60 * 60 * 24 * 7
            })
            // kirim response
            return NextResponse.json({
                message: "Login Success!",
                accessToken
            })
        }
        else {
            throw {name: "InvalidCredentials"}
        }

    } catch(e) {
        if(e.name === "InvalidCredentials"){
            return NextResponse.json({message: "Wrong email or password"})
        }
        return NextResponse.json({message: "Internal Server Error"});
    }
}