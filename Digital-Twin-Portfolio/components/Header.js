import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white">
          PD
        </div>
        <div>
          <h1 className="text-lg font-semibold">Pratiksha Deshmukh</h1>
          <p className="text-xs text-gray-400">AI · Product · Engineering</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 text-sm text-gray-200">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/career">Career</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/chat">Career AI</Link>
        <a
          href="/Pratiksha_Deshmukh_AI.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border border-white/10 rounded-md text-sm"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
