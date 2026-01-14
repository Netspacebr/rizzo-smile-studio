import { 
  Sparkles, 
  Heart, 
  Shield, 
  Smile,
  Baby,
  Stethoscope,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Avaliação Completa",
    description: "Diagnóstico detalhado com tecnologia de ponta para identificar suas necessidades odontológicas.",
    highlight: "Primeira consulta",
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description: "Clareamento, facetas, lentes de contato e harmonização do seu sorriso com resultados naturais.",
    highlight: "Mais procurado",
  },
  {
    icon: Shield,
    title: "Prevenção",
    description: "Limpeza profissional, profilaxia e orientações para manter a saúde bucal em dia.",
    highlight: "Essencial",
  },
  {
    icon: Smile,
    title: "Ortodontia",
    description: "Aparelhos convencionais e alinhadores invisíveis para o sorriso perfeito em qualquer idade.",
    highlight: "Para todas as idades",
  },
  {
    icon: Heart,
    title: "Implantes",
    description: "Recupere seu sorriso com implantes de alta qualidade e técnicas minimamente invasivas.",
    highlight: "Tecnologia avançada",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    description: "Cuidado especial e acolhedor para os pequenos, criando uma relação positiva com o dentista.",
    highlight: "Para crianças",
  },
];

const Services = () => {
  const whatsappLink = "https://wa.me/5511973825236?text=Gostaria%20de%20saber%20mais%20sobre%20os%20serviços";

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Cuidado completo para o seu{" "}
            <span className="text-gradient-primary">sorriso</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos tratamentos personalizados com as técnicas mais modernas 
            da odontologia, sempre priorizando seu conforto e bem-estar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover-lift cursor-pointer border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Highlight Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground mb-4">
                {service.highlight}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                Saiba mais
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg" className="gap-2">
              Agendar Avaliação Gratuita
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
