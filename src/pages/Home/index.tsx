import Hero from './sections/Hero';
import ContactPage from '../Contact/Contact';
import Services from './sections/Services';
import OurProcess from './sections/Ourprocess';
import WhyChooseUs from './sections/Whychooseus';
import FeaturedTreatments from './sections/Featuredtreatments';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services/>
      <OurProcess/>
      <WhyChooseUs/>
      <FeaturedTreatments/>
      {/* <About />
      <Services />
      <Memberships />
      <Testimonials />
      <Gallery />
      <ContactCTA /> */}
      <ContactPage />
    </main>
  );
}
