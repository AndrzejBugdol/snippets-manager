import { LOCAL_STORAGE_SNIPPETS_KEY } from '../constants';

export const getSnippetsFromLS = async () => {
  try {
    return await chrome.storage.local.get(LOCAL_STORAGE_SNIPPETS_KEY);
  } catch {
    throw new Error('Snippets Manager: Failed to load snippets data');
  }
};
