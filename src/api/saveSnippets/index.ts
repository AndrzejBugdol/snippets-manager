import { SnippetSchema } from '@src/services/zod';
import { Snippets } from '@src/types';

import { LOCAL_STORAGE_SNIPPETS_KEY } from '../constants';

export const saveSnippets = (snippetsData: Snippets) => {
  try {
    const data = SnippetSchema.parse(snippetsData);
    chrome.storage.local
      .set({ [LOCAL_STORAGE_SNIPPETS_KEY]: data })
      .catch(() => {
        throw new Error(
          'Snippets Manager: Failed to save snippets data. Wrong data structure',
        );
      });
  } catch {
    throw new Error('Snippets Manager: Failed to save snippets data');
  }
};
