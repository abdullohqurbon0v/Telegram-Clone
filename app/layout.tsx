import { ChildProps } from "@/types";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
    title: "Telegram",
    description: "Telegram is a cloud-based instant messaging service.",

};

export default function RootLayout({ children }: ChildProps) {
    return (
        <html lang="en">
            <body
                className={`${spaceGrotesk.variable} `}
            >
                {children}
            </body>
        </html>
    );
}
