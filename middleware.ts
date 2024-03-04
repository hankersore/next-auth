
import { NextRequest, NextResponse } from "next/server";


export let user: string = ''; 

export function middleware(request: NextRequest) {
   

    if (!user) {
        return NextResponse.redirect(
            new URL('/', request.url).toString()
        );
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/products'],
};
