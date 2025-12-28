import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  // If the blog doesn't exist, redirect back to the main blog list
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <SEO 
        title={`${post.title} | Anchor Yash Blog`}
        description={post.excerpt}
        keywords={post.keywords}
        canonical={`/blog/${post.slug}`}
      />
      
      <article className="pt-24 pb-20">
        {/* Hero Image */}
        <div className="w-full h-[50vh] relative mb-12">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 container-custom flex flex-col justify-end pb-12">
            <Link to="/blog" className="text-white/80 hover:text-white flex items-center gap-2 mb-6 w-fit hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 max-w-4xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/80 text-sm font-medium">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {/* This div renders your HTML string safely */}
            <div 
              className="prose prose-invert prose-lg max-w-none 
                         prose-p:text-gray-300 prose-headings:text-white prose-a:text-primary 
                         prose-strong:text-white prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-card border border-border p-8 rounded-xl sticky top-32 text-center">
              <h3 className="text-xl font-display font-bold mb-3">Planning an Event?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Don't let your big day be boring. Hire the most energetic anchor in Jaipur.
              </p>
              <Link to="/contact">
                <Button variant="gold" className="w-full btn-hover">Book Anchor Yash</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
