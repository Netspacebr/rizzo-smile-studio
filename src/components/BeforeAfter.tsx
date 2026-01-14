import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const results = [
  {
    id: 1,
    image: beforeAfter1,
    treatment: "Clareamento Dental",
    duration: "2 sessões",
    testimonial: "Eu não acreditava que meus dentes poderiam ficar tão brancos! O resultado superou todas as minhas expectativas. Me sinto muito mais confiante para sorrir.",
    patient: "Juliana M.",
    age: "32 anos",
  },
  {
    id: 2,
    image: beforeAfter2,
    treatment: "Implante Dental",
    duration: "3 meses",
    testimonial: "Perdi um dente em um acidente e achei que nunca mais teria um sorriso completo. A Dra. Pamela fez um trabalho incrível, parece natural!",
    patient: "Roberto S.",
    age: "45 anos",
  },
  {
    id: 3,
    image: beforeAfter3,
    treatment: "Lentes de Contato",
    duration: "1 semana",
    testimonial: "Sempre tive vergonha do formato dos meus dentes. Agora tenho o sorriso que sempre sonhei! Procedimento rápido e resultado perfeito.",
    patient: "Amanda L.",
    age: "28 anos",
  },
];

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  const currentResult = results[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Resultados Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Transformações que{" "}
            <span className="text-gradient-primary">inspiram</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja os resultados alcançados por nossos pacientes. Cada sorriso conta uma 
            história de confiança renovada e autoestima transformada.
          </p>
        </div>

        {/* Before/After Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={currentResult.image}
                alt={`Antes e depois - ${currentResult.treatment}`}
                className="w-full aspect-[4/3] object-cover"
              />
              
              {/* Labels */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <span className="px-4 py-2 rounded-full bg-foreground/80 text-primary-foreground text-sm font-medium backdrop-blur-sm">
                  Antes
                </span>
                <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium backdrop-blur-sm">
                  Depois
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Ir para resultado ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            {/* Treatment Info */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                {currentResult.treatment}
              </span>
              <p className="text-sm text-muted-foreground">
                Tempo de tratamento: <span className="font-medium text-foreground">{currentResult.duration}</span>
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft border border-border/50 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed text-lg mb-6 relative z-10">
                "{currentResult.testimonial}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {currentResult.patient.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{currentResult.patient}</p>
                  <p className="text-sm text-muted-foreground">{currentResult.age}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <p className="text-muted-foreground mb-4">
                Quer resultados como esses? Agende sua avaliação gratuita.
              </p>
              <a
                href="https://wa.me/5511973825236?text=Gostaria%20de%20agendar%20uma%20avaliação"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gold" size="lg">
                  Quero Transformar Meu Sorriso
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-gradient-primary">500+</p>
            <p className="text-sm text-muted-foreground mt-1">Clareamentos</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-gradient-primary">300+</p>
            <p className="text-sm text-muted-foreground mt-1">Implantes</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-gradient-primary">200+</p>
            <p className="text-sm text-muted-foreground mt-1">Lentes de Contato</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-gradient-primary">98%</p>
            <p className="text-sm text-muted-foreground mt-1">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
