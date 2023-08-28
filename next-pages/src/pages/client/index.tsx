import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCurrentTime } from "@/utils";

interface IPost {
  id: string;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [time, setTime] = useState("");
  const router = useRouter();

  const fetchData = () => {
    setTime(getCurrentTime());
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json.posts));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id: string) => {
    router.push(`/client/${id}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-lg mt-4">Cilent Post List - {time}</h1>
      <ul className="list-disc mt-4">
        {posts.map((item) => {
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
