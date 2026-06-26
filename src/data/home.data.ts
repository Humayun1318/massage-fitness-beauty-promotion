import type {
  Service,
  Treatment,
  Testimonial,
  FAQItem,
  Stat,
  ProcessStep,
  WhyCard,
  Benefit,
} from '@/types';

/* ── Services ───────────────────────────────────────────────── */
export const SERVICES: Service[] = [
  {
    id: 'massage',
    category: 'Wellness',
    title: 'Massage',
    description: 'Focuses on fixing underlying issues, whether they are related to muscle injuries',
    image: 'https://i.ibb.co.com/fd1zGk1F/Untitled-design.png',
    duration: '60 – 90 min',
    badge: 'Most Popular',
    href: '/services',
  },
  {
    id: 'seated',
    category: 'Wellness',
    title: 'Seated Massage',
    description:
      'Enjoy quick, effective relief with our seated massage — quick, clothed relief for back, neck',
    image: 'https://i.ibb.co.com/RktVLqdm/Untitled-design-2.png',
    duration: '15 – 30 min',
    href: '/seated-massage',
  },
  {
    id: 'training',
    category: 'Fitness',
    title: 'Personal Training',
    description:
      'I am a personal trainer who specialises in rehabilitation with my primary focus on promoting',
    image: 'https://i.ibb.co.com/nN4L7Qwc/Untitled-design-2025-08-04-T182155-647.png',
    duration: '45 – 60 min',
    href: '/personal-training',
  },
  {
    id: 'beauty',
    category: 'Beauty',
    title: 'Beauty Packages',
    description:
      'Indulge in our carefully curated beauty packages designed to refresh, rejuvenate,',
    image: 'https://i.ibb.co.com/xt0RZfZ5/Untitled-design-1.png',
    duration: '30 – 120 min',
    href: '/beauty-packages',
  },
];

/* ── Treatments (featured) ──────────────────────────────────── */
export const TREATMENTS: Treatment[] = [
  {
    id: 'deep-tissue',
    category: 'Massage',
    title: 'Deep Tissue Massage',
    description:
      'Targets deep muscle layers to release chronic tension, improve posture, and restore range of motion. Ideal for athletes and desk workers.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=700&q=80',
    icon: '✦',
    href: '/services',
  },
  {
    id: 'hot-stone',
    category: 'Massage',
    title: 'Hot Stone Therapy',
    description:
      'Smooth heated basalt stones melt away tension while improving circulation and inducing a state of profound relaxation.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80',
    icon: '◆',
    href: '/services',
  },
  {
    id: 'facials',
    category: 'Beauty',
    title: 'Luxury Facials',
    description:
      'Bespoke facial treatments using premium skincare ranges, tailored to your skin type and specific concerns.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
    icon: '❋',
    href: '/beauty-packages',
  },
  {
    id: 'strength',
    category: 'Fitness',
    title: 'Strength & Conditioning',
    description:
      'Progressive overload programming designed around your equipment, space, and schedule. Measurable results guaranteed.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=700&q=80',
    icon: '⬡',
    href: '/personal-training',
  },
  {
    id: 'sports',
    category: 'Massage',
    title: 'Sports Recovery',
    description:
      'Pre and post-event sports massage to maximise performance, reduce injury risk, and speed up muscle recovery.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700&q=80',
    icon: '▲',
    href: '/services',
  },
];

/* ── Why choose us ──────────────────────────────────────────── */
export const WHY_CARDS: WhyCard[] = [
  {
    title: 'Fully Qualified',
    description: 'Holding professional qualifications in massage therapy, fitness, and beauty.',
  },
  {
    title: 'Fully Insured',
    description:
      'Complete public liability and professional indemnity insurance for your peace of mind.',
  },
  {
    title: 'Mobile Services',
    description:
      'We come to you — home, hotel, office, or holiday property. No travel on your part.',
  },
  {
    title: 'Flexible Booking',
    description:
      'Early mornings, evenings, and weekends available. Book online in under two minutes.',
  },
  {
    title: 'Pro Equipment',
    description:
      'All professional-grade equipment and premium product ranges brought to every appointment.',
  },
  {
    title: 'Personalised Care',
    description: 'Every session is tailored — no cookie-cutter programmes, no generic treatments.',
  },
];

/* ── Process steps ──────────────────────────────────────────── */
export const PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: 'Book Online',
    description:
      'Choose your service, pick a time that works for you, and confirm your booking in minutes.',
  },
  {
    step: 2,
    title: 'Consultation',
    description:
      'A short pre-session consultation ensures every treatment is perfectly tailored to your needs.',
  },
  {
    step: 3,
    title: 'We Come To You',
    description: 'We arrive fully equipped at your door — no preparation needed on your part.',
  },
  {
    step: 4,
    title: 'Relax & Enjoy',
    description: 'Experience a truly premium, private session without ever leaving your own space.',
  },
];

/* ── Benefits ───────────────────────────────────────────────── */
export const BENEFITS: Benefit[] = [
  { title: 'Stress Relief', description: 'Proven techniques to lower cortisol and restore calm.' },
  { title: 'Better Mobility', description: 'Increase range of motion and reduce joint stiffness.' },
  { title: 'Faster Recovery', description: 'Accelerate muscle repair after sport or surgery.' },
  {
    title: 'Radiant Beauty',
    description: 'Premium treatments for glowing, healthy skin and nails.',
  },
  {
    title: 'Fitness Results',
    description: 'Structured programmes that deliver measurable progress.',
  },
  { title: 'Improved Wellbeing', description: 'Holistic care for body, mind, and confidence.' },
];

/* ── Testimonials ───────────────────────────────────────────── */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    location: 'Melbourne, VIC',
    rating: 5,
    review:
      "Absolutely incredible. The deep tissue session was the best massage I've had in years — and the fact that she came to my house made it even better. Completely professional, deeply relaxing.",
    initials: 'SM',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    id: 't2',
    name: 'James R.',
    location: 'Sydney, NSW',
    rating: 5,
    review:
      "I've been training with Purls for three months now and the results are honestly remarkable. The sessions are challenging, expertly programmed, and she adapts everything to my home gym setup.",
    initials: 'JR',
    accent: 'from-blue-400 to-purple-500',
  },
  {
    id: 't3',
    name: 'Olivia T.',
    location: 'Brisbane, QLD',
    rating: 5,
    review:
      'Booked the luxury facial package and I was blown away. The products, the technique, the attention to my skin concerns — all completely bespoke. My skin has never looked better.',
    initials: 'OT',
    accent: 'from-purple-400 to-pink-500',
  },
  {
    id: 't4',
    name: 'Mark D.',
    location: 'Perth, WA',
    rating: 5,
    review:
      'Had a sports recovery massage after a marathon and I was back training within 48 hours — record time for me. The expertise and professionalism is second to none.',
    initials: 'MD',
    accent: 'from-emerald-400 to-cyan-500',
  },
];

/* ── Stats ──────────────────────────────────────────────────── */
export const STATS: Stat[] = [
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 2000, suffix: '+', label: 'Treatments Completed' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 4.9, suffix: '★', label: 'Average Rating' },
];

/* ── FAQ ────────────────────────────────────────────────────── */
export const FAQ: FAQItem[] = [
  {
    question: 'What areas do you cover?',
    answer:
      'We currently serve clients across the greater metropolitan area and surrounding suburbs. Travel fees may apply for locations beyond 30km. Contact us to check availability in your area.',
  },
  {
    question: 'What do I need to prepare before your arrival?',
    answer:
      'Very little! Simply ensure there is enough space for the massage table or training session. We bring all professional equipment, products, and towels — you just need to be comfortable in your own home.',
  },
  {
    question: 'Are your services suitable for medical conditions?',
    answer:
      'Yes. We work with clients recovering from injury, managing chronic pain, or with specific medical considerations. A brief pre-session consultation ensures all treatments are adapted safely to your health history.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Simply use our Contact page, send us a message via email, or call directly. We offer same-day and next-day availability in most cases, with flexible morning, evening, and weekend slots.',
  },
  {
    question: 'Are you fully qualified and insured?',
    answer:
      'Absolutely. We hold professional qualifications in massage therapy, personal training, and beauty therapy, along with full public liability and professional indemnity insurance.',
  },
  {
    question: 'Do you offer gift vouchers?',
    answer:
      'Yes! Our gift vouchers make the perfect present for any occasion. They are available for any service or monetary value. Contact us to arrange a personalised voucher.',
  },
];
