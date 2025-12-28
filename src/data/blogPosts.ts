export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  keywords: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "top-5-wedding-venues-in-jaipur-2025",
    title: "Top 5 Wedding Venues in Jaipur for 2025 (And Why You Need a Great Anchor)",
    excerpt: "Planning a destination wedding in Jaipur? Discover the top luxury palaces and resorts like The Leela and Fairmont, and learn how to elevate your Sangeet night.",
    date: "December 29, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop",
    keywords: "wedding venues jaipur, best anchor in jaipur, destination wedding rajasthan, sangeet anchor",
    content: `
      <p class="mb-4 text-lg">Jaipur is the wedding capital of the world. As an anchor who has hosted over <strong>1100 events</strong> in the Pink City, I have seen the magic that happens when a royal venue meets high-energy entertainment.</p>
      
      <h2 class="text-2xl font-display font-bold text-primary mt-8 mb-4">1. The Leela Palace Jaipur</h2>
      <p class="mb-4">Known for its breathtaking white marble architecture and views of the Aravalli hills, The Leela is perfect for a royal <em>Varmala</em>. The acoustics in the ballroom are fantastic for my high-energy Sangeet hosting style.</p>
      
      <h2 class="text-2xl font-display font-bold text-primary mt-8 mb-4">2. Fairmont Jaipur</h2>
      <p class="mb-4">If you want a traditional Rajasthani vibe with modern luxury, Fairmont is the choice. I have hosted some of my biggest corporate events and weddings here. The grand entrance is perfect for a Baraat procession.</p>
      
      <h2 class="text-2xl font-display font-bold text-primary mt-8 mb-4">3. Rambagh Palace</h2>
      <p class="mb-4">The jewel of Jaipur. A wedding here isn't just an event; it's a piece of history. For venues this grand, you need an anchor who can command attention without overshadowing the elegance.</p>

      <h2 class="text-2xl font-display font-bold text-primary mt-8 mb-4">Why You Need a Professional Anchor?</h2>
      <p class="mb-4">A great venue sets the scene, but a great anchor sets the mood. Whether it's managing the entry of the Bride and Groom or playing interactive games during dinner, the right voice makes the difference between a "nice dinner" and a "party to remember."</p>
      
      <p class="mt-8 p-4 bg-white/5 border border-primary/20 rounded-lg"><strong>Planning a wedding in Jaipur?</strong> <a href="/contact" class="text-primary hover:underline">Contact Anchor Yash today</a> to discuss your Sangeet and Haldi scripts.</p>
    `
  }
];
