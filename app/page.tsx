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
    <canvas className="fixed inset-0 -z-10 pointer-events-none" ref={canvasRef} />
  );
}

/* ---------------- PAGE ---------------- */
export default function Page() {
  const [index, setIndex] = useState(0);

  const caseStudies = [
    {
      title: "HR Attrition Analysis & Workforce Insights",
      role: "Data Analytics Intern (HR Domain)",
      tools: "SQL, Python (Pandas), Power BI, Tableau, Excel",
      problem:
        "HR teams lacked visibility into why employees were leaving and what patterns were driving attrition across departments and tenure groups.",
      approach:
        "Extracted HR data using SQL, cleaned and analyzed it using Python Pandas, performed EDA, and built dashboards in Power BI/Tableau for visualization.",
      insights:
        "Attrition is significantly higher among early-tenure employees and certain departments show consistent turnover patterns influenced by workload and role type.",
      impact:
        "Helped HR teams identify key retention risks, improve hiring strategy, and reduce dependency on manual reporting processes.",
    },
    {
      title: "Business KPI & Workforce Dashboard Reporting",
      role: "Business Intelligence Analyst Intern",
      tools: "SQL, Excel, Power BI, Tableau",
      problem:
        "Business and HR data were scattered across multiple systems with no unified KPI tracking system for leadership decision-making.",
      approach:
        "Designed KPI frameworks, extracted structured datasets using SQL, cleaned data in Excel, and built interactive dashboards in Power BI/Tableau.",
      insights:
        "Real-time KPI visibility improved understanding of hiring trends, workforce distribution, and operational efficiency gaps.",
      impact:
        "Reduced reporting time significantly and improved leadership decision-making through centralized dashboards.",
    },
    {
      title: "HR Process Automation & Reporting System",
      role: "Data Analyst / Automation Intern",
      tools: "Python, Pandas, Excel Automation",
      problem:
        "HR reporting was manual, repetitive, slow, and prone to human errors causing inconsistency in business reporting.",
      approach:
        "Built Python automation scripts using Pandas, standardized Excel reporting templates, and automated repetitive data processing tasks.",
      insights:
        "Automation improves accuracy, reduces human error, and ensures consistency in HR reporting systems.",
      impact:
        "Reduced reporting time by a large margin and improved accuracy and reliability of HR reports.",
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

          <p className="mt-4 text-gray-600 leading-relaxed">
            I am a data-driven professional passionate about solving real-world business problems using analytics.<br /><br />
            I specialize in HR analytics, business intelligence, and reporting automation across multiple domains.<br /><br />
            I work with SQL, Python, and visualization tools to transform raw data into actionable insights.<br /><br />
            I enjoy identifying patterns in workforce and business data to improve decision-making processes.<br /><br />
            I strongly focus on clean data, accurate reporting, and scalable analytical solutions.<br /><br />
            I believe data storytelling is essential to bridge the gap between technical analysis and business understanding.<br /><br />
            I continuously learn new tools and techniques to improve analytical efficiency and impact.<br /><br />
            My goal is to become a data leader who drives business strategy through insights.
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

              <div className="mt-4 text-gray-700 space-y-3">
                <p><b>Tools Used:</b> {caseStudies[index].tools}</p>
                <p><b>Problem:</b> {caseStudies[index].problem}</p>
                <p><b>Approach:</b> {caseStudies[index].approach}</p>
                <p><b>Insights:</b> {caseStudies[index].insights}</p>
                <p><b>Impact:</b> {caseStudies[index].impact}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* RESUME (AT END) */}
      <section className="text-center py-20 border-t">
        <h2 className="text-2xl font-semibold">Resume</h2>

        <p className="text-gray-600 mt-3">
          Download my resume to explore my full experience and projects.
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