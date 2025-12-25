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

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decor - Subtle Golden Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom max-w-4xl relative z-10">
        {/* Aesthetic Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            {title}
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={index}
              className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "border-primary/50 bg-white/5 shadow-[0_0_30px_-10px_rgba(212,175,55,0.15)]"
                  : "border-white/10 bg-transparent hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left cursor-pointer"
              >
                <span className={`text-lg md:text-xl font-display font-medium transition-colors duration-300 ${
                  activeIndex === index ? "text-primary" : "text-foreground group-hover:text-primary/80"
                }`}>
                  {item.question}
                </span>
                
                {/* Animated Icon */}
                <div className={`p-2 rounded-full border transition-all duration-300 flex-shrink-0 ml-4 ${
                  activeIndex === index 
                    ? "bg-primary text-black border-primary rotate-180" 
                    : "bg-transparent text-muted-foreground border-white/10 group-hover:border-primary/50"
                }`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-dashed border-white/10 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
