import { saveSnippets } from '.';
import { describe, expect, test, vi } from 'vitest';

import { SnippetsType } from '@src/services/zod';
import { mockedStorage } from '@src/tests/mockedStorage';
import { snippets, badSnippets } from '@src/tests/testSnippet.json';

import { saveSnippetsToLS } from './saveToLocalStorage';

describe('saveSnippets tests', () => {
  test("saveSnippetsToLS() should return error if couldn't load data", async () => {
    await expect(() => saveSnippetsToLS(snippets)).rejects.toThrowError();
  });

  test('saveSnippetsToLS() should set save snippets data into local storage', async () => {
    const chrome = mockedStorage<SnippetsType>(snippets);
    const spyGet = vi.spyOn(chrome.storage.local, 'set');

    await saveSnippetsToLS(snippets);

    expect(spyGet).toBeCalledTimes(1);
  });

  test('saveSnippets() checks structure of data and saves it to local storage', async () => {
    const chrome = mockedStorage<SnippetsType>(snippets);
    const spyGet = vi.spyOn(chrome.storage.local, 'set');

    await saveSnippets(snippets);

    expect(spyGet).toBeCalledTimes(1);
    expect(spyGet).not.toThrowError();
  });

  test('saveSnippets() checks structure of data and returns error if bad structure', async () => {
    mockedStorage<unknown>(snippets);

    await expect(() =>
      saveSnippets(badSnippets as SnippetsType),
    ).rejects.toThrowError();
  });
});
