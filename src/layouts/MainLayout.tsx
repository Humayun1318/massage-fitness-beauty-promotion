import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { PageSkeleton } from '@/components/ui/PageSkeleton';
import { Footer } from '@/components/footer/Footer';
import DocumentTitle from '@/components/shared/DocumentTitle';

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <DocumentTitle />
      <Navbar />
      <main className="flex-1">
        {/* Single Suspense for all lazy-loaded routes */}
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
