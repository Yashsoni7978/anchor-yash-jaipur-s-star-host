import { Phone, MessageCircle } from 'lucide-react';

export const StickyMobileContact = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full border-t border-gray-200 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      {/* Call Button */}
      <a 
        href="tel:+917737877978" 
        className="flex flex-1 flex-col items-center justify-center gap-1 bg-white text-gray-800 transition-colors active:bg-gray-100"
        aria-label="Call Anchor Yash"
      >
        <Phone className="h-5 w-5 text-blue-600" />
        <span className="text-xs font-semibold">Call Now</span>
      </a>

      {/* Divider */}
      <div className="h-full w-[1px] bg-gray-200"></div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20I%20want%20to%20enquire%20about%20an%20event." 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-1 bg-[#25D366] text-white transition-colors hover:bg-[#20bd5a]"
        aria-label="WhatsApp Anchor Yash"
      >
        <MessageCircle className="h-5 w-5 fill-current" />
        <span className="text-xs font-bold">WhatsApp</span>
      </a>
    </div>
  );
};