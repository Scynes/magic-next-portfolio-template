import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Container, Theme } from '@radix-ui/themes';
import { NavigationBar } from '@/components/core/navigation/navigation-bar';

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
                <Theme accentColor={ 'gray' } appearance={ 'dark' }>
                    <NavigationBar />
                    <Container size={ '4' }>
                        { children }
                    </Container>
                </Theme>
            </body>
        </html>
    );
}
