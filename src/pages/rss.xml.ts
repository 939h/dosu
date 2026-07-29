import rss from '@astrojs/rss';
export async function GET(context) { return rss({ title: 'DOSU Optical Blog', description: 'Eye care education from DOSU Optical.', site: context.site, items: [{ title: 'Progressive Lenses Explained', pubDate: new Date('2026-07-29'), link: '/blog/progressive-lenses-guide', description: 'A practical guide to progressive lenses.' }] }); }
