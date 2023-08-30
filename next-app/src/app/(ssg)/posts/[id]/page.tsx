import { Suspense } from 'react';
import Link from 'next/link';

// paegs router - getStaticPaths - fallback
// fallback 属性就可以控制没有预渲染的页面应该展示回退加载中页面、404页面还是在请求时动态生成页面
export const dynamicParams = true;

// ssg
export async function generateStaticParams() {
  // 获取所有可能的 id
  // const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await resp.json();
  // const paths = (data.posts as IPost[]).map((item) => ({
  //   params: { id: item.id.toString() },
  // }));
  const paths = [{ id: '1' }, { id: '2' }, { id: '3' }];
  return paths;
}

function loading(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

async function getPost(id: string) {
  //  缓存 getStaticProps - revalidate
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 }
  });
  const data = await resp.json();
  return data;
}

export default async function PostDetail({
  params
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getPost(id);
  return (
    <div className="bg-white rounded p-4 w-[600px] h-[800px]">
      <Link href="/posts" className="underline">
        Go Back
      </Link>
      <h1 className="text-lg my-4 text-blue-600">{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
}
