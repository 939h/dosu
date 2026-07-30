export const site = {
  name: 'DOSU Optical',
  url: 'https://dosuoptical.com',
  phone: '+60 19-7099 313',
  whatsapp: 'https://wa.me/60197099313',
  address: 'No 49, Jalan USJ 10/1g Taipan Business Center, 47620, Subang Jaya, Selangor, Malaysia',
  maps: 'https://www.google.com/maps/search/?api=1&query=No%2049%20Jalan%20USJ%2010%2F1g%20Taipan%20Business%20Center%2047620%20Subang%20Jaya%20Selangor%20Malaysia',
  hours: ['Mon–Sat: 11:00 AM – 8:30 PM', 'Sunday: 12:00 PM – 7:00 PM'],
  social: { facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/' },
};

export const nav = [
  ['Home','/'],['About','/about'],['Services','/services/eye-examination'],['Brands','/brands'],['Learn','/learn/myopia'],['Blog','/blog/progressive-lenses-guide'],['FAQ','/faq'],['Contact','/contact']
];

export const services = [
  { slug: 'eye-examination', title: 'Comprehensive Eye Examination', desc: 'Detailed prescription, comfort, binocular vision, and eye health checks for clear everyday sight.' },
  { slug: 'childrens-eye-care', title: 'Children’s Eye Care', desc: 'Age-appropriate vision assessments for learning, development, and classroom confidence.' },
  { slug: 'myopia-management', title: 'Myopia Management', desc: 'Evidence-informed options to monitor and manage childhood short-sightedness progression.' },
  { slug: 'progressive-lenses', title: 'Progressive Lens Consultation', desc: 'Personalised multifocal lens recommendations for clear vision at near, screen, and distance.' },
  { slug: 'contact-lenses', title: 'Contact Lenses', desc: 'Fitting, handling guidance, and follow-up support for healthy contact lens wear.' },
  { slug: 'dry-eye-consultation', title: 'Dry Eye Consultation', desc: 'Symptom review and practical care plans for irritated, tired, watery, or screen-stressed eyes.' },
];

export const megaMenu = [
  {
    label: 'Services',
    href: '/services/eye-examination',
    description: 'Clinical care pathways for families, professionals, and everyday lens wearers.',
    items: services,
  },
  {
    label: 'Eyewear',
    href: '/brands',
    description: 'Curated frames, sunglasses, and lens solutions fitted for your lifestyle.',
    items: [
      { title: 'Frames', slug: 'frames', desc: 'Premium acetate, titanium, and lightweight daily eyewear.' },
      { title: 'Sunglasses', slug: 'sunglasses', desc: 'Sun-ready styles with prescription and comfort options.' },
      { title: 'Lens Solutions', slug: 'lens-solutions', desc: 'Progressive, office, blue-control, and daily-use lenses.' },
      { title: 'Featured Collections', slug: 'featured-collections', desc: 'A sharper edit of DOSU Optical favourites.' },
    ],
  },
  {
    label: 'Learn',
    href: '/learn/myopia',
    description: 'Plain-language guides that help you choose eye care with confidence.',
    items: [
      { title: 'Eye Health', slug: 'eye-health', desc: 'What to expect before and after your examination.' },
      { title: 'Children’s Vision', slug: 'childrens-vision', desc: 'Support for school-age vision and myopia conversations.' },
      { title: 'Progressive Lens Guide', slug: 'lens-guide', desc: 'How modern multifocals are measured and fitted.' },
      { title: 'Digital Eye Strain', slug: 'digital-eye-strain', desc: 'Screen comfort tips for work, study, and gaming.' },
      { title: 'FAQ', slug: '../faq', desc: 'Fast answers on appointments, frames, lenses, and care.' },
    ],
  },
];
