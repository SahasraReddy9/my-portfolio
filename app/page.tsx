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

    const animate = () => {
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
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}

/* ---------------- PAGE ---------------- */
export default function Page() {
  const [index, setIndex] = useState(0);

  const caseStudies = [
    {
      title: "HR Analytics: Attrition & Workforce Insights",
      role: "Data Analytics Intern (HR Domain)",
      summary:
        "Analyzed HR datasets to understand attrition patterns, workforce distribution, and hiring trends using SQL and Python.",
      problem: [
        "Limited visibility into employee attrition",
        "Scattered HR data across systems",
        "Manual reporting process"
      ],
      approach: [
        "SQL for data extraction and joins",
        "Python (Pandas) for analysis",
        "Power BI dashboards",
        "Exploratory Data Analysis"
      ],
      insights: [
        "Higher attrition in early-tenure employees",
        "Certain departments show higher turnover",
        "Hiring trends vary seasonally"
      ],
      impact: [
        "Improved HR reporting clarity",
        "Faster decision-making",
        "Reduced manual reporting effort"
      ]
    },
    {
      title: "KPI Dashboard for Workforce Analytics",
      role: "Business Intelligence Analyst Intern",
      summary:
        "Built KPI dashboards to track workforce and business performance for leadership reporting.",
      problem: [
        "No centralized KPI tracking",
        "Manual Excel reporting",
        "Inconsistent performance tracking"
      ],
      approach: [
        "SQL KPI extraction",
        "Excel cleaning",
        "Power BI dashboards"
      ],
      insights: [
        "Clear visibility into KPIs",
        "Better tracking of hiring trends",
        "Data inconsistencies identified"
      ],
      impact: [
        "Faster reporting cycles",
        "Better decision-making",
        "Standardized KPI tracking"
      ]
    },
    {
      title: "HR Reporting Automation System",
      role: "Data Analyst Intern",
      summary:
        "Automated HR reporting workflows using Python and Excel, improving speed and accuracy.",
      problem: [
        "Manual reporting delays",
        "Excel inconsistencies",
        "No standard process"
      ],
      approach: [
        "Python (Pandas) automation",
        "Excel workflow optimization",
        "Data validation checks"
      ],
      insights: [
        "Automation reduces workload",
        "Data quality improved",
        "Reporting became consistent"
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

        <img
          src="/profile.jpg"
          alt="profile"
          className="w-72 h-72 object-cover rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl font-semibold">About Me</h2>

          <p className="mt-4 text-gray-600">
            I turn raw data into business insights using analytics, dashboards, and automation.
          </p>

          <div className="mt-6">
            <p>📧 csahasrareddie09@gmail.com</p>
            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/sahasra-reddy-075002235"
                className="underline"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">Case Studies</h2>
        </div>

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

        <div className="max-w-5xl mx-auto px-6 relative h-[500px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
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

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

    </main>
  );
}