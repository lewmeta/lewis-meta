import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const res = NextResponse.next();

    res.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');

    return res;
}