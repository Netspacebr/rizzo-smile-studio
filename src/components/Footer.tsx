import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import logo from "@/assets/logo-clinica-rizzo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contato" className="bg-foreground text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Clínica Rizzo"
                className="h-14 w-14 object-contain"
              />
              <div>
                <span className="font-serif text-xl font-semibold">
                  Clínica Rizzo
                </span>
                <p className="text-xs text-primary-foreground/60">Odontologia</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Cuidamos de sorrisos em todas as fases da vida, com tecnologia, 
              carinho e um atendimento humanizado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/clinicarizzo_atibaia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Serviços", "Sobre", "Depoimentos"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {["Avaliação", "Estética Dental", "Ortodontia", "Implantes", "Odontopediatria"].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Rua José Ignácio, 350<br />
                  Centro – Atibaia/SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+5511973825236"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  (11) 97382-5236
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Seg-Sex: 8h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} Clínica Rizzo Odontologia. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              RT: Dra. Pamela Ferreira – CROSP 149453
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
