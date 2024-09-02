import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// import "/public/css/bootstrap.css";
import "/public/css/style.css";
import "/public/css/color/blue.css";
import "/public/css/media.css";
import "/public/css/animate.css";
import "/public/css/font-awesome.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Million Riyal Journey",
  description: "",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <Head>
        <link
          href="http://fonts.googleapis.com/css?family=PT+Sans"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=PT+Serif"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <body className={inter.className}>
        {children}
        {/* <Script src="/public/js/jquery.js" strategy="beforeInteractive" />
        <Script
          src="/public/js/jquery-migrate.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/waypoints.js" strategy="lazyOnload" />
        <Script src="/js/scriptcontact.js" strategy="lazyOnload" />
        <Script src="/js/retina.js" strategy="lazyOnload" />
        <Script src="/js/scripts.js" strategy="lazyOnload" /> */}
      </body>
    </html>
  );
}
