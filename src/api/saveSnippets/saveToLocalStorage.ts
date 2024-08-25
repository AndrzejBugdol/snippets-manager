import { Snippets } from '@src/services/zod';

import { LOCAL_STORAGE_SNIPPETS_KEY } from '../constants';

export const saveSnippetsToLS = async (data: Snippets) => {
  try {
    return await chrome.storage.local.set({
      [LOCAL_STORAGE_SNIPPETS_KEY]: data,
    });
  } catch {
    throw new Error('Snippets Manager: Failed to save snippets data');
  }
};
