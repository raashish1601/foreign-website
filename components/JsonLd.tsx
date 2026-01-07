// JSON-LD structured data for SEO
export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Foreign Admits',
    description: 'Your trusted partner for studying abroad. Expert guidance for university admissions, visa processing, and test preparation.',
    url: 'https://www.foreignadmits.com',
    logo: 'https://www.foreignadmits.com/logo.png',
    sameAs: [
      'https://www.facebook.com/foreignadmits',
      'https://www.twitter.com/foreignadmits',
      'https://www.instagram.com/foreignadmits',
      'https://www.linkedin.com/company/foreignadmits',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'Offer',
      category: 'Education Consulting',
      description: 'Study abroad consultation and services',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
