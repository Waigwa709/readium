import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

