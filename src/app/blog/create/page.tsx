/* /app/blog/create/Page.tsx */

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const router = useRouter();
  
  // Ensure router is ready before executing client-side code
  useEffect(() => {
    if (!router.isReady) return;
    // Your logic here that requires the router
  }, [router.isReady]);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      router.push('/blog');
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Content:
          <textarea name="content" value={formData.content} onChange={handleChange} required />
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
