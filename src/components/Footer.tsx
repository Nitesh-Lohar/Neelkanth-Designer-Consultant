import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-earth-light">
    <div className="container-width section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold text-gold mb-1">SUSTAINIA</h3>
          <p className="text-xs text-earth-light/50 mb-4">A brand by Neelkanth Designer & Consultant</p>
          <p className="text-sm leading-relaxed text-earth-light/70">
            Building dreams from land to landmark. Premium construction services in Udaipur, specializing in eco-conscious contemporary and time-tested traditional construction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>Udaipur, Rajasthan, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <span>+91 91168 49736</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <span>info@sustainia.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-earth/20 mt-12 pt-8 text-center text-xs text-earth-light/50">
        © {new Date().getFullYear()} SUSTAINIA — A brand by Neelkanth Designer & Consultant. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
