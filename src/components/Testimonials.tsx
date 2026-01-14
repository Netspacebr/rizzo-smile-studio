import { Star, Quote } from "lucide-react";
import patientImage from "@/assets/patient-smile-1.jpg";

const testimonials = [
  {
    name: "Maria Clara",
    role: "Paciente há 3 anos",
    content: "Finalmente encontrei uma dentista que trata meu filho com carinho e respeita seus medos. A Dra. Pamela é incrível! Meu pequeno agora adora ir ao dentista.",
    rating: 5,
    image: patientImage,
  },
  {
    name: "Carlos Eduardo",
    role: "Clareamento dental",
    content: "O resultado do meu clareamento superou todas as expectativas. A equipe é muito atenciosa e o ambiente é acolhedor. Recomendo de olhos fechados!",
    rating: 5,
    image: null,
  },
  {
    name: "Ana Beatriz",
    role: "Tratamento ortodôntico",
    content: "Você parece mais feliz! É o que todo mundo me fala agora. Obrigada, Clínica Rizzo, por transformar meu sorriso e minha autoestima.",
    rating: 5,
    image: null,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            O que nossos pacientes{" "}
            <span className="text-gradient-gold">dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada sorriso transformado é uma história de confiança e cuidado. 
            Veja o que nossos pacientes compartilham sobre a experiência na Clínica Rizzo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover-lift border border-border/50 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-soft border border-border/50">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9 de 5</span>
            <span className="text-muted-foreground">• +200 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
