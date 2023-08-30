import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (data.username !== 'admin') {
    return NextResponse.json({
      code: '-2',
      msg: '账户不存在!'
    });
  }

  if (data.password !== '123') {
    return NextResponse.json({
      code: '-1',
      msg: '密码错误!'
    });
  }

  return NextResponse.json(
    {
      code: '0',
      msg: '登录成功!'
    },
    {
      headers: {
        'Set-Cookie': 'token=abcdefg'
      }
    }
  );
}
