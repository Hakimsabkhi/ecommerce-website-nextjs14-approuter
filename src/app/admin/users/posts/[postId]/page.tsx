// src/app/admin/users/posts/[postId]/page.tsx
import { use } from 'react';
import { useRouter } from 'next/router';

interface PostPageProps {
  params: {
    postId: string;
  };
}

async function fetchPostData(postId: string) {
  // Replace with your data fetching logic
  const res = await fetch(`https://api.example.com/posts/${postId}`);
  const data = await res.json();
  return data;
}

export default function PostPage({ params }: PostPageProps) {
  const post = use(fetchPostData(params.postId));
  
  return (
    <div>
      <h1>Post ID: {post.id}</h1>
      <p>{post.content}</p>
    </div>
  );
}
