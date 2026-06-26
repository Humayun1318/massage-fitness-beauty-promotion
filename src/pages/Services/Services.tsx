import { useState } from 'react';
import { PricingSection } from './sections/PricingSection';
import { ServicesList } from './sections/ServicesList';
import { ServicesFilter } from './sections/ServicesFilter';
import ContactPage from '../Contact/Contact';
import { ContactForm } from '@/components/forms/ContactForm';
import { SectionHeader } from '@/components/shared/SectionHeader';
// import { ServicesFilter } from './sections/ServicesFilter';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional massage therapy services tailored to your needs
          </p>
        </div>

        {/* Pricing Section */}
        <PricingSection />

        {/* Services Section with Filter */}
        <section>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">All Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our comprehensive range of professional massage therapies
            </p>
          </div>

          {/* Filter Component */}
          <ServicesFilter activeCategory={activeCategory} onFilterChange={setActiveCategory} />

          {/* Services List with Filter */}
          <ServicesList category={activeCategory} />
        </section>

        {/* contact form */}
        <div className="mt-8">
          <SectionHeader
            // pill="Spotlight"
            title="Need Help?"
            titleHighlight="Let’s chat"
            // subtitle="Carefully curated treatments that represent the very best of what we offer — each one bespoke, evidence-based, and delivered at your door."
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
