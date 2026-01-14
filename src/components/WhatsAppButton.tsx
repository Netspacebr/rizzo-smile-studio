import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5511973825236?text=Gostaria%20de%20agendar%20uma%20consulta";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato pelo WhatsApp"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)] animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
          {/* Expanded label on hover (desktop) */}
          <span className="hidden md:block overflow-hidden whitespace-nowrap transition-all duration-300 max-w-0 group-hover:max-w-xs group-hover:pl-5 group-hover:pr-1 font-medium">
            Agendar consulta
          </span>
          
          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center">
            <MessageCircle className="w-7 h-7" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
