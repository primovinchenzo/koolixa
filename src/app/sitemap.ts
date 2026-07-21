import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://koolixa.com';

  const paths = [
    '',
    '/services',
    '/services/managed-it',
    '/services/cybersecurity',
    '/services/web-development',
    '/services/project-delivery',
    '/services/backup-stability',
    '/about',
    '/why-koolixa',
    '/trust',
    '/contact',
    '/careers',
    '/contributions',
    '/contributions/vincent-centeno',
    '/contributions/gabriel-gaytan',
    '/contributions/brandon-caballero',
    '/contributions/erika-williams',
    '/contributions/nicole-macias',
    '/contributions/diego-quinones',
    '/contributions/ignacio-salcido',
    '/contributions/joel-bustamante',
    '/contributions/jacob-medrano',
    '/contributions/diego-salazar',
    '/contributions/jesus-garcia-gabe-venegas',
    '/insights',
    '/insights/hardening-directory-environments',
    '/insights/understanding-co-managed-soc',
    '/insights/calculating-rto-rpo-stability',
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.includes('/insights/') ? 'monthly' : 'weekly',
    priority: path === '' ? 1.0 : path.startsWith('/services/') ? 0.8 : 0.6,
  }));
}
