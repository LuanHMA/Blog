"use server";

import { Post } from "@/types/post";
import { client } from "../../../sanity/lib/client";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts);

  return (
    <div className="min-h-screen w-full bg-slate-900 p-10">
      <h1 className="text-3xl text-white">Postagens</h1>

      <div className="flex items-center justify-start gap-4 my-10">
        {posts.map((post, index) => {
          return (
            <div
              className="bg-slate-800 p-4 text-white rounded-md space-y-2"
              key={index}
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm">{post.excerpt}</p>
              <span className="text-xs">
                Postada em: {new Date().toLocaleDateString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
