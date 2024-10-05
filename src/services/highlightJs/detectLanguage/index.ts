import hljs from 'highlight.js';

import { SUPPORTED_LANGUAGES } from '../constants';

export function detectLanguage(code: string) {
  const detectedLanguage = hljs.highlightAuto(
    code,
    SUPPORTED_LANGUAGES,
  ).language;

  if (!detectLanguage) {
    throw new Error('Failed to detect programming language');
  }

  return detectedLanguage;
}
