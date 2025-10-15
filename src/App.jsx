import React from "react";
import { motion } from "framer-motion";

// Single-file React + Tailwind component for GitHub Pages / Vite
// Default export a component that can be placed into src/App.jsx or similar.

const projects = [
  {
    title: "LLM Financial News Analysis",
    desc: "Fine-tuned LLM for real-time sentiment & signals from financial news.",
    link: "https://github.com/kmousavi91/LLM-Finance-ML",
  },
  {
    title: "Physics RAG Assistant",
    desc: "Retrieval-Augmented chatbot for scientific documents (RAG + FAISS).",
    link: "https://github.com/kmousavi91/physics-rag-assistant",
  },
  {
    title: "Loan Risk Prediction API",
    desc: "Production-ready scoring API used in finance pipelines.",
    link: "https://github.com/kmousavi91/loan_risk",
  },
  {
    title: "Driver Behavior Classification",
    desc: "Real-time telemetry classification for fleet safety and analytics.",
    link: "https://github.com/kmousavi91/Driver_Behavior",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-800 text-slate-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
                <path d="M12 3v18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
              </svg>
            </div>
            <div>
              <h1 className="font-semibold text-lg">Mohammad Mousavi Technology</h1>
              <p className="text-xs text-slate-300">AI, Data Engineering & LLM Solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#services" className="text-sm hover:underline">Services</a>
            <a href="#contact" className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <p className="text-sm text-slate-300">AI & Data Studio — Warsaw</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Turning data into intelligent action</h2>
            <p className="mt-6 text-slate-300 max-w-xl">I help companies build production-ready machine learning systems, LLM-powered assistants (RAG), and robust data platforms. Ex-CERN / MIT — delivering measurable business impact through automation, prediction, and production-grade MLOps.</p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="px-5 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg text-white font-medium">Let’s work together</a>
              <a href="#projects" className="px-5 py-3 rounded-md border border-white/10 text-white/90">View projects</a>
            </div>

            <div className="mt-8 text-sm text-slate-400">
              <strong>Contact:</strong> kouroshmousavi1@gmail.com • +48 721 390 185 • Warsaw, Poland
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }} className="relative">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white/6 to-white/3 border border-white/6 shadow-2xl">
              <h3 className="text-slate-100 font-semibold">Featured Service — RAG/LLM MVP</h3>
              <p className="mt-2 text-slate-300">Build a secure Retrieval-Augmented Generation assistant for your internal documents or customer-facing knowledge base. MVP in 2–4 weeks with hosting, embeddings, and API.</p>

              <ul className="mt-4 grid grid-cols-1 gap-3">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-indigo-700/40 rounded-md flex items-center justify-center">⚡</span>
                  <div>
                    <div className="text-sm font-medium">Fast Pilot</div>
                    <div className="text-xs text-slate-300">Pilot delivery in 2–4 weeks</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-indigo-700/40 rounded-md flex items-center justify-center">🔒</span>
                  <div>
                    <div className="text-sm font-medium">Private & Secure</div>
                    <div className="text-xs text-slate-300">Enterprise-ready vector search and hosting</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-indigo-700/40 rounded-md flex items-center justify-center">📈</span>
                  <div>
                    <div className="text-sm font-medium">Measurable ROI</div>
                    <div className="text-xs text-slate-300">Decrease support load, accelerate knowledge sharing</div>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a href="#contact" className="px-4 py-2 bg-white/8 rounded-md text-white text-sm hover:bg-white/12">Book a pilot</a>
                <a href="/proposal.pdf" className="px-4 py-2 border border-white/8 rounded-md text-white text-sm">Download brief</a>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-xl bg-gradient-to-br from-pink-500/30 to-purple-600/20 blur-lg" />
          </motion.div>
        </section>

        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <p className="text-slate-300 mt-2">Real code, deployed demos, and measurable outcomes. View the repositories on GitHub.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" whileHover={{ y: -6 }} className="block p-6 rounded-xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6">
                <h4 className="text-lg font-medium">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-4 text-xs text-slate-400">View on GitHub →</div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="services" className="mt-16">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/6">
              <h4 className="font-medium">AI & LLM Solutions</h4>
              <p className="mt-2 text-slate-300 text-sm">RAG assistants, domain-finetuning, prompt engineering, and secure hosting.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/6">
              <h4 className="font-medium">Data Science & ML</h4>
              <p className="mt-2 text-slate-300 text-sm">Predictive models, anomaly detection, feature engineering, and evaluation with uncertainty quantification.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/6">
              <h4 className="font-medium">Data Engineering</h4>
              <p className="mt-2 text-slate-300 text-sm">ETL, streaming, Snowflake/BigQuery integrations, and cloud data warehouses.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/6">
              <h4 className="font-medium">MLOps & Production</h4>
              <p className="mt-2 text-slate-300 text-sm">CI/CD, MLflow, monitoring, retraining pipelines, containerized deployment.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="text-slate-300 mt-2">I’m available for pilot projects, retainers, and technical partnerships.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
            <div className="text-sm text-slate-300">
              <p><strong>Email:</strong> kouroshmousavi1@gmail.com</p>
              <p className="mt-2"><strong>Phone:</strong> +48 721 390 185</p>
              <p className="mt-2"><strong>Location:</strong> Warsaw, Poland</p>

              <div className="mt-6 flex items-center gap-4">
                <a href="https://github.com/kmousavi91" target="_blank" rel="noreferrer" className="text-slate-100/90 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="text-slate-100/90 hover:underline">LinkedIn</a>
              </div>
            </div>

            <form className="p-6 bg-white/5 rounded-xl border border-white/6" action="https://formspree.io/f/your-form-id" method="POST">
              <label className="block text-xs text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md bg-transparent border border-white/10 px-3 py-2 text-white text-sm focus:outline-none" />

              <label className="block text-xs text-slate-300 mt-4">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md bg-transparent border border-white/10 px-3 py-2 text-white text-sm focus:outline-none" />

              <label className="block text-xs text-slate-300 mt-4">Message</label>
              <textarea name="message" rows={4} required className="mt-1 w-full rounded-md bg-transparent border border-white/10 px-3 py-2 text-white text-sm focus:outline-none" />

              <button type="submit" className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md font-medium">Send message</button>
            </form>
          </div>
        </section>

        <footer className="mt-24 py-8 border-t border-white/6 text-slate-400 text-sm">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Mohammad Mousavi Technology</div>
            <div>Built with ❤️ • React + Tailwind</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

