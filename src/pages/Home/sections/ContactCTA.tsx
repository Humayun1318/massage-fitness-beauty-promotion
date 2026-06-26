import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-600 py-20 text-white shadow-soft shadow-brand-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Ready to elevate your routine?</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Book a class or schedule a tour today.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-100/90">
          Our team is ready to introduce you to a stronger fitness plan, supportive coaching, and a community built for progress.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact">
            <Button size="lg">Get in touch</Button>
          </Link>
          <a href="#" className="text-sm font-semibold text-brand-100 hover:text-white">
            View membership options →
          </a>
        </div>
      </div>
    </section>
  );
}
