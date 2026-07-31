export const site = {
  name: 'DOSU Optical',
  url: 'https://dosuoptical.com',
  phone: '+60 19-7099 313',
  whatsapp: 'https://wa.me/60197099313',
  address: 'No 49, Jalan USJ 10/1g Taipan Business Center, 47620, Subang Jaya, Selangor, Malaysia',
  maps: 'https://www.google.com/maps/search/?api=1&query=No%2049%20Jalan%20USJ%2010%2F1g%20Taipan%20Business%20Center%2047620%20Subang%20Jaya%20Selangor%20Malaysia',
  hours: ['Mon–Sat: 11:00 AM – 8:30 PM', 'Sunday: 12:00 PM – 7:00 PM'],
  social: { facebook: 'https://www.facebook.com/dosueyewear', instagram: 'https://www.instagram.com/dosueyewear', tiktok: 'https://www.tiktok.com/dosueyewear' },
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
      { heading: 'What is it?', body: 'Myopia, or short-sightedness, means far objects look blurry while near tasks may still feel clear. It usually happens when light focuses in front of the retina instead of directly on it.' },
      { heading: 'Who should pay attention?', body: 'Children, teenagers, students, frequent screen users, and people with short-sighted parents should pay attention because myopia can progress during growing years.' },
      { heading: 'Why does it matter?', body: 'Clear distance vision supports classroom learning, sports, driving, and everyday safety. Higher myopia may also need closer long-term eye health monitoring.' },
      { heading: 'What can help?', body: 'Regular eye checks, accurate glasses or contact lenses, balanced near work habits, outdoor time, and suitable myopia management options may be discussed after an assessment.' },
      { heading: 'When to ask for advice?', body: 'Ask for advice if distance vision becomes blurry, a child squints, school board viewing is difficult, headaches appear, or the prescription changes quickly.' },
    ],
    faqs: [
      { question: 'Can glasses make myopia worse?', answer: 'Correctly prescribed glasses do not make myopia worse. They help the eyes see clearly and reduce unnecessary blur.' },
      { question: 'How often should children with myopia be checked?', answer: 'Review timing depends on age and prescription changes, but children with progressing myopia commonly need regular follow-up.' },
      { question: 'Is outdoor time useful?', answer: 'Outdoor time is commonly encouraged for children as part of healthy visual habits, alongside sensible breaks from prolonged near work.' },
    ],
  },
  'digital-eye-strain': {
    sections: [
      { heading: 'What is it?', body: 'Digital eye strain describes tired, dry, blurry, or uncomfortable eyes linked to prolonged screen use, close working distance, glare, posture, or uncorrected prescription needs.' },
      { heading: 'Who should pay attention?', body: 'Office workers, students, gamers, designers, drivers using digital dashboards, and anyone using screens for long periods should monitor symptoms.' },
      { heading: 'Why does it matter?', body: 'Screen discomfort can reduce concentration, reading speed, work comfort, and sleep routines when visual habits and environment are not managed.' },
      { heading: 'What can help?', body: 'Helpful steps include correct prescription, comfortable screen distance, regular blinking, short breaks, reduced glare, good lighting, and checking for dryness or focusing issues.' },
      { heading: 'When to ask for advice?', body: 'Seek advice when symptoms persist, vision fluctuates, headaches increase, eyes become red or painful, or screen work feels difficult even after breaks.' },
    ],
    faqs: [
      { question: 'Do blue-control lenses solve all screen strain?', answer: 'Not by themselves. Lens choice can help some people, but prescription, dryness, lighting, posture, and breaks are also important.' },
      { question: 'Why do my eyes feel dry on screens?', answer: 'People often blink less when concentrating on screens, which can make tears evaporate faster and cause dryness or watering.' },
      { question: 'Can old glasses cause screen discomfort?', answer: 'Yes. A small prescription change or unsuitable lens design can make computer and near tasks more tiring.' },
    ],
  },
  'lens-guide': {
    sections: [
      { heading: 'What is it?', body: 'A lens guide helps match your prescription, frame, work distance, lifestyle, and comfort needs to suitable spectacle lens designs and coatings.' },
      { heading: 'Who should pay attention?', body: 'Anyone buying new glasses, changing prescription, starting progressives, working long hours on screens, or choosing thinner lenses should understand the basics.' },
      { heading: 'Why does it matter?', body: 'The right lens design affects clarity, comfort, thickness, weight, glare control, adaptation, and how naturally you move between distance and near tasks.' },
      { heading: 'What can help?', body: 'Bring your current glasses and describe your daily tasks. Accurate measurements, frame fit, lens index, coatings, and usage guidance all support better results.' },
      { heading: 'When to ask for advice?', body: 'Ask for advice when lenses feel heavy, vision is narrow, night glare bothers you, reading is difficult, or progressives feel hard to adapt to.' },
    ],
    faqs: [
      { question: 'Are expensive lenses always better?', answer: 'Not always. The best lens is the one that suits your prescription, frame, budget, and daily visual needs.' },
      { question: 'Do progressive lenses have visible lines?', answer: 'No. Progressive lenses provide distance, intermediate, and near zones without the visible segment line found in some bifocals.' },
      { question: 'Are coatings important?', answer: 'Coatings can improve glare control, scratch resistance, cleaning, and comfort, especially for daily wear and night driving.' },
    ],
  },
  'childrens-vision': {
    sections: [
      { heading: 'What is it?', body: 'Children’s vision covers how clearly and comfortably a child sees for reading, classroom learning, sports, screens, and everyday activities.' },
      { heading: 'Who should pay attention?', body: 'Parents and teachers should watch children who squint, sit very near screens, avoid reading, lose their place, tilt their head, or complain of headaches.' },
      { heading: 'Why does it matter?', body: 'Children may think blurry vision is normal. Clear comfortable sight supports learning, coordination, attention, confidence, and social activities.' },
      { heading: 'What can help?', body: 'An age-appropriate eye check can identify whether glasses, monitoring, visual habit changes, or myopia management discussions are needed.' },
      { heading: 'When to ask for advice?', body: 'Book a check before school starts, when a teacher notices difficulty, after failed screening, or when a child reports blur, double vision, or eye discomfort.' },
    ],
    faqs: [
      { question: 'Can children tell parents they cannot see clearly?', answer: 'Some can, but many do not realise their vision is different. Behaviour changes can be important clues.' },
      { question: 'Will wearing glasses weaken a child’s eyes?', answer: 'No. Correct glasses help a child see clearly and do not weaken the eyes.' },
      { question: 'Should siblings be checked too?', answer: 'It can be useful, especially when there is family history of myopia or other vision concerns.' },
    ],
  },
  'eye-health': {
    sections: [
      { heading: 'What is it?', body: 'Eye health refers to the condition of the eyes, vision, and comfort, including symptoms such as blur, redness, dryness, floaters, glare, or pain.' },
      { heading: 'Who should pay attention?', body: 'Everyone benefits from routine eye checks, especially people with diabetes, high blood pressure, family eye disease history, high prescriptions, or new symptoms.' },
      { heading: 'Why does it matter?', body: 'Some eye changes develop gradually and may not be obvious at first. Regular checks help identify concerns and guide timely referral when needed.' },
      { heading: 'What can help?', body: 'Healthy habits include regular eye examinations, UV protection outdoors, safe contact lens hygiene, balanced screen habits, and prompt attention to unusual symptoms.' },
      { heading: 'When to ask for advice?', body: 'Seek prompt advice for sudden vision loss, eye pain, flashes, new floaters, injury, strong redness, or symptoms that quickly worsen.' },
    ],
    faqs: [
      { question: 'How often should adults have eye checks?', answer: 'Many adults choose yearly checks, but timing can vary based on age, health conditions, prescription, symptoms, and professional advice.' },
      { question: 'Are sunglasses important?', answer: 'Quality sunglasses help reduce glare and protect the eyes from ultraviolet exposure when outdoors.' },
      { question: 'Can eye symptoms be linked to general health?', answer: 'Yes. Conditions such as diabetes, blood pressure changes, allergies, and some medications can affect eye comfort or vision.' },
    ],
  },
};


export const serviceEducation: Record<string, { sections: { heading: string; body: string }[]; faqs: { question: string; answer: string }[] }> = {
  'eye-examination': {
    sections: [
      { heading: 'What is it?', body: 'A comprehensive eye examination checks visual clarity, prescription accuracy, eye coordination, focusing comfort, and visible eye health signs. It is not only a glasses power check.' },
      { heading: 'Who needs it?', body: 'Adults, children, drivers, screen users, people with headaches or blurred vision, and anyone with diabetes, high blood pressure, or a family history of eye disease should have routine eye checks.' },
      { heading: 'Why is it important?', body: 'Vision can change gradually. Regular examinations help detect prescription changes, focusing issues, and symptoms that may need medical referral before they affect school, work, or driving.' },
      { heading: 'How does it work?', body: 'The optometry team discusses symptoms and visual tasks, measures vision and prescription, checks eye focusing and coordination when needed, reviews eye health signs, and explains suitable next steps.' },
      { heading: 'When should someone consider it?', body: 'Book an examination if vision becomes blurry, headaches increase, screens feel uncomfortable, night driving is harder, glasses feel wrong, or it has been about one year since the last check.' },
    ],
    faqs: [
      { question: 'How long does an eye examination take?', answer: 'A routine examination often takes around 10 to 20 minutes. More detailed checks, children’s assessments, and contact lens discussions can take longer.' },
      { question: 'Should I bring my current glasses?', answer: 'Yes. Bringing current glasses, contact lens details, and previous prescriptions helps compare changes and understand what has or has not been comfortable.' },
      { question: 'Is an eye examination only for people who need glasses?', answer: 'No. It also helps investigate symptoms such as eye strain, headaches, double vision, dryness, and changes in visual comfort.' },
    ],
  },
  'childrens-eye-care': {
    sections: [
      { heading: 'What is it?', body: 'Children’s eye care is an age-appropriate vision assessment that checks clarity, focusing, eye alignment, and signs that may affect learning or daily activities.' },
      { heading: 'Who needs it?', body: 'Children who squint, sit close to screens, lose place while reading, complain of headaches, have falling school performance, or have parents with myopia should be checked.' },
      { heading: 'Why is it important?', body: 'Children may not realise their vision is unclear. Uncorrected vision problems can affect reading, classroom attention, sports, and confidence.' },
      { heading: 'How does it work?', body: 'The visit uses child-friendly questions and measurements. The optometry team checks vision, prescription, binocular comfort, and whether glasses or monitoring are needed.' },
      { heading: 'When should someone consider it?', body: 'Consider a check before school starts, when symptoms appear, after a teacher raises concerns, or when a child with myopia needs progression monitoring.' },
    ],
    faqs: [
      { question: 'At what age should children have their eyes checked?', answer: 'Children should be checked before starting school and sooner if parents or teachers notice signs of visual difficulty.' },
      { question: 'Can children outgrow vision problems?', answer: 'Some visual needs change with growth, but blur, squinting, headaches, or eye alignment concerns should be assessed rather than ignored.' },
      { question: 'Do children need regular reviews?', answer: 'Yes. Children’s eyes can change quickly, especially if they are short-sighted or spend long hours on near work.' },
    ],
  },
  'myopia-management': {
    sections: [
      { heading: 'What is it?', body: 'Myopia management monitors childhood short-sightedness and uses suitable optical or lifestyle strategies to help reduce the rate of progression where appropriate.' },
      { heading: 'Who needs it?', body: 'It is mainly for children and teenagers with myopia, especially when prescription changes quickly, myopia starts early, or there is family history of high myopia.' },
      { heading: 'Why is it important?', body: 'Higher myopia can increase long-term eye health risks. Slowing progression during childhood may reduce the final level of myopia.' },
      { heading: 'How does it work?', body: 'The optometry team reviews age, prescription history, lifestyle, visual habits, and suitability for options such as myopia-control lenses or contact lens approaches when appropriate.' },
      { heading: 'When should someone consider it?', body: 'Consider myopia management when a child becomes short-sighted, needs stronger lenses within a year, or has parents or siblings with significant myopia.' },
    ],
    faqs: [
      { question: 'Can myopia be cured?', answer: 'Myopia usually cannot be permanently cured with glasses. Management focuses on clear correction and, for suitable children, reducing progression speed.' },
      { question: 'Is outdoor time relevant?', answer: 'Yes. More outdoor time and balanced near work habits are commonly discussed as part of myopia risk management.' },
      { question: 'How often are reviews needed?', answer: 'Review timing depends on age, prescription change, and the management option used. Children with progressing myopia often need regular follow-up.' },
    ],
  },
  'progressive-lenses': {
    sections: [
      { heading: 'What is it?', body: 'Progressive lenses are multifocal spectacle lenses that provide distance, intermediate, and near vision in one lens without visible segment lines.' },
      { heading: 'Who needs it?', body: 'They are commonly used by adults with presbyopia who need help with reading, phone use, computer work, and distance viewing.' },
      { heading: 'Why is it important?', body: 'Accurate progressive lens selection and measurements affect comfort, adaptation, reading posture, and clarity across different working distances.' },
      { heading: 'How does it work?', body: 'The optometry team confirms the prescription, discusses daily tasks, selects a lens design, measures frame position and fitting heights, then explains adaptation and use.' },
      { heading: 'When should someone consider it?', body: 'Consider progressive lenses when switching between distance and reading glasses becomes inconvenient or when near tasks become difficult with distance glasses.' },
    ],
    faqs: [
      { question: 'Do progressive lenses take time to adapt to?', answer: 'Many people need a short adaptation period. Accurate measurements and clear usage guidance reduce common adjustment issues.' },
      { question: 'Are all progressive lenses the same?', answer: 'No. Designs vary by corridor width, distortion control, working distance support, and suitability for different frames and visual habits.' },
      { question: 'Can progressives be used for office work?', answer: 'They can help, but dedicated office lenses may be better for long computer sessions depending on screen distance and posture.' },
    ],
  },
  'contact-lenses': {
    sections: [
      { heading: 'What is it?', body: 'A contact lens consultation checks whether lenses fit safely and comfortably, then teaches correct handling, hygiene, wear time, and replacement routines.' },
      { heading: 'Who needs it?', body: 'People who want glasses-free vision for work, sport, events, or lifestyle reasons may consider contact lenses if their eyes and habits are suitable.' },
      { heading: 'Why is it important?', body: 'Poorly fitted or poorly handled lenses can cause discomfort, dryness, redness, and eye health complications. Proper fitting and education reduce avoidable risks.' },
      { heading: 'How does it work?', body: 'The optometry team reviews prescription, eye surface comfort, lens type, fit, vision, handling technique, hygiene steps, and follow-up needs.' },
      { heading: 'When should someone consider it?', body: 'Consider a consultation before trying lenses for the first time, when current lenses feel dry or unclear, or when switching lens type or wear schedule.' },
    ],
    faqs: [
      { question: 'Can contact lenses be worn every day?', answer: 'Many people can wear lenses daily if fit, eye health, hygiene, and replacement schedule are suitable.' },
      { question: 'Can I sleep in contact lenses?', answer: 'Do not sleep in contact lenses unless they are specifically prescribed for overnight wear.' },
      { question: 'What if lenses feel dry?', answer: 'Dryness may relate to lens material, fit, environment, screen habits, or tear quality. A review can identify practical changes.' },
    ],
  },
  'dry-eye-consultation': {
    sections: [
      { heading: 'What is it?', body: 'A dry eye consultation reviews symptoms such as dryness, burning, watering, redness, and fluctuating vision, then identifies practical care steps.' },
      { heading: 'Who needs it?', body: 'Screen users, contact lens wearers, people in air-conditioned environments, older adults, and anyone with persistent irritation or watery eyes may benefit.' },
      { heading: 'Why is it important?', body: 'Dry eye can affect reading, screen comfort, contact lens wear, and visual stability. Symptoms can worsen when triggers are not addressed.' },
      { heading: 'How does it work?', body: 'The consultation reviews symptoms, environment, screen habits, lens wear, medications where relevant, and visible signs on the eye surface before recommending care steps.' },
      { heading: 'When should someone consider it?', body: 'Consider a consultation when dryness, watering, burning, gritty sensation, or fluctuating vision persists or keeps returning despite basic eye drops.' },
    ],
    faqs: [
      { question: 'Can watery eyes be dry eye?', answer: 'Yes. Irritated dry eyes can water reflexively, so watering does not always mean the eyes are well lubricated.' },
      { question: 'Are eye drops always enough?', answer: 'Not always. Drop type, eyelid hygiene, environment, blinking, screen habits, and contact lens factors may also need review.' },
      { question: 'Can screen use worsen dry eye?', answer: 'Yes. Screen use can reduce blink rate and increase tear evaporation, especially in air-conditioned rooms.' },
    ],
  },
};
