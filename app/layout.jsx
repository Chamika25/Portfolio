import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";

// Components
import Header from '@/components/Header';
import PageTransition from '@/components/pageTransition';
import StairTransition from '@/components/StairTransition';
import ParticlesBackground from '@/components/ParticlesBackground';
import CustomCursor from '@/components/CustomCursor';
import CustomScroll from '@/components/CustomScroll';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of D.L. Buddika Kasun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable} >
        <ParticlesBackground />
        <CustomCursor />
        <StairTransition />
        <Header />
        <CustomScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </CustomScroll>
      </body>
    </html>
  );
}
