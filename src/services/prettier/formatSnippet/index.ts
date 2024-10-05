import prettier from 'prettier-standalone';

import { getPrettierOptions } from '../getPrettierOptions';

export function formatSnippet(code: string, language: string | undefined) {
  const prettierOptions = getPrettierOptions(language);
  const formatCode = () => {
    try {
      return prettier.format(code, prettierOptions);
    } catch {
      return code;
    }
  };

  const formatedCode = formatCode();
  return formatedCode;
}
