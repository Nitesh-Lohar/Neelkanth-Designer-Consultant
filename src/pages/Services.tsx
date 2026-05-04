import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Home, Building2, Landmark, Hotel, Wrench, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "From elegant bungalows to modern apartments, we design and build homes that reflect your lifestyle. Every project is a lock-and-key delivery — ready to move in.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "We build offices, showrooms, retail spaces, and commercial complexes that are functional, aesthetic, and built to last with premium materials.",
  },
  {
    icon: Landmark,
    title: "Cultural Projects",
    desc: "We take pride in constructing temples, community halls, and heritage structures that honor tradition while meeting modern engineering standards.",
  },
  {
    icon: Hotel,
    title: "Hospitality Projects",
    desc: "Resorts, boutique hotels, luxury villas, and eco-cottages — we create hospitality spaces that deliver unforgettable guest experiences.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Breathe new life into existing structures. From interior makeovers to complete structural renovations, we transform spaces with precision.",
  },
  {
    icon: Users,
    title: "Construction Consultancy",
    desc: "Expert guidance on planning, design, material selection, budgeting, and project management. We help you make informed decisions at every stage.",
  },
];

const Services = () => (
  <Layout>
    <section className="section-padding earth-gradient text-center">
      <div className="container-width max-w-3xl animate-fade-in">
        <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Expertise</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Services We Offer
        </h1>
        <p className="text-earth-light/80 text-lg">
          Complete construction solutions — from concept to lock-and-key handover.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-width grid gap-8 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card border border-border rounded-lg p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
          >
            <s.icon size={40} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="container-width text-center mt-16">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 gold-gradient text-charcoal font-semibold px-8 py-4 rounded-sm text-lg hover:opacity-90 transition-opacity"
        >
          Discuss Your Project <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
