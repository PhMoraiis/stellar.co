import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.svg" />
        <title>Stellar — Desenvolvimento de Software Personalizado</title>
        <meta name="description" content="A Stellar é uma empresa especializada em desenvolvimento de software personalizado para atender às necessidades exclusivas de cada cliente. Entre em contato conosco para saber mais." />
        <meta name="keywords" content="desenvolvimento de software, software personalizado, soluções tecnológicas, inovação, tecnologia" />
        <meta name="author" content="Philipe Morais" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
