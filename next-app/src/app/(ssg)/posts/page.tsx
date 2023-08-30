import Link from 'next/link';

async function getPosts() {
  //  ssg getStaticProps - revalidate
  // const resp = await fetch('https://jsonplaceholder.typicode.com/posts');

  // {
  //   next: { revalidate: 60 }
  // }

  // ssr getServerSideProps
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
  });

  const data = await resp.json();
  return data;
}

export default async function Posts() {
  const posts: IPostData[] = await getPosts();

  return (
    <div className="pt-10">
      <h1 className="text-lg my-4 text-blue-600">Static Post List </h1>
      <ul className="list-disc">
        {posts.map(item => {
          return (
            <li className="hover:underline cursor-pointer" key={item.id}>
              <Link href={`/posts/${item.id}`} prefetch={false}>
                {`${item.id}-${item.title}`}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
