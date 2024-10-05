import { Card, Title, Badge, Stack } from '@mantine/core';

import { detectLanguage } from '@src/services/highlightJs/detectLanguage';
import { SnippetType } from '@src/services/zod';

import { Code } from '../Code';
import { SnippetActions } from '../SnippetActions';

import styles from './styles.module.css';

export const Snippet = ({ title, content, language }: SnippetType) => {
  const contentLanguage = language || detectLanguage(content);

  return (
    <Card withBorder radius="md" shadow="sm">
      <Card.Section className={styles.titleSection}>
        <Stack gap={'xs'}>
          <Title size={16}>{title}</Title>
          <Badge size="xs">{contentLanguage}</Badge>
        </Stack>
        <SnippetActions />
      </Card.Section>
      <Card.Section>
        <Code content={content} language={contentLanguage} />
      </Card.Section>
    </Card>
  );
};
