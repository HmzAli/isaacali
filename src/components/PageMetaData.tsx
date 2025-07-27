import { useInsertionEffect } from 'react';

export function PageMetadata({ 
  title = 'Isaac Ali',
  description = 'Bespoke websites & landing pages',
  canonical = 'https://IsaacAli.com',
  keywords = '',
  ogImage = ''
}) {
  useInsertionEffect(() => {
    document.title = title;

    const metaTags = {
      'description': { name: 'description', content: description },
      'keywords': { name: 'keywords', content: keywords },
      'og:title': { property: 'og:title', content: title },
      'og:description': { property: 'og:description', content: description },
      'og:url': { property: 'og:url', content: canonical },
      'og:image': { property: 'og:image', content: ogImage },
      'twitter:title': { name: 'twitter:title', content: title },
      'twitter:description': { name: 'twitter:description', content: description },
      'twitter:image': { name: 'twitter:image', content: ogImage }
    };

    Object.entries(metaTags).forEach(([key, config]) => {
      const attr = Object.keys(config)[0];
      const content = Object.values(config)[1];
      
      let meta = document.querySelector(`meta[${attr}="${key}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link') as HTMLLinkElement;
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    return () => {
      document.title = 'Isaac Ali';
    };
  }, [title, description, canonical, keywords, ogImage]);

  return null;
}