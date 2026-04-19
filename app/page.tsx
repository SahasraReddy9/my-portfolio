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
      vy: (Math.random() - 0.5) * 0.5,
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
      title: "HR Attrition Analysis & Workforce Insights",
      role: "Data Analytics Intern (HR Domain)",
      summary:
        "Analyzed HR datasets to identify attrition patterns, workforce behavior, and hiring trends using SQL, Python (Pandas), and BI tools.",
      tools: "SQL, Python, Pandas, Power BI, Tableau, Excel",
      problem:
        "Organizations lacked visibility into why employees leave and how workforce patterns change over time.",
      approach:
        "Cleaned HR datasets, built KPI models using SQL, performed EDA in Python, and created dashboards in Power BI/Tableau.",
      insights:
        "Attrition is higher in early tenure employees and specific departments show consistent turnover patterns.",
      impact:
        "Helped HR teams improve retention strategies and reduce manual reporting effort.",
    },

    {
      title: "Business KPI & Workforce Dashboard Reporting",
      role: "Business Intelligence Analyst Intern",
      summary:
        "Built KPI dashboards for workforce planning, hiring trends, and business performance tracking.",
      tools: "SQL, Excel, Power BI, Tableau",
      problem:
        "Business data was fragmented across multiple systems with no centralized KPI tracking.",
      approach:
        "Created KPI frameworks, extracted data using SQL, cleaned datasets in Excel, and built dashboards.",
      insights:
        "Clear visibility of workforce metrics improved decision-making speed.",
      impact:
        "Reduced reporting time and improved leadership decision-making.",
    },

    {
      title: "HR Process Automation & Reporting System",
      role: "Data Analyst / Automation Intern",
      summary:
        "Automated HR reporting workflows using Python and Excel to improve speed and accuracy.",
      tools: "Python, Pandas, Excel Automation",
      problem:
        "Manual reporting was slow, repetitive, and prone to errors.",
      approach:
        "Built Python scripts for automation, cleaned datasets using Pandas, and standardized reporting workflows.",
      insights:
        "Automation significantly reduces human error and improves consistency.",
      impact:
        "Reduced reporting time and improved accuracy of HR reports.",
    },
  ];

  return (
    <main className="bg-white text-black relative">
      <AINetworkBackground />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-semibold">Hi, I’m Sahasra Reddy 👋</h1>
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
            Data analyst focused on HR, business intelligence, and automation
            workflows. I transform raw data into actionable insights.
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
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full"
            >
              <h3 className="text-2xl font-semibold">
                {caseStudies[index].title}
              </h3>

              <p className="text-gray-500">{caseStudies[index].role}</p>

              <p className="mt-4 text-gray-700">
                {caseStudies[index].summary}
              </p>

              <div className="mt-6 text-sm text-gray-600">
                <p><b>Tools:</b> {caseStudies[index].tools}</p>
                <p><b>Problem:</b> {caseStudies[index].problem}</p>
                <p><b>Approach:</b> {caseStudies[index].approach}</p>
                <p><b>Insights:</b> {caseStudies[index].insights}</p>
                <p><b>Impact:</b> {caseStudies[index].impact}</p>
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
      </section>
    </main>
  );
}