import { useRouter } from "next/router";
import { getCurrentTime } from "@/utils";

interface IPost {
  id: string;
  title: string;
  body: string;
}

export async function getStaticProps() {
  const time = getCurrentTime();
  const resp = await fetch("https://dummyjson.com/posts");
  const data = await resp.json();

  return {
    props: {
      posts: data.posts,
      time,
    },
  };
}

export default function Posts(props: { posts: IPost[]; time: string }) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/ssg/${id}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-lg mt-4">Static Post List - {props.time}</h1>
      <ul className="list-disc mt-4">
        {props.posts.map((item) => {
          return (
            <li
              className="hover:underline cursor-pointer"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              {`${item.id}-${item.title}`}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
