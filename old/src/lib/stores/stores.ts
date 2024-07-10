import { writable } from 'svelte/store';

interface Helmet {
  preffixTitle: string;
  suffixTitle: string;
  author: string;
  keywords: string;
  description: string;
}

const tableData = writable<Helmet>({
  preffixTitle: 'Me',
  suffixTitle: 'Kinoko Monogatari',
  author: 'Usami Kinoko',
  keywords: 'personal site, blog, about',
  description: 'Kinoko Monogatari is his personal site, where he writes about his life, his thoughts, and his projects.',
});

export default tableData;