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
      tools:
        "SQL (Joins, Aggregations), Python (Pandas, NumPy), Power BI / Tableau, Excel, KPI Modeling",

      summary:
        "Conducted end-to-end workforce analytics to identify key drivers of employee attrition and recruitment inefficiencies. Built KPI models and dashboards to support HR decision-making.",

      problem: [
        "No visibility into attrition drivers",
        "Fragmented HR datasets",
        "Manual reporting delays",
      ],

      approach: [
        "Extracted HR data using SQL",
        "Cleaned and analyzed using Python (Pandas, NumPy)",
        "Performed trend and pattern analysis",
        "Built KPI dashboards in Power BI/Tableau",
        "Validated data quality for consistency",
      ],

      insights: [
        "Early-tenure employees showed highest attrition",
        "Department-level differences in retention",
        "Recruitment bottlenecks in hiring pipeline",
      ],

      impact: [
        "Improved HR decision-making",
        "Better workforce visibility",
        "Reduced manual reporting effort",
      ],
    },

    {
      title: "Business KPI & Workforce Dashboard Reporting",
      role: "Business Intelligence Analyst Intern",
      tools: "SQL, Excel, Power BI, Tableau",

      summary:
        "Designed KPI-driven dashboards for workforce planning, hiring trends, and leadership reporting.",

      problem: [
        "No centralized KPI tracking system",
        "Data scattered across multiple sources",
        "Slow manual reporting cycles",
      ],

      approach: [
        "Built KPI frameworks for reporting",
        "Extracted data using SQL queries",
        "Cleaned datasets in Excel",
        "Created dashboards in Power BI/Tableau",
      ],

      insights: [
        "Real-time KPI visibility improved decision-making",
        "Workforce trends became easier to track",
        "Data inconsistencies identified and resolved",
      ],

      impact: [
        "Faster reporting cycles",
        "Improved leadership visibility",
        "Better workforce planning",
      ],
    },

    {
      title: "HR Process Automation & Reporting System",
      role: "Data Analyst / Automation Intern",
      tools: "Python, Pandas, Excel Automation",

      summary:
        "Automated HR reporting workflows to reduce manual effort, improve accuracy, and standardize reporting systems.",

      problem: [
        "Manual reporting was slow",
        "Frequent Excel inconsistencies",
        "High human error rate",
      ],

      approach: [
        "Built Python automation scripts",
        "Used Pandas for data processing",
        "Standardized Excel reporting formats",
        "Automated repetitive workflows",
      ],

      insights: [
        "Automation improves accuracy and consistency",
        "Standardization reduces reporting errors",
        "Manual effort can be significantly reduced",
      ],

      impact: [
        "Reduced reporting time",
        "Improved data accuracy",
        "Streamlined HR workflow",
      ],
    },
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

          <p className="mt-4 text-gray-600 leading-relaxed">
            I am a data-driven professional passionate about solving business problems using analytics.<br /><br />
            I specialize in HR analytics, business intelligence, and reporting automation across domains.<br /><br />
            I work with SQL, Python, and BI tools to transform raw data into actionable insights.<br /><br />
            I enjoy identifying patterns in workforce and business datasets for better decision-making.<br /><br />
            I focus on clean data, accurate reporting, and scalable analytical solutions.<br /><br />
            I believe storytelling is key to making data understandable for business users.<br /><br />
            I continuously improve my skills in analytics, visualization, and automation.<br /><br />
            My goal is to become a data leader who drives business impact through insights.
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

        <div className="max-w-5xl mx-auto px-6 relative h-[520px]">
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

              <div className="mt-4 text-gray-700 space-y-2">
                <p><b>Tools Used:</b> {caseStudies[index].tools}</p>
                <p><b>Summary:</b> {caseStudies[index].summary}</p>
                <p><b>Problem:</b> {caseStudies[index].problem.join(", ")}</p>
                <p><b>Approach:</b> {caseStudies[index].approach.join(", ")}</p>
                <p><b>Insights:</b> {caseStudies[index].insights.join(", ")}</p>
                <p><b>Impact:</b> {caseStudies[index].impact.join(", ")}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* RESUME */}
      <section className="text-center py-20 border-t">
        <h2 className="text-2xl font-semibold">Resume</h2>

        <p className="text-gray-600 mt-3">
          Download my resume to view full experience and projects.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          Download Resume
        </a>
      </section>
    </main>
  );
}