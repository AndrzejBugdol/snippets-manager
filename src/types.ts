export type Snippet = {
  id: string;
  title: string;
  description: string | null;
  content: string | null;
};

export type Snippets = Snippet[];
