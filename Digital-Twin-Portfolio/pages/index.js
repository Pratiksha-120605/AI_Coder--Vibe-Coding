import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-[70vh]">
        <Hero />
        <section className="max-w-5xl mx-auto px-6 md:px-0 py-8 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-bold text-lg">What I do</h3>
            <p className="mt-2 text-gray-300 text-sm">
              I lead product & engineering work that operationalizes AI for
              enterprise workflows — from research prototypes to production
              services.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg">Approach</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Human-centered, metrics-driven, and pragmatic — I favor simplicity
              and measurable outcomes.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-lg">Contact</h3>
            <p className="mt-2 text-gray-300 text-sm">
              For collaborations, reach out via LinkedIn or email. Resume
              available for download.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
