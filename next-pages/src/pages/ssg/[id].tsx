import { useRouter } from "next/router";
import { getCurrentTime } from "@/utils";

interface IPost {
  id: string;
  title: string;
  body: string;
}

export async function getStaticPaths() {
  // 获取所有可能的 id
  // const resp = await fetch("https://dummyjson.com/posts");
  // const data = await resp.json();
  // const paths = (data.posts as IPost[]).map((item) => ({
  //   params: { id: item.id.toString() },
  // }));
  const paths = [{ params: { id: "1" } }];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const id = params.id;
  const resp = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await resp.json();
  const time = getCurrentTime();

  return {
    props: {
      post,
      time,
    },
  };
}

export default function PostDetail(props: { post: IPost; time: string }) {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center pt-10">
      <button className="underline" onClick={() => router.back()}>
        Go Back
      </button>
      <h1 className="text-lg">
        {props.post.title} - {props.time}
      </h1>
      <p className="w-1/2 break-all">{props.post.body}</p>
    </main>
  );
}
