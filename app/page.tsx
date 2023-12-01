import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
// Header component

export default function Home() {
  return (
    <main className="">
      <Link href="/users">Users</Link>

      <section className="px-8 py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to GitHub
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            GitHub is a development platform inspired by the way you work. From
            <br />
            <strong className="text-gray-900">open source</strong> to
            <strong className="text-gray-900">business</strong>, you can host
            and review code, manage projects, and build software alongside
            millions of other developers.
          </p>
        </div>
      </section>
    </main>
  );
}
