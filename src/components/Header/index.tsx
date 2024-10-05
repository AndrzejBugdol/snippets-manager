import { Button, Container, Group, Title } from '@mantine/core';
import { useState, MouseEvent } from 'react';

import styles from './styles.module.css';

const buttons = [
  { label: 'Snippets' },
  { label: 'Search' },
  { label: 'Create' },
];

export const Header = () => {
  const [active, setActive] = useState(buttons[0]?.label);

  const handleLinkClick = (e: MouseEvent, label: string) => {
    e.preventDefault();
    setActive(label);
  };

  const items = buttons.map(({ label }) => (
    <Button
      key={label}
      data-active={active === label || undefined}
      onClick={(e) => handleLinkClick(e, label)}>
      {label}
    </Button>
  ));

  return (
    <header>
      <Container size="md" className={styles.container}>
        <Title>Snippets Manager</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
};
