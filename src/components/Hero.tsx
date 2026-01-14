import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-dental-clinic.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511973825236?text=Gostaria%20de%20agendar%20uma%20consulta";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Clínica Rizzo - Ambiente acolhedor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Cuidado em todas as fases da vida
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6">
              Seu sorriso merece{" "}
              <span className="text-gradient-gold">confiança</span> e{" "}
              <span className="text-gradient-gold">carinho</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl text-balance">
              Na Clínica Rizzo, transformamos sorrisos com tecnologia de ponta e um 
              atendimento humanizado que você e sua família merecem. 
              <span className="text-foreground font-medium"> Aqui, seu medo é acolhido.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-3">
                  <Phone className="w-5 h-5" />
                  Agendar Consulta
                </Button>
              </a>
              <a href="#servicos">
                <Button variant="gold-outline" size="xl" className="w-full sm:w-auto">
                  Conheça Nossos Serviços
                </Button>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm">
                Rua José Ignácio, 350 – Centro – Atibaia/SP
              </span>
            </div>
          </div>

          {/* Right side - Floating elements */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute top-10 right-10 animate-float">
              <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-elevated">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground font-medium">+2.000 pacientes</p>
                <p className="text-xs text-muted-foreground">atendidos com excelência</p>
              </div>
            </div>

            <div className="absolute bottom-20 left-0 animate-float" style={{ animationDelay: "1s" }}>
              <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-elevated">
                <p className="text-2xl font-serif font-bold text-gradient-gold mb-1">10+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
