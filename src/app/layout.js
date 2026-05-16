import "./globals.css";
import Navbar from "../components/Navbar";

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
        {children}

        {/* Footer */}
        <footer className="bg-green-900 text-white py-10 mt-20">

          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">

            <div>

              <h2 className="text-3xl font-bold">
                AgriNova
              </h2>

              <p className="mt-3 text-green-200">
                Smart agriculture powered by AI technology.
              </p>

            </div>

            <div className="flex gap-8 text-lg">

              <a href="#" className="hover:text-green-300 transition">
                Privacy
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Terms
              </a>

              <a href="#" className="hover:text-green-300 transition">
                Contact
              </a>

            </div>

          </div>

        </footer>

      </body>

    </html>
  );
}