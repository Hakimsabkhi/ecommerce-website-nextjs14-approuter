"use client";
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    postId: string;
  };
}

async function fetchPostData(postId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data;
}

export default function PostPage({ params }: PostPageProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostData(params.postId).then(data => {
      setPost(data);
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching post data:', error);
      setLoading(false);
    });
  }, [params.postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.data.title}</h1>
      <p>{post.data.content}</p>
    </div>
  );
}
