import { Container } from '@/components/ui/container';
import { PageBanner } from '@/components/ui/page-banner';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/cards/ServiceCard';

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <PageBanner title="Services" description="A complete set of fitness options and expert coaching." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </Container>
  );
}
