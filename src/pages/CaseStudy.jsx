export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Case Study: Financial Risk Prediction System
        </h1>

        <p className="mt-6 text-slate-300 text-lg">
          This case study describes the design and deployment of a
          production-grade machine learning system used to automate
          loan risk assessment for a financial client.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-2">The Challenge</h2>
            <p className="text-slate-300">
              The client relied on manual and rule-based decision processes
              for loan approvals, resulting in inconsistent risk assessment,
              slow processing times, and increased exposure to default risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">The Solution</h2>
            <p className="text-slate-300">
              We designed an end-to-end machine learning pipeline that
              ingests structured financial data, performs feature engineering,
              trains predictive models, and exposes results via a secure API
              for real-time decision-making.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
            <ul className="list-disc list-inside text-slate-300">
              <li>Python, scikit-learn</li>
              <li>FastAPI for model serving</li>
              <li>Automated retraining & evaluation</li>
              <li>Cloud deployment with monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Results</h2>
            <ul className="list-disc list-inside text-slate-300">
              <li>85%+ prediction accuracy</li>
              <li>Automated loan decision workflow</li>
              <li>Reduced operational risk</li>
              <li>Faster approval times</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

