import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-0 py-12">
        <section className="card">
          <h2 className="text-3xl font-extrabold">About Me</h2>
          <p className="mt-4 text-gray-300">
            I am Pratiksha Deshmukh — I combine AI research, product strategy
            and engineering to deliver systems that scale in enterprise
            contexts. I enjoy translating research into practical features that
            move business metrics.
          </p>

          <h3 className="mt-6 text-xl font-semibold">Highlights</h3>
          <ul className="mt-3 list-disc list-inside text-gray-300">
            <li>AI systems design and deployment at scale</li>
            <li>
              Cross-functional leadership between product, design, and
              engineering
            </li>
            <li>Experience building ML infra and model-driven products</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a
              href="/Pratiksha_Deshmukh_AI.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-purple-600 rounded-md text-white"
            >
              Download Resume
            </a>
            <a
              href="/portfolio"
              className="px-4 py-2 border border-white/10 rounded-md"
            >
              View portfolio (coming)
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
