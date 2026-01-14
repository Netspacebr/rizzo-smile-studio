import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const whatsappLink = "https://wa.me/5511973825236?text=Gostaria%20de%20agendar%20uma%20consulta";

  return (
    <section className="py-20 lg:py-32 bg-gradient-gold relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Atendimento humanizado
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
            Pronto para transformar seu sorriso?
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-10 max-w-xl mx-auto">
            Agende sua avaliação gratuita e descubra como podemos cuidar do seu sorriso 
            com o carinho e a tecnologia que você merece.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="xl"
                className="w-full sm:w-auto gap-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated font-semibold"
              >
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Phone Number */}
          <p className="mt-8 text-primary-foreground/80 text-sm">
            Ou ligue diretamente:{" "}
            <a href="tel:+5511973825236" className="font-semibold text-primary-foreground hover:underline">
              (11) 97382-5236
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
