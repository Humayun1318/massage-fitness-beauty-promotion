import type { Membership } from '@/types';

export const memberships: Membership[] = [
  {
    title: 'Starter',
    price: '$29/mo',
    benefits: ['Gym access', 'Free orientation', 'Community support']
  },
  {
    title: 'Performance',
    price: '$49/mo',
    benefits: ['Unlimited classes', 'Locker access', 'Nutrition guide']
  },
  {
    title: 'Elite',
    price: '$79/mo',
    benefits: ['Personal training', 'Wellness plan', 'Priority support']
  }
];
