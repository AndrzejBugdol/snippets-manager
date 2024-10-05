import { z } from 'zod';

export const SnippetSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(3),
  description: z.string().optional(),
  content: z.string(),
});

export const SnippetsSchema = z.array(SnippetSchema);

export type SnippetType = z.infer<typeof SnippetSchema>;
export type SnippetsType = SnippetType[];
