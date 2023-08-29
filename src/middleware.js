import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { Redirect } from "next/navigation"

export default function middleware(req, res) {
  if(req.nextUrl.pathname.startsWith('/api/product')){
        // const reqHeader=new Headers(req.headers);
        // // const token=requestHeader.get('token');
        // // if(token==='123-asd'){
        // //     return NextResponse.next()
        // // }
        // // else{
        // //     return NextResponse.json({massage:'fail'},{status:401})
        // // }
        // reqHeader.set('user_id','0001');  
        // return NextResponse.next({
        //     request:{headers:reqHeader}
        // })

        const res=NextResponse.next()
        res.headers.set('dksjfls','rash')
        return res
  }
//   else if(req.nextUrl.pathname.startsWith('/cartList')){
//     console.log('this is cartList dir');
//     return NextResponse.next()
// }
}
// export const config={
//     matcher:['/api/:path*', '/cartList/']
// }