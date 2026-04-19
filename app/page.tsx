"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- AI BACKGROUND ---------------- */
function AINetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

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
        "Analyzed HR datasets to identify attrition patterns and workforce trends using SQL, Python, and BI tools.",
      problem: [
        "Limited visibility into attrition patterns",
        "Disconnected HR datasets",
        "Manual reporting process"
      ],
      approach: [
        "SQL for data extraction and joins",
        "Python (Pandas) for cleaning and analysis",
        "Power BI / Tableau dashboards",
        "Exploratory Data Analysis (EDA)"
      ],
      insights: [
        "Attrition varies across tenure groups",
        "Department-level workforce differences exist",
        "Hiring trends show seasonal variation"
      ],
      impact: [
        "Improved HR reporting clarity",
        "Supported data-driven decisions",
        "Reduced manual analysis effort"
      ]
    },

    {
      title: "Business KPI & Workforce Dashboard Reporting",
      role: "Business Intelligence Analyst Intern",
      summary:
        "Built KPI dashboards to support workforce planning and business reporting.",
      problem: [
        "Fragmented HR and business data",
        "Manual Excel reporting delays",
        "No centralized KPI tracking"
      ],
      approach: [
        "SQL for KPI extraction",
        "Excel for data cleaning",
        "Power BI dashboards",
        "Basic KPI modeling"
      ],
      insights: [
        "Better visibility of workforce KPIs",
        "Improved reporting structure",
        "Clear hiring trend analysis"
      ],
      impact: [
        "Faster reporting cycles",
        "Improved decision support",
        "Structured KPI tracking"
      ]
    },

    {
      title: "HR Process Automation & Reporting System",
      role: "Data Analyst / Automation Intern",
      summary:
        "Automated HR reporting workflows using Python and Excel to improve efficiency.",
      problem: [
        "Time-consuming manual reporting",
        "Excel inconsistencies",
        "Formatting errors"
      ],
      approach: [
        "Python (Pandas) for processing",
        "Excel automation",
        "Basic data validation",
        "Workflow standardization"
      ],
      insights: [
        "Manual reporting inefficiency identified",
        "Need for automation confirmed",
        "Data consistency improved"
      ],
      impact: [
        "Reduced reporting time",
        "Improved accuracy",
        "Streamlined workflow"
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

        <div>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-3xl shadow-xl"
          />
        </div>

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
            <p>📧 Gmail: csahasrareddie09@gmail.com</p>
            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/sahasra-reddy-075002235"
                target="_blank"
                className="underline"
              >
                sahasra-reddy-075002235
              </a>
            </p>
          </div>

          <a
            href="/resume.pdf"
            className="inline-block mt-6 px-6 py-3 border border-black rounded-full"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">Case Studies</h2>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
            className="px-4 py-2 border rounded-full"
          >
            ← Prev
          </button>

          <button
            onClick={() =>
              setIndex((prev) => Math.min(prev + 1, caseStudies.length - 1))
            }
            className="px-4 py-2 border rounded-full"
          >
            Next →
          </button>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative h-[500px]">

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full"
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

      {/* CONTACT */}
      <section className="text-center py-20 border-t">
        <h2 className="text-2xl font-semibold">Get In Touch</h2>

        <p className="text-gray-600 mt-3">
          csahasrareddie09@gmail.com
        </p>

        <a
          href="https://www.linkedin.com/in/sahasra-reddy-075002235"
          target="_blank"
          className="underline text-gray-600"
        >
          LinkedIn Profile
        </a>
      </section>

    </main>
  );
}