import { SnippetsSchema } from '@src/services/zod';

import { getSnippetsFromLS } from './getFromLocalStorage';

export const getSnippets = async () => {
  const snippets = await getSnippetsFromLS();
  return SnippetsSchema.parse(snippets);
};
