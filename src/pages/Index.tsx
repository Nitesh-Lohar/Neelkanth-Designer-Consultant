import { Link } from "react-router-dom";
import { Home, Building2, Landmark, Hotel, Wrench, Users, Leaf, ThermometerSun, Shield, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-villa.jpg";
import rammedEarthImg from "@/assets/rammed-earth.jpg";

const services = [
  { icon: Home, title: "Residential", desc: "Custom homes built to perfection" },
  { icon: Building2, title: "Commercial", desc: "Modern commercial spaces" },
  { icon: Landmark, title: "Cultural", desc: "Heritage & cultural projects" },
  { icon: Hotel, title: "Hospitality", desc: "Resorts, villas & hotels" },
  { icon: Wrench, title: "Renovation", desc: "Transform existing spaces" },
  { icon: Users, title: "Consultancy", desc: "Expert construction guidance" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury rammed earth villa by Sustainia Builders Udaipur"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
        <h1 className="text-gold font-medium tracking-[0.3em] uppercase mb-3 font-serif text-6xl md:text-8xl">SUSTAINIA</h1>
        <p className="text-earth-light/60 text-xs sm:text-sm tracking-[0.15em] uppercase mb-6">
          A brand by <span className="text-gold/90 font-semibold">Neelkanth Designer & Consultant</span>
        </p>
        <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-6">
          Building Dreams from <span className="text-gold-gradient">Land to Landmark</span>
        </p>
        <p className="text-earth-light/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Most Premium and reliable construction & rammed earth specialists in Udaipur. From plain land to fully finished, lock-and-key projects.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 gold-gradient text-charcoal font-semibold px-8 py-4 rounded-sm text-lg hover:opacity-90 transition-opacity"
        >
          Contact Us <ArrowRight size={20} />
        </Link>
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card border border-border rounded-lg p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
            >
              <s.icon size={36} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold font-medium hover:underline">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Rammed Earth USP */}
    <section className="section-padding earth-gradient">
      <div className="container-width grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Specialty</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Rammed Earth Construction
          </h2>
          <p className="text-earth-light/80 leading-relaxed mb-8">
            We are one of the only companies in Udaipur and nearby regions specializing in rammed earth (mud-based) construction — an ancient technique perfected for modern living. Ideal for eco-conscious luxury villas, cottages, and resort projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Leaf, label: "Eco-Friendly", desc: "100% natural materials" },
              { icon: Shield, label: "Strong & Durable", desc: "Lasts for generations" },
              { icon: ThermometerSun, label: "Thermal Insulation", desc: "Better than cement" },
            ].map((f) => (
              <div key={f.label} className="text-center">
                <f.icon size={28} className="text-gold mx-auto mb-2" />
                <h4 className="text-primary-foreground font-semibold text-sm">{f.label}</h4>
                <p className="text-earth-light/60 text-xs mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <img
            src={rammedEarthImg}
            alt="Rammed earth wall texture"
            className="w-full h-80 md:h-96 object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-sand text-center">
      <div className="container-width max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Build Your Dream?
        </h2>
        <p className="text-muted-foreground mb-8">
          From concept to completion, we bring your vision to life with quality, trust, and innovation.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 gold-gradient text-charcoal font-semibold px-8 py-4 rounded-sm text-lg hover:opacity-90 transition-opacity"
        >
          Contact Us <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
