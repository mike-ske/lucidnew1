import type { Metadata } from "next";
import { Hanken_Grotesk, Moderustic } from "next/font/google";

import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});


const moderustic = Moderustic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-moderustic",
});


export const metadata: Metadata = {
  title: "HaboeTrade | Trusted Investment & Online Trading Platform",
  description:
    "HaboeTrade is a modern online investment and trading platform offering secure trading solutions, market insights, financial growth opportunities, and professional investment services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} ${moderustic.variable}`}>
        {children}

        {/* Tawk.to Live Chat script (so it works in the Tradebro/Next app pages) */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();(function() {var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0]; s1.async = true; s1.src = 'https://embed.tawk.to/69e9166db60f3a1c3c5a30e3/1jmr7v7i7'; s1.charset = 'UTF-8'; s1.setAttribute('crossorigin', '*'); s0.parentNode.insertBefore(s1, s0); })();`,
          }}
        />
      </body>
    </html>
  );
}

