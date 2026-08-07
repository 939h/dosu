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
      { title: 'Children’s Vision', slug: 'childrens-vision', desc: 'Support for school-age vision and myopia conversations.' },
      { title: 'Progressive Lens Guide', slug: 'lens-guide', desc: 'How modern multifocals are measured and fitted.' },
      { title: 'Digital Eye Strain', slug: 'digital-eye-strain', desc: 'Screen comfort tips for work, study, and gaming.' },
      { title: 'FAQ', slug: '../faq', desc: 'Fast answers on appointments, frames, lenses, and care.' },
    ],
  },
];


export const learnTopics = [
  { slug: 'myopia', title: 'Myopia', desc: 'A simple guide to short-sightedness, why it can change during childhood, and how regular reviews support clearer vision.' },
  { slug: 'digital-eye-strain', title: 'Digital Eye Strain', desc: 'Practical information for tired, dry, or blurry eyes during screen-heavy work, study, and gaming.' },
  { slug: 'lens-guide', title: 'Lens Guide', desc: 'Plain-language help for understanding everyday lenses, progressive lenses, coatings, and comfortable fitting choices.' },
  { slug: 'childrens-vision', title: 'Children’s Vision', desc: 'Simple signs parents can watch for, plus why children need clear comfortable vision for learning and daily confidence.' },
  { slug: 'eye-health', title: 'Eye Health', desc: 'Easy reminders about eye examinations, common symptoms, healthy habits, and when to seek professional advice.' },
];

export const learnEducation: Record<string, { sections: { heading: string; body: string }[]; faqs: { question: string; answer: string }[] }> = {
  myopia: {
    sections: [
      { heading: 'What is it?', body: 'Myopia, or short-sightedness, means far objects look blurry while near tasks may still feel clear. It usually happens when light focuses in front of the reti[...] },
      { heading: 'Who should pay attention?', body: 'Children, teenagers, students, frequent screen users, and people with short-sighted parents should pay attention because myopia can progress du[...] },
      { heading: 'Why does it matter?', body: 'Clear distance vision supports classroom learning, sports, driving, and everyday safety. Higher myopia may also need closer long-term eye health moni[...] },
      { heading: 'What can help?', body: 'Regular eye checks, accurate glasses or contact lenses, balanced near work habits, outdoor time, and suitable myopia management options may be discussed a[...] },
      { heading: 'When to ask for advice?', body: 'Ask for advice if distance vision becomes blurry, a child squints, school board viewing is difficult, headaches appear, or the prescription chang[...] },
    ],
    faqs: [
      { question: 'Can glasses make myopia worse?', answer: 'Correctly prescribed glasses do not make myopia worse. They help the eyes see clearly and reduce unnecessary blur.' },
      { question: 'How often should children with myopia be checked?', answer: 'Review timing depends on age and prescription changes, but children with progressing myopia commonly need regular fo[...] },
      { question: 'Is outdoor time useful?', answer: 'Outdoor time is commonly encouraged for children as part of healthy visual habits, alongside sensible breaks from prolonged near work.' },
    ],
  },
  'digital-eye-strain': {
    sections: [
      { heading: 'What is it?', body: 'Digital eye strain describes tired, dry, blurry, or uncomfortable eyes linked to prolonged screen use, close working distance, glare, posture, or uncorrected[...] },
      { heading: 'Who should pay attention?', body: 'Office workers, students, gamers, designers, drivers using digital dashboards, and anyone using screens for long periods should monitor symptom[...] },
      { heading: 'Why does it matter?', body: 'Screen discomfort can reduce concentration, reading speed, work comfort, and sleep routines when visual habits and environment are not managed.' },
      { heading: 'What can help?', body: 'Helpful steps include correct prescription, comfortable screen distance, regular blinking, short breaks, reduced glare, good lighting, and checking for dr[...] },
      { heading: 'When to ask for advice?', body: 'Seek advice when symptoms persist, vision fluctuates, headaches increase, eyes become red or painful, or screen work feels difficult even after b[...] },
    ],
    faqs: [
      { question: 'Do blue-control lenses solve all screen strain?', answer: 'Not by themselves. Lens choice can help some people, but prescription, dryness, lighting, posture, and breaks are also[...] },
      { question: 'Why do my eyes feel dry on screens?', answer: 'People often blink less when concentrating on screens, which can make tears evaporate faster and cause dryness or watering.' },
      { question: 'Can old glasses cause screen discomfort?', answer: 'Yes. A small prescription change or unsuitable lens design can make computer and near tasks more tiring.' },
    ],
  },
  'lens-guide': {
    sections: [
      { heading: 'What is it?', body: 'A lens guide helps match your prescription, frame, work distance, lifestyle, and comfort needs to suitable spectacle lens designs and coatings.' },
      { heading: 'Who should pay attention?', body: 'Anyone buying new glasses, changing prescription, starting progressives, working long hours on screens, or choosing thinner lenses should unde[...] },
      { heading: 'Why does it matter?', body: 'The right lens design affects clarity, comfort, thickness, weight, glare control, adaptation, and how naturally you move between distance and near t[...] },
      { heading: 'What can help?', body: 'Bring your current glasses and describe your daily tasks. Accurate measurements, frame fit, lens index, coatings, and usage guidance all support better r[...] },
      { heading: 'When to ask for advice?', body: 'Ask for advice when lenses feel heavy, vision is narrow, night glare bothers you, reading is difficult, or progressives feel hard to adapt to.' [...] },
    ],
  },
};