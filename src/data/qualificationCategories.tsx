import { 
  Award,
  Heart,
  Activity,
  Sparkles,
  Shield,
  GraduationCap,
  ZoomIn
} from 'lucide-react';
// Import certificate images - you'll need to add these images
import massageCert1 from '@/assets/images/hero.png';
import massageCert2 from '@/assets/images/hero.png';
import massageCert3 from '@/assets/images/hero.png';
import massageCert4 from '@/assets/images/hero.png';

import fitnessCert1 from '@/assets/images/hero.png';
import fitnessCert2 from '@/assets/images/hero.png';
import fitnessCert3 from '@/assets/images/hero.png';
import fitnessCert4 from '@/assets/images/hero.png';
import fitnessCert5 from '@/assets/images/hero.png';

import beautyCert1 from '@/assets/images/hero.png';
import beautyCert2 from '@/assets/images/hero.png';
import beautyCert3 from '@/assets/images/hero.png';
import beautyCert4 from '@/assets/images/hero.png';
import beautyCert5 from '@/assets/images/hero.png';
import beautyCert6 from '@/assets/images/hero.png';

import firstAidCert1 from '@/assets/images/hero.png';
import firstAidCert2 from '@/assets/images/hero.png';
import firstAidCert3 from '@/assets/images/hero.png';
import firstAidCert4 from '@/assets/images/hero.png';
import firstAidCert5 from '@/assets/images/hero.png';
import firstAidCert6 from '@/assets/images/hero.png';
import firstAidCert7 from '@/assets/images/hero.png';


// Certificate data with images
export const qualificationCategories = [
  {
    id: 'massage',
    title: 'Massage Certificates',
    icon: Heart,
    items: [
      { name: 'Diploma of Indian Head Massage Certificate', image: massageCert1 },
      { name: 'Four Massage Therapy', image: massageCert2 },
      { name: 'Diploma of Remedial Massage', image: massageCert3 },
      { name: 'Diploma of Clinical Aromatherapy', image: massageCert4 }
    ]
  },
  {
    id: 'fitness',
    title: 'Fitness Certificates',
    icon: Activity,
    items: [
      { name: 'Certificate Two in Fitness', image: fitnessCert1 },
      { name: 'Instructing Spin Instructor', image: fitnessCert2 },
      { name: 'Power Plates Instructor', image: fitnessCert3 },
      { name: 'Certificate Three in Fitness', image: fitnessCert4 },
      { name: 'Certificate Four Personal Trainer', image: fitnessCert5 }
    ]
  },
  {
    id: 'beauty',
    title: 'Beauty Certificates',
    icon: Sparkles,
    items: [
      { name: 'Level Two NVQ Diploma in Beauty Therapy', image: beautyCert1 },
      { name: 'Facial treatment', image: beautyCert2 },
      { name: 'Manicure & SPA manicure', image: beautyCert3 },
      { name: 'Pedicure & SPA pedicure', image: beautyCert4 },
      { name: 'Lash & brow treatment', image: beautyCert5 },
      { name: 'Make-up application', image: beautyCert6 }
    ]
  },
  {
    id: 'first-aid',
    title: 'First Aid & Safety',
    icon: Shield,
    items: [
      { name: 'Provide CPR 2016', image: firstAidCert1 },
      { name: 'First aid certificate 2016', image: firstAidCert2 },
      { name: 'Bronze Medallion 2017', image: firstAidCert3 },
      { name: 'First aid certificate 2018', image: firstAidCert4 },
      { name: 'First Aid Certificate 2020', image: firstAidCert5 },
      { name: 'First aid certificate 2021', image: firstAidCert6 },
      { name: 'Mable infection control certificate 2023', image: firstAidCert7 }
    ]
  }
];
