import { SectionTitle } from '@/components/ui/section-title';
import { galleryItems } from '@/data/gallery';
import { GalleryCard } from '@/components/cards/GalleryCard';

export function Gallery() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Gallery" subtitle="A look at our training spaces and member experience." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
