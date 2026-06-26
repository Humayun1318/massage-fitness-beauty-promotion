// import { Outlet } from 'react-router-dom';
// import { Footer } from '@/components/footer/Footer';
// import { Navbar } from '@/components/navigation/Navbar';
// // import { Navbar } from '@/components/navigation/Navbar';

// export default function MainLayout() {
//   return (
//     <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
//       <Navbar />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// import { Outlet } from 'react-router-dom';
// import { Navbar } from '@/components/navigation/Navbar';
// // import { Footer } from '@/components/Footer';
// import { ScrollToTop } from '@/components/ui/ScrollToTop';
// import { useScrollToTop } from '@/hooks/useScrollToTop';
// import { Footer } from '@/components/footer/Footer';

// export default function MainLayout() {
//   useScrollToTop();

//   return (
//     <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
//       <Navbar />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { PageSkeleton } from '@/components/ui/PageSkeleton';
import { Footer } from '@/components/footer/Footer';

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
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