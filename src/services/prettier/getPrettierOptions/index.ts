import parserBabel from 'prettier/parser-babel';
import parserHtml from 'prettier/parser-html';
import parserMarkdown from 'prettier/parser-markdown';
import parserCss from 'prettier/parser-postcss';
import parserTypescript from 'prettier/parser-typescript';
import parserYaml from 'prettier/parser-yaml';

export const getPrettierOptions = (language: string) => {
  switch (language) {
    case 'javascript':
    case 'js':
      return { parser: 'babel', plugins: [parserBabel] };
    case 'typescript':
      return { parser: 'typescript', plugins: [parserTypescript] };
    case 'html':
      return { parser: 'html', plugins: [parserHtml] };
    case 'css':
      return { parser: 'css', plugins: [parserCss] };
    case 'yaml':
      return { parser: 'yaml', plugins: [parserYaml] };
    case 'markdown':
      return { parser: 'markdown', plugins: [parserMarkdown] };
    default:
      return null;
  }
};
