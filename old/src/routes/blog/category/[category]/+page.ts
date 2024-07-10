import type { PageLoad } from './$types';

interface Post {
  meta: {
    categories: string[];
  };
}

export const load: PageLoad = async ({ fetch, params }) => {
  const { category } = params;

  const response = await fetch('/api/posts');
  const posts: Post[] = await response.json();

  return {
    category,
    posts: posts.filter((post) => post.meta.categories.includes(category))
  };
};