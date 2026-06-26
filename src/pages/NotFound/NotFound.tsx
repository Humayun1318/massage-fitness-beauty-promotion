import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function NotFoundPage() {
  return (
    <Container className="py-20 text-center">
      <div className="mx-auto max-w-2xl space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-600">Page not found</p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-950 dark:text-white">
          404
        </h1>
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
          The page you are looking for does not exist yet. Return to the homepage to continue
          exploring our fitness offerings.
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </Container>
  );
}
