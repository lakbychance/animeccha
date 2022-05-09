import { Html, Head, Main, NextScript } from "next/document";
import { animes } from '../config/anime'

const animeTitles = animes.map((anime) => anime.title).join(', ');

const Document = () => {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://ik.imagekit.io" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/manifest.json" />
                <title>Animeccha</title>

                <meta name="title" content="Animeccha" />
                <meta name="description" content="Scroll through awesome anime moments" />

                {/*<!-- Open Graph / Facebook -->*/}
                <meta property="og:title" content="Animeccha" />
                <meta
                    property="og:description"
                    content="Scroll through awesome anime moments"
                />
                <meta property="og:url" content="https://animeccha.com" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://ik.imagekit.io/lapstjup/animeccha/animeccha_og.png"
                />

                {/* <!-- Twitter -->*/}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://animeccha.com" />
                <meta property="twitter:title" content="Animeccha" />
                <meta
                    property="twitter:description"
                    content="Scroll through awesome anime moments"
                />
                <meta
                    property="twitter:image"
                    content="https://ik.imagekit.io/lapstjup/animeccha/animeccha_og.png"
                />
                <meta name="twitter:site" content="@lakbychance" />
                <meta name="twitter:creator" content="@lakbychance" />

                {/* Others */}
                <meta name="keywords" content={animeTitles} />
                <meta name="author" content="Lakshya Thakur" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
export default Document;
