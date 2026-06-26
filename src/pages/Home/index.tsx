// import { About } from '@/pages/Home/sections/About';
// import { ContactCTA } from '@/pages/Home/sections/ContactCTA';
// import { Gallery } from '@/pages/Home/sections/Gallery';
// import { Memberships } from '@/pages/Home/sections/Memberships';
// import { Services } from '@/pages/Home/sections/Services';
// import { Testimonials } from '@/pages/Home/sections/Testimonials';
// import Hero from './sections/Hero';


// export default function Home() {
//   return (
//     <main className="space-y-20">
//       <Hero />
//       <About />
//       <Services />
//       <Memberships />
//       <Testimonials />
//       <Gallery />
//       <ContactCTA />
//     </main>
//   );
// }
import { About } from '@/pages/Home/sections/About';
import { ContactCTA } from '@/pages/Home/sections/ContactCTA';
import { Gallery } from '@/pages/Home/sections/Gallery';
import { Memberships } from '@/pages/Home/sections/Memberships';
import { Services } from '@/pages/Home/sections/Services';
import { Testimonials } from '@/pages/Home/sections/Testimonials';
import Hero from './sections/Hero';

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <About />
      <Services />
      <Memberships />
      <Testimonials />
      <Gallery />
      <ContactCTA />
    </main>
  );
}