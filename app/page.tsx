"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- AI BACKGROUND ---------------- */
function AINetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#000";
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}

/* ---------------- PAGE ---------------- */
export default function Page() {
  const [index, setIndex] = useState(0);

  const caseStudies = [
    {
      title: "HR Attrition Analysis & Workforce Insights",
      role: "Data Analytics Intern (HR Domain)",

      summary:
        "Conducted end-to-end workforce analytics to identify key drivers of employee attrition and recruitment inefficiencies. Integrated HR datasets, built KPI models, and delivered dashboards to support data-driven retention strategies.",

      tools: [
        "SQL (Joins, Aggregations)",
        "Python (Pandas, NumPy)",
        "Power BI, Tableau",
        "Excel",
        "Data Modeling"
      ],

      problem: [
        "No visibility into attrition drivers",
        "Fragmented HR datasets",
        "Manual reporting delays"
      ],

      approach: [
        "Joined datasets using SQL",
        "Cleaned data using Python",
        "Performed trend & pattern analysis",
        "Built dashboards for KPIs",
        "Applied data validation checks"
      ],

      insights: [
        "High attrition in early tenure employees",
        "Department-level patterns identified",
        "Recruitment bottlenecks found"
      ],

      impact: [
        "Enabled proactive HR decisions",
        "Improved workforce visibility",
        "Faster decision-making"
      ]
    },

    {
      title: "Business KPI & Workforce Dashboard",
      role: "Business Intelligence Analyst Intern",

      summary:
        "Built KPI dashboards by converting business requirements into structured data models. Centralized workforce and operational reporting to improve leadership visibility and decision-making.",

      tools: [
        "SQL",
        "Power BI",
        "Excel",
        "KPI Modeling",
        "Git"
      ],

      problem: [
        "No centralized KPI tracking",
        "Manual Excel reports",
        "Inconsistent data"
      ],

      approach: [
        "Built KPI models",
        "Extracted data using SQL",
        "Created dashboards in Power BI",
        "Validated data quality"
      ],

      insights: [
        "Clear workforce KPI visibility",
        "Improved reporting consistency",
        "Better performance tracking"
      ],

      impact: [
        "Reduced reporting time",
        "Enabled real-time insights",
        "Improved business decisions"
      ]
    },

    {
      title: "HR Process Automation System",
      role: "Data Analyst Intern",

      summary:
        "Automated HR reporting workflows using Python and Excel to reduce manual effort, improve data accuracy, and standardize reporting processes.",

      tools: [
        "Python (Pandas)",
        "Excel Automation",
        "Data Validation",
        "Workflow Automation"
      ],

      problem: [
        "Manual reporting was slow",
        "Excel errors frequent",
        "No standard workflow"
      ],

      approach: [
        "Automated processing using Python",
        "Built Excel templates",
        "Added validation checks",
        "Standardized workflows"
      ],

      insights: [
        "Manual work was bottleneck",
        "Automation reduced errors",
        "Standardization improved consistency"
      ],

      impact: [
        "Saved reporting time",
        "Improved accuracy",
        "Streamlined operations"
      ]
    }
  ];

  return (
    <main className="bg-white text-black relative">

      <AINetworkBackground />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-semibold">
          Hi, I’m Sahasra Reddy 👋
        </h1>

        <p className="mt-4 text-gray-600">
          Data Analyst | BI Analyst | Business Analyst
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-72 h-72 object-cover rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl font-semibold">About Me</h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I am a data-driven thinker who enjoys solving business problems through analytics.<br /><br />
            I transform raw data into meaningful insights.<br /><br />
            I work with HR and business intelligence datasets.<br /><br />
            I focus on continuous learning and practical solutions.<br /><br />
            My goal is evidence-based decision making.
          </p>

          <div className="mt-6 text-gray-700">
            <p>📧 csahasrareddie09@gmail.com</p>
            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/sahasra-reddy-075002235"
                target="_blank"
                className="underline"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20">

        <h2 className="text-4xl text-center font-semibold mb-10">
          Case Studies
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="px-4 py-2 border rounded-full"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setIndex((i) => Math.min(i + 1, caseStudies.length - 1))
            }
            className="px-4 py-2 border rounded-full"
          >
            Next
          </button>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >

              <h3 className="text-2xl font-semibold">
                {caseStudies[index].title}
              </h3>

              <p className="text-gray-500">
                {caseStudies[index].role}
              </p>

              <p className="mt-4 text-gray-700">
                {caseStudies[index].summary}
              </p>

              {/* TOOLS */}
              <h4 className="font-semibold mt-6">Tools Used</h4>
              <ul className="list-disc ml-5 text-gray-600">
                {caseStudies[index].tools.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>

              <div className="grid md:grid-cols-2 gap-8 mt-8">

                <div>
                  <h4 className="font-semibold">Problem</h4>
                  <ul className="list-disc ml-5 text-gray-600">
                    {caseStudies[index].problem.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mt-4">Approach</h4>
                  <ul className="list-disc ml-5 text-gray-600">
                    {caseStudies[index].approach.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Insights</h4>
                  <ul className="list-disc ml-5 text-gray-600">
                    {caseStudies[index].insights.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mt-4">Impact</h4>
                  <ul className="list-disc ml-5 text-gray-600">
                    {caseStudies[index].impact.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

    </main>
  );
}