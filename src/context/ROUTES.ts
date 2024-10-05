import { CreateSection } from '@src/components/Sections/CreateSection';
import { SearchSection } from '@src/components/Sections/SearchSection';
import { SnippetsSection } from '@src/components/Sections/SnippetsSection';

export const ROUTES = {
  snippets: SnippetsSection,
  search: SearchSection,
  create: CreateSection,
} as const;

export type Routes = keyof typeof ROUTES;
