import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto px-6 md:px-0 py-12">
        <section className="card">
          <h2 className="text-3xl font-extrabold">Portfolio (Coming Soon)</h2>
          <p className="mt-4 text-gray-300">
            This section will showcase selected projects, case studies, and
            outcomes. For now, you can download the resume or contact me for
            details.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
