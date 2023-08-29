import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// GET
export async function GET(req, res){
    redirect('/')
    const {searchParams}=new URL(req.url); //work with request param
    let name=searchParams.get('name')
    let value=searchParams.get('value')
    return NextResponse.json({name:name, value:value})
}
// POST
export async function POST(req, res){
    const reqBody= await req.json() 
    //working with json request body 

  
    return NextResponse.json({massage: reqBody.name})
}
// PUT
export async function PUT(req, res){
    const formData= await req.formData() // working with formData requset body
    let name=formData.get("name")
    let age=formData.get("age")
    let mobile=formData.get("mobile")
    return NextResponse.json({mas:name,
         age:age,
        mobile:mobile})
}
// PATCH
export async function PATCH(req, res){
    const headerList=headers(); //working with requrest headers
         let mycookies= req.cookies.get('Cookie_2').value //working with requrest cookies set in header
    let sequrityKey=headerList.get('myKey')
    return NextResponse.json({mySecurity_Key_is : sequrityKey, mycookies:mycookies})
}
// DELETE
export async function DELETE(req, res){
    return NextResponse.json({msg: 'I am delete'})
}