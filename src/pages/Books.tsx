import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeadernew";
import { BookCard } from "@/components/cards/BookCardnew";
import { useState } from "react";

const books = [
  {
    title: "Strategic Leadership in Complex Environments",
    author: "Col. James Mitchell (Ret.)",
    description: "A comprehensive guide to decision-making under pressure and leading teams through uncertainty.",
    category: "Leadership",
    publishDate: "March 2024",
  },
  {
    title: "The Art of Tactical Communication",
    author: "Dr. Sarah Chen",
    description: "Master the principles of clear, effective communication in high-stakes situations.",
    category: "Communication",
    publishDate: "January 2024",
  },
  {
    title: "Operational Planning: Theory to Practice",
    author: "Maj. Robert Hayes",
    description: "Transform theoretical knowledge into actionable operational plans with proven methodologies.",
    category: "Operations",
    publishDate: "February 2024",
  },
  {
    title: "Risk Assessment Protocols",
    author: "Dr. Amanda Foster",
    description: "Systematic approaches to identifying, evaluating, and mitigating operational risks.",
    category: "Risk Management",
    publishDate: "December 2023",
  },
  {
    title: "Team Dynamics Under Stress",
    author: "Capt. Marcus Williams",
    description: "Understanding and optimizing team performance in high-pressure environments.",
    category: "Leadership",
    publishDate: "November 2023",
  },
  {
    title: "Intelligence Gathering Fundamentals",
    author: "Former NSA Analyst",
    description: "Essential principles of information collection and analysis for strategic advantage.",
    category: "Intelligence",
    publishDate: "October 2023",
  },
  {
    title: "Crisis Response Handbook",
    author: "Emergency Response Team",
    description: "Step-by-step protocols for managing and resolving critical incidents effectively.",
    category: "Operations",
    publishDate: "September 2023",
  },
  {
    title: "Negotiation Tactics for Professionals",
    author: "Dr. Elena Rodriguez",
    description: "Advanced negotiation strategies drawn from high-stakes diplomatic and business contexts.",
    category: "Communication",
    publishDate: "August 2023",
  },
  {
    title: "Cyber Defense Essentials",
    author: "Security Research Group",
    description: "Foundational knowledge for protecting digital assets and infrastructure.",
    category: "Technology",
    publishDate: "July 2023",
  },
];

const categories = ["All", "Leadership", "Communication", "Operations", "Intelligence", "Technology", "Risk Management"];

const Books = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBooks = activeCategory === "All"
    ? books
    : books.filter(book => book.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-secondary/30 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <SectionHeader
            title="Publications"
            subtitle="Our complete library of field manuals, guides, and professional publications. Each volume represents years of operational experience distilled into actionable knowledge."
            classification="Book Catalog"
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
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all duration-300 ${activeCategory === category
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

      {/* Books Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-mono text-muted-foreground">
              Showing {filteredBooks.length} publication{filteredBooks.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <div
                key={book.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <BookCard {...book} />
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-mono">
                No publications found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Books;
