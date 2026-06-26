import { Container } from '@/components/ui/container';
import { PageBanner } from '@/components/ui/page-banner';
import { galleryItems } from '@/data/gallery';
import { GalleryCard } from '@/components/cards/GalleryCard';

export default function GalleryPage() {
  return (
    <Container className="py-20">
      <PageBanner title="Gallery" description="Browse our studios, classes, and member experience." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <GalleryCard key={item.title} item={item} />
        ))}
      </div>
    </Container>
  );
}
