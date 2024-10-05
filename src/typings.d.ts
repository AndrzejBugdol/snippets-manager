declare module '*.css' {
  const styles: Record<string, string>;
  export default styles;
}

declare module 'prettier-standalone';
declare module 'prettier/*';
