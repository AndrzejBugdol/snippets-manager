import { Snippets, SnippetsSchema } from '@src/services/zod';

import { saveSnippetsToLS } from './saveToLocalStorage';

export const saveSnippets = async (snippetsData: Snippets) => {
  const data = SnippetsSchema.parse(snippetsData);
  return await saveSnippetsToLS(data);
};
