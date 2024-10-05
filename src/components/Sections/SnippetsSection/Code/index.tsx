import { Code as MantineCode } from '@mantine/core';

import { detectLanguage } from '@src/services/highlightJs/detectLanguage';
import { formatSnippet } from '@src/services/prettier/formatSnippet';
import { SnippetType } from '@src/services/zod';

export function Code({ content }: Pick<SnippetType, 'content'>) {
  const language = detectLanguage(content) ?? '';
  const formattedCode = formatSnippet(content, language);

  return <MantineCode block>{formattedCode}</MantineCode>;
}
