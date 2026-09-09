import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white px-5 py-6 text-black">
      {/* Navbar */}
      <header className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl">
          Elevate
        </Link>

        {/* Navigation */}
        <nav className="flex gap-4 text-sm">
          <Link href="/about">about</Link>
          <Link href="/services">services</Link>
          <Link href="/work">work</Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </header>

      {/* Hero content */}
      <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <div className="mb-6 h-10 w-10 rounded-full border border-[#d6d83c]">
          <div className="mx-auto mt-3 h-3 w-3 bg-[#d6d83c]" />
        </div>

        <p className="text-6xl">our</p>

        <h1 className="font-serif text-8xl font-bold text-[#d6d83c]">Work</h1>

        <p className="mt-6 text-sm text-black/60">
          Comprehensive case-studies. Exceptional Results
        </p>
      </div>
    </section>
  );
}
