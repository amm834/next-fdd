import "~/styles/globals.css";
import Providers from "@/providers";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Create Next FDD",
    description:
        "Simple monorepo with shared packages for web apps using Next.js",
    openGraph: {
        title: "Create Next FDD",
        description:
            "Simple monorepo with shared packages for web apps using Next.js",
        url: "https://aungmyatmoe.me",
        siteName: "Create Next FDD",
    },
    twitter: {
        card: "summary_large_image",
        site: "@aungmyatmoe_",
        creator: "@aungmyatmoe_",
    },
    metadataBase: new URL("https://aungmyatmoe.me"),
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
