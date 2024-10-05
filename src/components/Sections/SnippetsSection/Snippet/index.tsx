import { Card, Title } from '@mantine/core';

import { SnippetType } from '@src/services/zod';

import { Code } from '../Code';

export const Snippet = ({ title, content }: SnippetType) => {
  return (
    <Card withBorder radius="md">
      <Card.Section>
        <Title size={16}>{title}</Title>
      </Card.Section>
      <Card.Section>
        <Code content={content} />
      </Card.Section>
    </Card>
  );
};
