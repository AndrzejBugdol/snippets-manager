import { Code as MantineCode } from '@mantine/core';

import { formatSnippet } from '@src/services/prettier';
import { SnippetType } from '@src/services/zod';

type CodeProps = {
  language: string | undefined;
  content: SnippetType['content'];
};

export function Code({ content, language }: CodeProps) {
  const formattedCode = formatSnippet(content, language);

  return <MantineCode block>{formattedCode}</MantineCode>;
}
