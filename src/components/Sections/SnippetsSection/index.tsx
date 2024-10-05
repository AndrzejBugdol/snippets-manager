import sampleSnippets from '@src/tests/testSnippet.json';

import { Snippet } from './Snippet';

export const SnippetsSection = () => {
  return (
    <>
      {sampleSnippets.snippets.map((snippet) => (
        <Snippet key={snippet.id} {...snippet} />
      ))}
    </>
  );
};
