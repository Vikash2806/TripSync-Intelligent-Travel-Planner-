import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: "Arklyte Travell planner",
  description: "This app is powered by bright data!",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
