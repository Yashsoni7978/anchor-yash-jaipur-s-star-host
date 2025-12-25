import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  data: FAQItem[];
  title?: string;
}

export const FAQSection = ({ data, title = "Frequently Asked Questions" }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Split data into two columns
  const midPoint = Math.ceil(data.length / 2);
  const leftColumn = data.slice(0, midPoint);
  const rightColumn = data.slice(midPoint);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const FAQCard = ({ item, index }: { item: FAQItem; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      // Reduced border radius slightly for a sharper look
      className={`group border rounded-xl overflow-hidden transition-all duration-300 ${
        activeIndex === index
          ? "border-primary/50 bg-white/5 shadow-[0_0_20px_-5px_rgba(212,175,55,0.15)]"
          : "border-white/10 bg-transparent hover:border-white/20"
      }`}
    >
      <button
        onClick={() => toggleAccordion(index)}
        // Reduced padding from p-5 to p-4
        className="flex items-start justify-between w-full p-4 text-left cursor-pointer gap-3"
      >
        <span className={`text-base font-display font-medium transition-colors duration-300 leading-snug ${
          activeIndex === index ? "text-primary" : "text-foreground group-hover:text-primary/80"
        }`}>
          {item.question}
        </span>
        
        {/* Smaller Icon Box */}
        <div className={`p-1 rounded-full border transition-all duration-300 flex-shrink-0 mt-0.5 ${
          activeIndex === index 
            ? "bg-primary text-black border-primary rotate-180" 
            : "bg-transparent text-muted-foreground border-white/10 group-hover:border-primary/50"
        }`}>
          {activeIndex === index ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence>
        {activeIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Reduced internal padding */}
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-dashed border-white/10 pt-3">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    // Reduced Section Padding (py-12 instead of py-20)
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom max-w-7xl relative z-10">
        {/* Header - Reduced margin bottom (mb-10 instead of mb-16) */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-3"
          >
            {title}
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* 2-Column Grid - Reduced Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          
          {/* Left Column - Reduced space-y */}
          <div className="space-y-3">
            {leftColumn.map((item, i) => (
              <FAQCard key={i} item={item} index={i} />
            ))}
          </div>

          {/* Right Column - Reduced space-y */}
          <div className="space-y-3">
            {rightColumn.map((item, i) => (
              <FAQCard key={i} item={item} index={i + midPoint} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
