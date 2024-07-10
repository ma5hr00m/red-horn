import type { PageLoad } from './$types';

interface PostMetadata {
  title: string;
  date: string;
}

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`);
  const { title, date }: PostMetadata = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date
  };
};