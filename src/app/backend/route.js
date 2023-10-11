import { NextResponse } from "next/server";
import { user } from "../util/db";

export function GET (){ 
return NextResponse.json(user,{status:200})
}

export async function POST (request){
    let payload = await request.json()
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"require field not found", success: false},{status:404})
    }
    return NextResponse.json({request:'new user created',success:true},{status:201})
}