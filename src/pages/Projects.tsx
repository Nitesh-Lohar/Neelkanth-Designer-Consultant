import { useState } from "react";
import Layout from "@/components/Layout";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectMudhut from "@/assets/project-mudhut.jpg";
import projectResort from "@/assets/project-resort.jpg";
import projectCultural from "@/assets/project-cultural.jpg";
import heroVilla from "@/assets/hero-villa.jpg";

const categories = ["All", "Villas", "Commercial", "Mud Houses", "Resorts", "Cultural"];

const projects = [
  { title: "Lakeside Luxury Villa", category: "Villas", img: heroVilla },
  { title: "Modern Residential Home", category: "Villas", img: projectResidential },
  { title: "Commercial Complex", category: "Commercial", img: projectCommercial },
  { title: "Eco Mud Cottage", category: "Mud Houses", img: projectMudhut },
  { title: "Heritage Resort", category: "Resorts", img: projectResort },
  { title: "Cultural Heritage Center", category: "Cultural", img: projectCultural },
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="section-padding earth-gradient text-center">
        <div className="container-width max-w-3xl animate-fade-in">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Portfolio</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Projects
          </h1>
          <p className="text-earth-light/80 text-lg">
            A showcase of our craftsmanship across residential, commercial, and rammed earth construction.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-width">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-sm text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "gold-gradient text-charcoal"
                    : "bg-card border border-border text-muted-foreground hover:border-gold/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-gold text-xs font-medium uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mt-1">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
