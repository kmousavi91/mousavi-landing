import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Production-Grade AI & Data Systems
              <br />
              <span className="text-blue-500">for Real Businesses</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300">
              We design, build, and deploy reliable machine learning and LLM solutions —
              from raw data to secure, scalable production systems.
            </p>

            <p className="mt-4 text-sm uppercase tracking-wide text-slate-400">
              Trusted experience from CERN, MIT, and enterprise-scale environments
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
              >
                Book a Free Consultation
              </a>

              <a
                href="#projects"
                className="px-8 py-3 rounded-xl border border-white/20 hover:border-white/40 transition font-medium"
              >
                View Selected Projects
              </a>
            </div>
          </motion.div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What We Help Companies Achieve
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <div className="bg-slate-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">
                Machine Learning Systems
              </h3>
              <p className="text-slate-300">
                High-accuracy ML systems for prediction, risk scoring,
                anomaly detection, and forecasting — designed for reliability,
                monitoring, and long-term use.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">
                Enterprise LLM Solutions
              </h3>
              <p className="text-slate-300">
                Private, secure LLM systems using your internal data —
                including RAG-based chatbots, document intelligence,
                and semantic search.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">
                Data Engineering & MLOps
              </h3>
              <p className="text-slate-300">
                Production-grade data pipelines, cloud infrastructure,
                CI/CD, monitoring, and automated retraining —
                the foundation AI systems depend on.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section className="py-24 px-6 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Companies Choose Us
            </h2>

            <ul className="mt-12 space-y-4 text-slate-300 text-lg">
              <li>• End-to-end ownership — from data ingestion to deployed APIs</li>
              <li>• Production-first mindset — reliability, scalability, monitoring</li>
              <li>• Proven experience in high-stakes environments (CERN, MIT)</li>
              <li>• Strong focus on business impact, not experimental demos</li>
            </ul>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Selected Projects
          </h2>

          <p className="mt-4 text-center text-slate-400">
            Simplified public versions of real-world systems
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div className="bg-slate-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">
                Financial Risk Prediction API
              </h3>
              <p className="text-slate-300">
                ML-based loan risk scoring system achieving 85%+ accuracy,
                enabling automated decision-making and reduced financial risk.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">
                LLM-Based Knowledge Assistant
              </h3>
              <p className="text-slate-300">
                Private RAG system allowing teams to query internal documents
                securely using natural language.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">
                Real Estate Price Forecasting
              </h3>
              <p className="text-slate-300">
                End-to-end ML pipeline delivering 91% prediction accuracy
                to support data-driven pricing strategies.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">
                Industrial Anomaly Detection
              </h3>
              <p className="text-slate-300">
                Rare-event detection models for high-noise environments,
                improving early fault detection and system reliability.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-24 px-6 bg-slate-900/40">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s Talk About Your Use Case
            </h2>

            <p className="mt-6 text-lg text-slate-300">
              If you’re exploring AI, machine learning, or LLMs — or struggling
              to move from experimentation to production — we’re happy to help.
            </p>

            <a
              href="https://calendly.com/kouroshmousavi1/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Book a Free 30-Minute Consultation
              </a>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-sm text-slate-500">
        © 2025 Mohammad Mousavi Technology • AI & Data Systems
      </footer>
    </div>
  );
}

