import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';

const extractDescription = () => {
  return (tree, file) => {
    let description = '';
    let foundMore = false;

    tree.children.some((node) => {
      if (node.type === 'html' && node.value === '<!--more-->') {
        foundMore = true;
        return true;
      }
      if (!foundMore) {
        description += node.value || '';
      }
      return false;
    });

    file.data.description = description.trim();
  };
};

export default extractDescription;
