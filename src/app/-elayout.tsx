import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./[locale]/header";
import Footer from "./[locale]/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Students Savior",
  description: "Created by RA3Dx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

/*export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return children;
}
*/
