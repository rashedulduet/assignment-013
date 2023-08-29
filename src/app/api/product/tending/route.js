import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function GET(req, res){
    let headerList= headers();
    let user_id=headerList.get('user_id');
    return NextResponse.json({mag:user_id})
}

export async function POST(req, res){


    return NextResponse.json(
        
        
        [
            {name: "Rashedul", age:36, email:"rashedulduet2@gmail.com"},
            {name: "Nishi", age:3, email:"nishi@gmail.com"},
            {name: "Nahiyan", age:18, email:"anNahiyanIslam@gmail.com"}, 

        ], 
        {   
            status:200,
            headers:{'token1':"nishi",
             "token":"nahiyan",
             "Set-Cookie":"Auth=1566;path=/;"}
        }
    );
}
//working with response body 