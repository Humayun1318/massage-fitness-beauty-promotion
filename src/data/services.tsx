import {
  Activity,
  Scissors,
  Footprints,
  Baby,
  Droplets,
  Flame,
  Wind,
  Brain,
  Heart,
  Moon,
  Leaf,
} from 'lucide-react';

// Import images 
import remedialImage from '@/assets/images/remedial-massage.png';
import deepTissueImage from '@/assets/images/deep-tissue.png';
import sportsImage from '@/assets/images/sports-massage.png';
import pregnancyImage from '@/assets/images/pregnancy-massage.png';
import lymphaticImage from '@/assets/images/lymphatic-drainage.png';
import aromatherapyImage from '@/assets/images/aromatherapy.jpg';
import infantImage from '@/assets/images/infant-massage.png';
import indianHeadImage from '@/assets/images/indian-head-massage.png';
import thaiImage from '@/assets/images/thai-massage.png';
import agedCareImage from '@/assets/images/aged-care.png';
import palliativeImage from '@/assets/images/palliative-care.png';
import bereavementImage from '@/assets/images/bereavement-massage.png';

// Fallback image if specific image is not available
export const fallbackImage = '@/assets/images/placeholder.svg';

export const servicesData = [
  {
    id: 'remedial',
    icon: Activity,
    title: 'Remedial Massage',
    description:
      'Focuses on fixing underlying issues, whether they are related to muscle injuries, postural imbalances, or chronic pain. Offering long-term benefits that improve recovery and mobility, reduced pain and restore proper function and range of motion.',
    category: 'Therapeutic',
    image: remedialImage,
  },
  {
    id: 'deep-tissue',
    icon: Scissors,
    title: 'Deep Tissue',
    description:
      'Uses a slow, intense pressure to focus on fascia, knots and adhesions, designed to target deeper layers of muscle and connective tissue. By working on deeper muscle layers, it can release long-held muscle tension and provide lasting relief.',
    category: 'Therapeutic',
    image: deepTissueImage,
  },
  {
    id: 'sports',
    icon: Footprints,
    title: 'Sports Specific',
    description:
      'Uses incredibly effective tools for athletes and individuals involved in physical activity, helping improve flexibility, strength, and overall muscle health. Sports massage is aimed at preventing injury, enhancing performance, and reducing recovery time after physical exertion.',
    category: 'Performance',
    image: sportsImage,
  },
  {
    id: 'pregnancy',
    icon: Baby,
    title: 'Pregnancy Massage',
    description:
      'A specialised form of massage therapy designed for expectant mothers. Side laying, to ensure comfort and safety, gentle strokes and kneading are applied to relieve common pregnancy discomforts such as pain caused by posture changes and swollen feet. (Recommended after the first trimester).',
    category: 'Specialized',
    image: pregnancyImage,
  },
  {
    id: 'lymphatic',
    icon: Droplets,
    title: 'Lymphatic Drainage',
    description:
      'A gentle, yet powerful technique aimed at stimulating the lymphatic system to encourage the removal of toxins, waste, and excess fluids from the body. It is particularly useful in boosting immune function, reducing swelling, and enhancing overall health.',
    category: 'Therapeutic',
    image: lymphaticImage,
  },
  {
    id: 'aromatherapy',
    icon: Flame,
    title: 'Aromatherapy and Hot Stones',
    description:
      'A holistic therapy that blends the benefits of massage with the therapeutic properties of essential oils. Hot stones work to ease muscle tension and pain, while essential oils target specific physical or emotional concerns. The combination promotes a deep sense of relaxation.',
    category: 'Holistic',
    image: aromatherapyImage,
  },
  {
    id: 'infant',
    icon: Heart,
    title: 'Infant/Toddler/Child Massage',
    description:
      'Helps you incorporate nurturing touch into your daily routine. Techniques of soft, gentle strokes aim to strengthen the bond between child and parent by encouraging the release of oxytocin. (Recommended from 2 weeks, once umbilical stump has fallen off).',
    category: 'Specialized',
    image: infantImage,
  },
  {
    id: 'indian-head',
    icon: Brain,
    title: 'Indian Head Massage',
    description:
      'An ancient and powerful healing practice with deep roots in Ayurvedic tradition. By focusing on the head, neck, shoulders and upper back, it helps to relieve stress, improve circulation, support hair health, and boost overall well-being.',
    category: 'Holistic',
    image: indianHeadImage,
  },
  {
    id: 'thai',
    icon: Wind,
    title: 'Thai Massage',
    description:
      'An ancient healing technique that combines elements of stretching, gentle rhythmic pressure, and musculoskeletal manipulation to promote health and relaxation. Performed on a soft mattress on the floor, the yoga-like stretches increase flexibility and improve range of motion.',
    category: 'Holistic',
    image: thaiImage,
  },
  {
    id: 'aged-care',
    icon: Moon,
    title: 'Aged Care',
    description:
      'Treatments improve the quality of life for elderly individuals, particularly those in nursing or aged care homes. Promoting a sense of calm by reducing stress and agitation and alleviating feelings of loneliness, depression, and anxiety.',
    category: 'Specialized',
    image: agedCareImage,
  },
  {
    id: 'palliative',
    icon: Leaf,
    title: 'Palliative Care',
    description:
      'Treatments aimed at improving the quality of life for those with serious, chronic, or terminal conditions, focusing on comfort, symptom management, and emotional support. Eases pain and discomfort while maintaining a sense of dignity and independence.',
    category: 'Specialized',
    image: palliativeImage,
  },
  {
    id: 'bereavement',
    icon: Heart,
    title: 'Bereavement Massage',
    description:
      'A peaceful massage for people in their early days, weeks and months of grieving. This type of massage can be a powerful component of self-care in meeting you right where you are during the stressful and sensitive time in your grief journey.',
    category: 'Specialized',
    image: bereavementImage,
  },
];

export const pricingData = [
  {
    duration: '60 Minutes',
    price: '£80',
    description: 'Perfect for targeted relief and maintenance',
  },
  {
    duration: '90 Minutes',
    price: '£110',
    description: 'Ideal for comprehensive treatment and relaxation',
  },
  {
    duration: '120 Minutes',
    price: '£130',
    description: 'Ultimate deep tissue and full body experience',
  },
];
