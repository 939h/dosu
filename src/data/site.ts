export const site = {
  name: 'DOSU Optical',
  url: 'https://dosuoptical.com',
  phone: '+60 19-7099 313',
  whatsapp: 'https://wa.me/60197099313',
  address: 'No 49, Jalan USJ 10/1g Taipan Business Center, 47620, Subang Jaya, Selangor, Malaysia',
  maps: 'https://www.google.com/maps/search/?api=1&query=No%2049%20Jalan%20USJ%2010%2F1g%20Taipan%20Business%20Center%2047620%20Subang%20Jaya%20Selangor%20Malaysia',
  hours: ['Mon–Sat: 11:00 AM – 8:30 PM', 'Sunday: 12:00 PM – 7:00 PM'],
  social: { facebook: 'https://www.facebook.com/dosueyewear', instagram: 'https://www.instagram.com/dosueyewear', tiktok: 'https://tiktok.com/@dosueyewear' },
};

export const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services/eye-examination'],
  ['Brands', '/brands'],
  ['Learn', '/learn/myopia'],
  ['Blog', '/blog/progressive-lenses-guide'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
];

export const services = [
  { slug: 'eye-examination', title: 'Comprehensive Eye Examination', desc: 'Detailed prescription, comfort, binocular vision, and eye health checks for clear everyday sight.' },
  { slug: 'childrens-eye-care', title: 'Children\'s Eye Care', desc: 'Age-appropriate vision assessments for learning, development, and classroom confidence.' },
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
    label: 'Brands',
    href: '/brands',
    description: 'Curated frames, sunglasses, opthalmic lenses, and featured collections in one place.',
    items: [
      { title: 'Frames', slug: 'frames', desc: 'Premium acetate, titanium, and lightweight daily eyewear.' },
      { title: 'Sunglasses', slug: 'sunglasses', desc: 'Sun-ready styles with prescription and comfort options.' },
      { title: 'Opthalmic lenses', slug: 'opthalmic-lenses', desc: 'Progressive, office, blue-control, and daily-use lenses.' },
      { title: 'Featured Collections', slug: 'featured-collections', desc: 'A sharper edit of DOSU Optical favourites.' },
    ],
  },
  {
    label: 'Learn',
    href: '/learn/myopia',
    description: 'Plain-language guides that help you choose eye care with confidence.',
    items: [
      { title: 'Eye Health', slug: 'eye-health', desc: 'What to expect before and after your examination.' },
      { title: 'Childrens Vision', slug: 'childrens-vision', desc: 'Support for school-age vision and myopia conversations.' },
      { title: 'Progressive Lens Guide', slug: 'lens-guide', desc: 'How modern multifocals are measured and fitted.' },
      { title: 'Digital Eye Strain', slug: 'digital-eye-strain', desc: 'Screen comfort tips for work, study, and gaming.' },
      { title: 'FAQ', slug: '../faq', desc: 'Fast answers on appointments, frames, lenses, and care.' },
    ],
  },
];

export const learnTopics = [
  { slug: 'myopia', title: 'Myopia', desc: 'A simple guide to short-sightedness and monitoring progression.' },
  { slug: 'digital-eye-strain', title: 'Digital Eye Strain', desc: 'Tips for reducing screen-related eye discomfort.' },
  { slug: 'lens-guide', title: 'Lens Guide', desc: 'Help choosing lenses, coatings, and fitting options.' },
  { slug: 'childrens-vision', title: 'Children\'s Vision', desc: 'Signs to watch for and when to seek a check.' },
  { slug: 'eye-health', title: 'Eye Health', desc: 'Basic eye health reminders and when to consult a clinician.' },
];

export const learnEducation: Record<string, { sections: { heading: string; body: string }[]; faqs: { question: string; answer: string }[] }> = {
  myopia: {
    sections: [
      { heading: 'What is it?', body: 'Myopia (short-sightedness) makes distance vision blurry while near vision remains clearer.' },
      { heading: 'Who should pay attention?', body: 'Children, teenagers, and frequent screen users should monitor vision regularly.' },
      { heading: 'Why does it matter?', body: 'Higher myopia can affect long-term eye health and daily activities like driving and sports.' },
      { heading: 'What can help?', body: 'Regular checks, outdoor time, and appropriate optical options can help manage progression.' },
      { heading: 'When to ask for advice?', body: 'When vision becomes blurry, headaches occur, or a child shows reading or classroom difficulties.' },
    ],
    faqs: [
      { question: 'Can glasses make myopia worse?', answer: 'No. Correctly prescribed glasses improve clarity and comfort.' },
      { question: 'How often should children with myopia be checked?', answer: 'Review frequency depends on age and change; ask your clinician for personalised advice.' },
      { question: 'Is outdoor time useful?', answer: 'Yes. Outdoor time is commonly encouraged alongside other measures.' },
    ],
  },
  'digital-eye-strain': {
    sections: [
      { heading: 'What is it?', body: 'Symptoms like tired, dry, or blurry eyes after prolonged screen use.' },
      { heading: 'Who should pay attention?', body: 'Office workers, students, and heavy screen users.' },
      { heading: 'What can help?', body: 'Blinking more, ergonomic setup, breaks, and correct prescription.' },
    ],
    faqs: [
      { question: 'Do blue-control lenses solve all screen strain?', answer: 'Not alone; they may help some people but combine with other measures.' },
      { question: 'Why do my eyes feel dry on screens?', answer: 'Reduced blink rate during screen use causes faster tear evaporation.' },
    ],
  },
  'lens-guide': {
    sections: [
      { heading: 'What is it?', body: 'Guidance to match prescription, frame, and lifestyle to suitable lenses.' },
      { heading: 'Who should pay attention?', body: 'Anyone buying new glasses or changing lenses.' },
      { heading: 'What can help?', body: 'Bring current glasses and describe daily tasks for best recommendations.' },
    ],
    faqs: [
      { question: 'Are expensive lenses always better?', answer: 'Not always; suitability and fit matter more than price alone.' },
    ],
  },
};

export const serviceEducation: Record<string, { sections: { heading: string; body: string }[]; faqs: { question: string; answer: string }[] }> = {
  'eye-examination': {
    sections: [
      { heading: 'What is it?', body: 'A check of vision, prescription, eye coordination, and basic eye health.' },
      { heading: 'Who needs it?', body: 'Adults and children who notice changes in vision or comfort.' },
    ],
    faqs: [
      { question: 'How long does an eye examination take?', answer: 'Typically 10–30 minutes depending on tests required.' },
    ],
  },
};
