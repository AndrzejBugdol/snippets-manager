import { ActionIcon, Group } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';

const iconVariant = {
  primary: {
    variant: 'gradient',
    size: 'sm',
    'aria-label': 'Gradient action icon',
    gradient: {
      from: 'blue',
      to: 'green',
      deg: 121,
    },
  },
  danger: {
    variant: 'gradient',
    size: 'sm',
    'aria-label': 'Gradient action icon',
    gradient: {
      from: 'red',
      to: 'pink',
      deg: 103,
    },
  },
};

export function SnippetActions() {
  return (
    <Group justify="flex-end" gap="xs">
      <ActionIcon {...iconVariant.primary}>
        <IconPencil size={18} />
      </ActionIcon>
      <ActionIcon {...iconVariant.danger}>
        <IconTrash size={18} />
      </ActionIcon>
    </Group>
  );
}
