import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="zh-TW" className="scroll-smooth">
    <Head />
    <body className="bg-white text-black antialiased dark:bg-black/0 dark:text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
