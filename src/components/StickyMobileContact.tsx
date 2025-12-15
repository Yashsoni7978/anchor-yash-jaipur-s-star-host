import { Phone, MessageCircle } from 'lucide-react';

export const StickyMobileContact = () => {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[90%] -translate-x-1/2 transform md:hidden">
      <div className="flex items-center justify-between rounded-full border border-white/20 bg-black/80 p-1.5 shadow-2xl backdrop-blur-md">
        
        {/* Call Button - NOW GOLDEN */}
        {/* We use hex #D4AF37 for a premium metallic gold. 
            Text is black for high readability/contrast. */}
        <a 
          href="tel:+917737877978" 
          className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D4AF37] py-3 text-sm font-bold text-black transition-all active:scale-95 hover:bg-[#c49f32]"
        >
          <Phone className="h-4 w-4 fill-black" />
          <span>Call Now</span>
        </a>

        {/* Spacer */}
        <div className="w-2"></div>

        {/* WhatsApp Button - Stays Green for recognition */}
        <a 
          href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20I%20want%20to%20enquire%20about%20an%20event." 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-green-600/90 py-3 text-sm font-bold text-white transition-all active:scale-95 active:bg-green-700"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
};