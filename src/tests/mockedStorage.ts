import { MockedObject, vi } from 'vitest';

export const mockedStorage = <T>(data?: T) =>
  (global.chrome = {
    storage: {
      local: {
        get: vi.fn(() => data),
        set: vi.fn(),
      },
    },
  } as unknown as MockedObject<typeof chrome>);
