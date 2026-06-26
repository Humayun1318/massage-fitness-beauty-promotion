import { Card } from '@/components/ui/card';
import type { GalleryItem } from '@/types';

interface GalleryCardProps {
  item: GalleryItem;
}

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <Card className="flex h-60 flex-col justify-end overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80')" }}>
      <div className="space-y-2 rounded-3xl bg-slate-950/40 p-5 backdrop-blur-sm">
        <p className="text-lg font-semibold">{item.title}</p>
        <p className="text-sm text-slate-100/80">{item.subtitle}</p>
      </div>
    </Card>
  );
}
