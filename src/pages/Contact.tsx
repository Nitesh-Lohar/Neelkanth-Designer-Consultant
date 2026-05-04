import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  location: z.string().trim().min(1, "Location is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", location: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const text = `Name: ${encodeURIComponent(result.data.name)}%0APhone: ${encodeURIComponent(result.data.phone)}%0ALocation: ${encodeURIComponent(result.data.location)}%0AMessage: ${encodeURIComponent(result.data.message)}`;
    window.open(`https://wa.me/919116849736?text=${text}`, "_blank");
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <Layout>
      <section className="section-padding earth-gradient text-center">
        <div className="container-width max-w-3xl animate-fade-in">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-earth-light/80 text-lg">
            Ready to start your project? Send us your details and we'll connect on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-width grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
              { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXXXXXXX" },
              { name: "location", label: "Location", type: "text", placeholder: "City / Area" },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-sm font-medium text-foreground mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.name as keyof typeof form]}
                  onChange={(e) => update(f.name, e.target.value)}
                  className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                />
                {errors[f.name] && <p className="text-destructive text-xs mt-1">{errors[f.name]}</p>}
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 gold-gradient text-charcoal font-semibold px-8 py-4 rounded-sm text-lg hover:opacity-90 transition-opacity w-full justify-center"
            >
              Send via WhatsApp <Send size={20} />
            </button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Let's Build Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                From luxury villas to commercial spaces, resorts, and hotels—Sustainia transforms your vision into reality with elegance and expertise. Fill out the form, and connect with us instantly on WhatsApp to begin your journey.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Udaipur, Rajasthan, India" },
                { icon: Phone, text: "+91 91168 49736" },
                { icon: Mail, text: "info@neelkanthbuilders.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <item.icon size={20} className="text-gold shrink-0" />
                  <span className="text-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
