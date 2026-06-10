import Header from "../components/Header";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

const items = [
  {
    role: "Senior AI Engineer",
    company: "Confidential",
    range: "2023 — Present",
    desc: "Leading model deployment and product integrations for enterprise clients.",
  },
  {
    role: "ML Engineer",
    company: "Confidential",
    range: "2020 — 2023",
    desc: "Built data pipelines and productionized ML workflows.",
  },
  {
    role: "Research Intern",
    company: "University Lab",
    range: "2019 — 2020",
    desc: "Published work on efficient ML models and prototyped applied systems.",
  },
];

export default function Career() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-0 py-12">
        <section className="card">
          <h2 className="text-3xl font-extrabold">Career Journey</h2>
          <p className="mt-3 text-gray-300">
            A condensed timeline of roles and impact — focused on shipping ML &
            AI features end-to-end.
          </p>

          <div className="mt-6">
            <Timeline items={items} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
