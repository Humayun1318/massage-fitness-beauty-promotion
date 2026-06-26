import { SectionTitle } from '@/components/ui/section-title';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/cards/TestimonialCard';

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Member stories" subtitle="Real progress from our training community." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
