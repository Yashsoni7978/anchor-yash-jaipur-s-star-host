import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

export const SEO = ({ title, description, canonical, keywords }: SEOProps) => {
  const siteUrl = 'https://yashsoni.in';
  
  // ✅ FIXED: Added backticks for the template literal
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // 🔧 TYPE FIX: Cast Helmet to 'any' to stop TypeScript complaints
  const HelmetWrapper = Helmet as any;

  return (
    <HelmetWrapper>
      {/* Standard Meta Tags */}
      <title>{title} | Anchor Yash Soni</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph (Facebook/WhatsApp/LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Anchor Yash Soni" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Geo-Targeting for Jaipur/Rajasthan (CRITICAL FOR LOCAL SEO) */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur" />
      <meta name="geo.position" content="26.9124;75.7873" />
      <meta name="ICBM" content="26.9124, 75.7873" />
    </HelmetWrapper>
  );
};
