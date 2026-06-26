import { SectionTitle } from '@/components/ui/section-title';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/cards/ServiceCard';

export function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our services" subtitle="Professional fitness offerings built for results." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
