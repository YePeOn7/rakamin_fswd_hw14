import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {hashPassword, comparePassword} from "@/lib/bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

const SECRET_KEY = "SECRET"

export const POST = async (req, {params}) => {
    try{
        const {email, password} = await req.json();
        console.log(email, password);
        
        const foundUser = await prisma.user.findUnique({ where: { email } });
        if(!foundUser)
        {
            throw {name: "InvalidCredentials"}
        }
        
        const passwordStatus = comparePassword(password, foundUser.password);
        
        if(passwordStatus){
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
            return NextResponse.json({message: "Wrong email or password"}, {status:400});
        }
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}