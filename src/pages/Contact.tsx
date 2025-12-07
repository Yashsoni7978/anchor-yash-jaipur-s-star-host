import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const serviceCategories = [
  {
    group: "Anchoring Services",
    options: [
      "Wedding Anchor",
      "Corporate Event Anchor",
      "Fashion Show Host",
      "Sangeet & Haldi Hosting",
      "Kids Event Hosting",
      "Pool Party / Social Event",
    ],
  },
  {
    group: "Event Management",
    options: [
      "Full Event Planning",
      "Event Designing & Decor",
      "Wedding Planning",
      "Sangeet Choreography",
      "Destination Wedding",
      "Corporate Event Production",
    ],
  },
  {
    group: "Combined Services",
    options: [
      "Anchoring + Event Management",
      "Complete Wedding Package",
      "Corporate Event Package",
    ],
  },
];

const allServices = serviceCategories.flatMap(cat => 
  cat.options.map(opt => ({ group: cat.group, value: opt }))
);

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
    location: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formspree submission
      const response = await fetch("https://formspree.io/f/xyzgkqvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          eventDate: formData.eventDate,
          location: formData.location,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Inquiry Sent Successfully!",
          description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          eventDate: "",
          location: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Book <span className="text-gradient-gold">Your Event</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to create an unforgettable event? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <a
                    href="tel:+917737877978"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">+91 77378 77978</p>
                    </div>
                  </a>

                  <a
                    href="mailto:yashsoni7978@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">yashsoni7978@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">Jaipur, Rajasthan, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="font-semibold">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold">Quick Contact</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/917737877978"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="whatsapp" className="gap-2">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+917737877978">
                    <Button variant="outline" className="gap-2">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/anchor_yash_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@Anchor_Yash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video bg-card border border-border rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256716884!2d75.62574894179819!3d26.88514167956319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anchor Yash Location - Jaipur"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-display font-bold mb-6">Send a Booking Inquiry</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceCategories.map((category) => (
                        <optgroup key={category.group} label={category.group}>
                          {category.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Event Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                        placeholder="Venue or City"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <optgroup label="Anchoring">
                        <option value="15k-25k">₹15,000 - ₹25,000</option>
                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                        <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      </optgroup>
                      <optgroup label="Event Management">
                        <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                        <option value="3L-5L">₹3,00,000 - ₹5,00,000</option>
                        <option value="5L-10L">₹5,00,000 - ₹10,00,000</option>
                        <option value="10L+">₹10,00,000+</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell Us About Your Event
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Share details about your event, guest count, special requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Your information is secure and will never be shared.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
