import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

export const metadata = {
  title: "Readium | Premium Physical Book Lending SaaS",
  description: "Experience physical books with digital SaaS convenience. Personalized plans, collectible bookmarks, and reading challenge rewards.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ScrollRevealObserver />
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

