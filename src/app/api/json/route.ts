// export const GET = () =>{
//     return new Response("OK")
// }

import { NextRequest } from "next/server";

export const POST =async (req:NextRequest)=>{
const body=await req.text()

console.log("body",body)
return new Response("OK")
}