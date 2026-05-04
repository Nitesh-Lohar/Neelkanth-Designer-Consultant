import Layout from "@/components/Layout";
import founderImg from "@/assets/founder.jpg";
import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding earth-gradient text-center">
      <div className="container-width max-w-3xl animate-fade-in">
        <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">About Us</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Young Vision, Timeless Craft
        </h1>
        <p className="text-earth-light/80 text-lg">
          A fast-growing construction firm blending innovation with tradition in the heart of Udaipur.
        </p>
      </div>
    </section>

    {/* Founder */}
    <section className="section-padding bg-background">
      <div className="container-width grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img
            src={founderImg}
            alt="Founder of Sustainia"
            className="w-full h-[450px] object-cover"
            loading="lazy"
            width={800}
            height={800}
          />
        </div>
        <div>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">The Founder</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            A Passion for Building Excellence
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sustainia is founded by a young, enthusiastic visionary with a deep passion for architecture and construction. With a keen eye to detail and a relentless drive for quality, we were set out to create a company that effectively and efficiently bridges the gap between modern construction techniques and time-tested traditional methods.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            What started as a dream has quickly grown into one of Udaipur's most promising construction firms — known for delivering complete lock-and-key projects from bare land to fully finished properties becoming the landmarks of the city, with unmatched craftsmanship.
          </p>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-sand">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To be Udaipur's most trusted and efficient building partner, delivering cost-effective, sustainable construction that blend modern luxury with nature—driven by ethical and disciplined execution.",
            },
            {
              icon: Target,
              title: "Our Mission",
              desc: "To deliver every project with uncompromising quality, transparency, and trust—meeting timelines and budgets while consistently exceeding client expectations.",
            },
            {
              icon: Lightbulb,
              title: "Our Approach",
              desc: "We blend cutting-edge contemporary construction with timeless techniques including lime based construction and rammed earth walls to craft elegant, durable, and eco-conscious spaces that stand apart.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-background rounded-lg p-8 border border-border text-center">
              <item.icon size={40} className="text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
