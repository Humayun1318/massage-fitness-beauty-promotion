import { Container } from '@/components/ui/container';
import { PageBanner } from '@/components/ui/page-banner';
import { ContactForm } from '@/components/forms/ContactForm';
import ContactMap from '@/components/forms/ContactMap';

export default function ContactPage() {
  return (
    <Container className="py-20" id="contact">
      <PageBanner
        title="Need Help? Let’s chat"
        description="Send a message and we will help you find the right membership."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_0.95fr]">
        <ContactForm />
        {/* <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Get in touch</h3>
          <p className="leading-7 text-slate-600 dark:text-slate-400">
            Have questions about membership, coaching, or classes? Drop us a message and we’ll respond quickly.
          </p>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p><strong>Address:</strong> 123 Fitness Avenue, Athlete City</p>
            <p><strong>Email:</strong> hello@powerfit.com</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
          </div>
        </div> */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="450"
          style={{
            border: 0,
            borderRadius: '24px',
          }}
          loading="lazy"
          allowFullScreen
        /> */}
        <ContactMap />
      </div>
    </Container>
  );
}
