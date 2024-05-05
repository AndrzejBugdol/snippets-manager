import { SnippetSchema } from '@src/services/zod';

import { LOCAL_STORAGE_SNIPPETS_KEY } from '../constants';

export const getSnippets = () => {
  try {
    const data = chrome.storage.local
      .get(LOCAL_STORAGE_SNIPPETS_KEY)
      .then((data) => SnippetSchema.parse(data.json()))
      .catch(() => {
        throw new Error(
          'Snippets Manager: Failed to load snippets data. Wrong data structure',
        );
      });
    return data;
  } catch {
    throw new Error('Snippets Manager: Failed to load snippets data');
  }
};
