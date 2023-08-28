import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IPost {
  id: string;
  title: string;
  body: string;
}

export default function PostDetail() {
  const [data, setData] = useState<IPost>();
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    const fetchData = () => {
      if (!id) return;
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    };
    fetchData();
  }, [id]);

  return (
    <main className="flex min-h-screen flex-col items-center pt-10">
      <button className="underline" onClick={() => router.back()}>
        Go Back
      </button>
      <h1 className="text-lg">{data?.title}</h1>
      <p className="w-1/2 break-all">{data?.body}</p>
    </main>
  );
}
