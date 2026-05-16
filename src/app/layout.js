import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AgriNova",
  description: "AI Powered Smart Agriculture Platform",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className="bg-green-50">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>

          {children}

        </main>

        {/* Footer */}
        <Footer />

      </body>

    </html>

  );

}