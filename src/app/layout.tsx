import "./globals.css";
import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";

export const metadata = {
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}