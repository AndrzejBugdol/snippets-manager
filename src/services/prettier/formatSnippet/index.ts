import prettier from 'prettier-standalone';

import { getPrettierOptions } from '../getPrettierOptions';

export function formatSnippet(code: string, language: string) {
  const prettierOptions = getPrettierOptions(language);
  const formatedCode = prettier.format(code, prettierOptions);

  return formatedCode;
}
