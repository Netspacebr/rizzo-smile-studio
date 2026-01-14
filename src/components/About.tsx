import { Award, Users, Clock, Heart, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import dentistImage from "@/assets/dentist-portrait.jpg";

const highlights = [
  "Ambiente 100% esterilizado",
  "Equipamentos de última geração",
  "Atendimento humanizado",
  "Profissionais especializados",
];

const About = () => {
  const whatsappLink = "https://wa.me/5511973825236?text=Gostaria%20de%20conhecer%20a%20clínica";

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={dentistImage}
                alt="Dra. Pamela Ferreira - Clínica Rizzo"
                className="w-full max-w-md mx-auto lg:max-w-none rounded-3xl shadow-elevated object-cover aspect-[4/5]"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20 -z-0 hidden lg:block" />
            <div className="absolute top-10 -left-10 w-24 h-24 rounded-full bg-accent -z-0 hidden lg:block" />
            
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-10 lg:-right-10 bg-card rounded-2xl p-5 shadow-elevated z-20 border border-border/50">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-serif text-xl font-bold text-gradient-primary">CROSP</span>
              </div>
              <p className="text-sm text-muted-foreground">149453</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Sobre Nós
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Cuidamos de <span className="text-gradient-primary">sorrisos</span> em todas as fases da vida
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Somos a <strong className="text-foreground">Clínica Rizzo</strong>, localizada no coração de Atibaia. 
              Sob a direção técnica da <strong className="text-foreground">Dra. Pamela Ferreira</strong>, 
              oferecemos tratamentos odontológicos de excelência com um diferencial: 
              aqui, seu medo jamais será julgado, mas sim acolhido.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa clínica segue os mais rigorosos protocolos de higiene e biossegurança, 
              garantindo um ambiente seguro e acolhedor para você e sua família.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 p-6 rounded-2xl bg-secondary/50">
              <div className="text-center">
                <p className="font-serif text-2xl lg:text-3xl font-bold text-gradient-primary">2.000+</p>
                <p className="text-xs text-muted-foreground mt-1">Pacientes</p>
              </div>
              <div className="text-center border-x border-border">
                <p className="font-serif text-2xl lg:text-3xl font-bold text-gradient-primary">10+</p>
                <p className="text-xs text-muted-foreground mt-1">Anos</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl lg:text-3xl font-bold text-gradient-primary">98%</p>
                <p className="text-xs text-muted-foreground mt-1">Satisfação</p>
              </div>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg">
                Conheça Nossa Equipe
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
