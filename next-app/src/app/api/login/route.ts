import { NextRequest, NextResponse } from 'next/server';

export const POST = (request: NextRequest) => {
  return NextResponse.json(
    {
      code: '0',
      msg: 'success'
    },
    {
      headers: {
        'Set-Cookie': 'token=abc'
      }
    }
  );
};
