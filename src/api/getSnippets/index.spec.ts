import { describe, expect, test, vi } from 'vitest';

import { getSnippets } from '.';

import { Snippets } from '@src/services/zod';
import { mockedStorage } from '@src/tests/mockedStorage';
import { snippets, badSnippets } from '@src/tests/testSnippet.json';

import { getSnippetsFromLS } from './getFromLocalStorage';
import { LOCAL_STORAGE_SNIPPETS_KEY } from '../constants';

describe('getSnippets tests', () => {
  test("getSnippetsFromLS() should return error if couldn't load data", async () => {
    await expect(getSnippetsFromLS).rejects.toThrowError();
  });

  test('getSnippetsFromLS() should be called with specific key and return data', async () => {
    const chrome = mockedStorage<Snippets>(snippets);
    const spyGet = vi.spyOn(chrome.storage.local, 'get');

    await getSnippetsFromLS();

    expect(spyGet).toHaveBeenCalledWith(LOCAL_STORAGE_SNIPPETS_KEY);
    expect(spyGet).toReturnWith(snippets);
  });

  test('getSnippets() checks structure of data in storage and returns it', async () => {
    const chrome = mockedStorage<Snippets>(snippets);
    const spyGet = vi.spyOn(chrome.storage.local, 'get');

    await getSnippets();

    expect(spyGet).toReturnWith(snippets);
  });

  test('getSnippets() checks structure of data in storage and returns error if bad structure', async () => {
    mockedStorage<unknown>(badSnippets);

    await expect(getSnippets).rejects.toThrowError();
  });
});
