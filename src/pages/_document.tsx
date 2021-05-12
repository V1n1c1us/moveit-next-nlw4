import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
          <Html>
            <Head>
              <link rel="shortcut icon" href="favicon.png" type="image/png"/>
              <script data-ad-client="ca-pub-5551676193326146" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />]

              <script dangerouslySetInnerHTML={{
                __html: `
              <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-5551676193326146"
              data-ad-slot="5190525340"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
         <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
         </script>
              ;
              `}}
            />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
    }
