import { Award, Users, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import dentistImage from "@/assets/dentist-portrait.jpg";

const stats = [
  { icon: Users, value: "2.000+", label: "Pacientes Atendidos" },
  { icon: Award, value: "10+", label: "Anos de Experiência" },
  { icon: Clock, value: "98%", label: "Satisfação" },
  { icon: Heart, value: "100%", label: "Dedicação" },
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
            <div className="absolute -bottom-4 -right-4 lg:bottom-10 lg:-right-10 bg-card rounded-2xl p-5 shadow-elevated z-20">
              <p className="font-serif text-3xl font-bold text-gradient-gold">CROSP</p>
              <p className="text-sm text-muted-foreground">149453</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Sobre Nós
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Cuidamos de <span className="text-gradient-gold">sorrisos</span> em todas as fases da vida
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Somos a <strong className="text-foreground">Clínica Rizzo</strong>, localizada no coração de Atibaia. 
              Sob a direção técnica da <strong className="text-foreground">Dra. Pamela Ferreira</strong>, 
              oferecemos tratamentos odontológicos de excelência com um diferencial: 
              aqui, seu medo jamais será julgado, mas sim acolhido.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa missão é proporcionar saúde bucal com tecnologia de ponta e um 
              atendimento humanizado que faz você se sentir em casa. Atendemos 
              crianças, adultos e idosos, sempre com muito carinho e profissionalismo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
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
