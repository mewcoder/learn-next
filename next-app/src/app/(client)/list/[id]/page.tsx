'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function Detail() {
  const [data, setData] = useState<IPostData>();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = () => {
      if (!id) return;
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => resp.json())
        .then(data => setData(data));
    };
    fetchData();
  }, [id]);

  return (
    <div className="bg-white rounded p-4 w-[600px] h-[800px] text-center">
      <h1 className="text-lg">{data?.title}</h1>
      <p className="mt-4">{data?.body}</p>
    </div>
  );
}
