import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ReportCard } from "@/components/cards/ReportCard";
import { useState } from "react";

const reports = [
  {
    title: "2024 Global Security Landscape Assessment",
    abstract: "A comprehensive analysis of emerging threats and strategic opportunities in the current geopolitical environment. This report examines key trends and provides actionable insights for security professionals.",
    category: "Strategic Analysis",
    date: "Q1 2024",
    classification: "Public Release",
  },
  {
    title: "Technology Trends in Modern Operations",
    abstract: "Examining the impact of emerging technologies on operational effectiveness and strategic planning. Covers AI, automation, and digital transformation in professional contexts.",
    category: "Technology Brief",
    date: "February 2024",
    classification: "Research Paper",
  },
  {
    title: "Leadership Development Framework Analysis",
    abstract: "Comparative study of leadership development programs across various sectors, identifying best practices and areas for improvement in professional training.",
    category: "Research Study",
    date: "January 2024",
    classification: "White Paper",
  },
  {
    title: "Crisis Communication Best Practices",
    abstract: "Analysis of successful and unsuccessful crisis communication strategies from recent high-profile incidents. Includes framework for developing organizational protocols.",
    category: "Case Study",
    date: "December 2023",
    classification: "Public Release",
  },
  {
    title: "Cybersecurity Threat Intelligence Report",
    abstract: "Quarterly assessment of the cyber threat landscape, including emerging attack vectors, vulnerability trends, and recommended defensive measures.",
    category: "Threat Assessment",
    date: "Q4 2023",
    classification: "Industry Report",
  },
  {
    title: "Organizational Resilience Metrics",
    abstract: "Developing quantifiable measures for organizational resilience, with case studies from high-reliability organizations and recommended assessment frameworks.",
    category: "Research Study",
    date: "November 2023",
    classification: "Research Paper",
  },
  {
    title: "Supply Chain Risk Analysis",
    abstract: "Examination of vulnerabilities in modern supply chains and strategies for building resilient logistics networks in uncertain environments.",
    category: "Strategic Analysis",
    date: "October 2023",
    classification: "White Paper",
  },
  {
    title: "Decision-Making Under Uncertainty",
    abstract: "Review of cognitive frameworks and decision support tools for making effective choices with incomplete information.",
    category: "Research Study",
    date: "September 2023",
    classification: "Research Paper",
  },
];

const categories = ["All", "Strategic Analysis", "Technology Brief", "Research Study", "Case Study", "Threat Assessment"];

const Reports = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredReports = activeCategory === "All"
    ? reports
    : reports.filter(report => report.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-secondary/30 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <SectionHeader
            title="Intelligence Reports"
            subtitle="Analytical documents, research publications, and strategic assessments. Our reports provide in-depth analysis and actionable intelligence for informed decision-making."
            classification="Document Archive"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all duration-300 ${
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-mono text-muted-foreground">
              Showing {filteredReports.length} report{filteredReports.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredReports.map((report, index) => (
              <div 
                key={report.title} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ReportCard {...report} />
              </div>
            ))}
          </div>

          {filteredReports.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-mono">
                No reports found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Reports;
