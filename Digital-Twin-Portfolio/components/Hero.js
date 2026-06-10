import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-0 py-12">
      <div className="hero-gradient card grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Enterprise-grade impact, with an edge.
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl">
            I design and build AI-first products that scale across
            organizations, translating complex problems into elegant, measurable
            solutions.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/about"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium"
            >
              About me
            </Link>
            <Link
              href="/portfolio"
              className="px-5 py-2 border border-white/10 rounded-md text-sm"
            >
              Portfolio (coming)
            </Link>
          </div>
        </div>
        <div className="p-6">
          <div className="rounded-xl overflow-hidden">
            <div className="w-full h-56 bg-gradient-to-tr from-[#7c3aed]/40 to-[#06b6d4]/25 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-2xl font-semibold">Pratiksha Deshmukh</div>
                <div className="text-sm mt-1 text-gray-200">
                  AI Researcher • Product Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
