import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: " Ministry of Industry, Mines, and Solid Minerals",
  description: "The Ministry of Industry, Mines, and Solid Minerals in Imo State is responsible for overseeing and developing the state's industrial sector, as well as managing its mineral resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
