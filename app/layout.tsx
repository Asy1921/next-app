import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const Header = () => {
  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-200 hover:text-gray-400">
              <FaGithub fontSize={24} />
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-200 hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/repositories"
              className="text-gray-200 hover:text-gray-400"
            >
              Repositories
            </Link>
          </li>
          <li>
            <Link href="/users" className="text-gray-200 hover:text-gray-400">
              Users
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
};
// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-1000 py-4 fixed bottom-0 w-full border-t-2 border-gray-500">
      <p className="text-center text-gray-500">
        © {new Date().getFullYear()} Git Hub
      </p>
    </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />{" "}
      </body>
    </html>
  );
}
