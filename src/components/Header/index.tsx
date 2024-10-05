import { Button, Container, Group, Title } from '@mantine/core';
import { MouseEvent } from 'react';

import { Routes, ROUTES } from '@src/context/ROUTES';
import { useRouterContext } from '@src/context/UseRouterContext';

import styles from './styles.module.css';

export const Header = () => {
  const { onChangeTab } = useRouterContext();

  const handleLinkClick = (e: MouseEvent, label: Routes) => {
    e.preventDefault();
    onChangeTab(label);
  };

  const items = Object.keys(ROUTES).map((label) => (
    <Button key={label} onClick={(e) => handleLinkClick(e, label as Routes)}>
      {label.toLocaleUpperCase()}
    </Button>
  ));

  return (
    <header>
      <Container size="md" className={styles.container}>
        <Title>Snippets Manager</Title>
        <Group gap={5}>{items}</Group>
      </Container>
    </header>
  );
};
