import type { Metadata } from "next";
import localFont from "next/font/local";
import { Container, Theme } from '@radix-ui/themes';
import { NavigationBar } from '@/components/core/navigation/navigation-bar';

import "./globals.css";
import { GridBackground } from '@/components/core/grid-background';
import { ThemeProvider } from 'next-themes';

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Magic Next.JS Portfolio Template",
    description: "Next.JS portfolio template built with Magic UI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute='class'>
                    <Theme accentColor={ 'gray' }>
                        <GridBackground />
                        <NavigationBar />
                        <Container size={ '2' } className={ 'p-3 sm:p-0' }>
                            { children }
                        </Container>
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    );
}
