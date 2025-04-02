import React from "react";
import { Helmet } from "react-helmet";
import profileWebp from "../../assets/profile.webp";

const SEOHelmet = ({ title, description, keywords }) => {
  const siteURL = "https://venkatpantham.github.io/";
  const defaultDescription =
    "Software Engineer with expertise in full-stack development, building high-performance applications";
  const defaultKeywords =
    "software engineer, full stack developer, react developer, web development";

  return (
    <Helmet>
      <title>
        {title
          ? `${title} | Venkat Pantham`
          : "Venkat Pantham | Software Engineer"}
      </title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Preload LCP image */}
      <link 
        rel="preload" 
        href={profileWebp} 
        as="image" 
        type="image/webp"
        fetchpriority="high"
      />

      {/* OpenGraph Tags */}
      <meta
        property="og:title"
        content={title || "Venkat Pantham | Software Engineer"}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteURL} />
      <meta property="og:image" content={`${siteURL}/og-image.png`} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title || "Venkat Pantham | Software Engineer"}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={`${siteURL}/og-image.png`} />

      {/* Other Important Meta Tags */}
      <meta name="author" content="Venkat Pantham" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={siteURL} />
    </Helmet>
  );
};

export default SEOHelmet;
