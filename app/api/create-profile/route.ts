import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma"

export async function POST(){
    try {
        const clerkuser = await currentUser();
        if (!clerkuser){
            return NextResponse.json({error:"Unauthorized, user not found!!",status:404})
        }
        const email = clerkuser.emailAddresses[0].emailAddress;
        if(!email){
            return NextResponse.json({error:"Email not found!!"},{status:400})
        }
    
        const profile = await prisma?.profile.findUnique({
            where:{
                userId:clerkuser.id
            },
        })
    
        if(profile){
            return NextResponse.json({message:"Profile already exists!!",status:400})
        }
    
        await prisma.profile.create({
            data:{
                userId:clerkuser.id,
                email,
                name:clerkuser.fullName || clerkuser.firstName || clerkuser.lastName || "User",
                subscriptionTier: null,
                subscriptionActive:false,
            },
        })
    
        return NextResponse.json({message:"Profile created successfully!!"},{status:201})
    } catch (error) {
        return NextResponse.json({error:"Internal Server Error!!",status:500})
    }

}


