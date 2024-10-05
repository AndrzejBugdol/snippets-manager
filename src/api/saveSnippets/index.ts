import { SnippetsType, SnippetsSchema } from '@src/services/zod';

import { saveSnippetsToLS } from './saveToLocalStorage';

export const saveSnippets = async (snippetsData: SnippetsType) => {
  const data = SnippetsSchema.parse(snippetsData);
  return await saveSnippetsToLS(data);
};
