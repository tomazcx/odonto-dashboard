import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {

    if (req.nextUrl.pathname.startsWith('/dashboard'))
        if (req.cookies.get('nextauth.token') === undefined)
            return NextResponse.redirect(new URL('/', req.url))

}