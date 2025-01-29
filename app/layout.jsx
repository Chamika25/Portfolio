import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Buddika Kasun",
  description: "Portfolio of D.L. Buddika Kasun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon */}
        <link rel="icon" type="image/svg+xml" href="/assets/favicon/bk.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

      </head>
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}
