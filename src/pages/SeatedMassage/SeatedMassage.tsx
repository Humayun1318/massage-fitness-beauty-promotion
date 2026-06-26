import { motion } from 'framer-motion';
import { Briefcase, Users, Home, Award, Zap, Check } from 'lucide-react';

// Import images
import officeImage from '@/assets/images/choose.png';
import sportsImage from '@/assets/images/benefit.png';
import homeImage from '@/assets/images/benefit2.png';
import { ImageWithContent } from './sections/ImageWithContent';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ContactForm } from '@/components/forms/ContactForm';

export default function SeatedMassagePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Seated Massage
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional mobile seated massage services for offices, events, and home
          </p>
        </motion.div>

        {/* SECTION 1: Why Choose - Image LEFT, Content RIGHT */}
        <section className="mb-8">
          <ImageWithContent
            image={officeImage}
            imageAlt="Seated Massage"
            title="Why Choose a Mobile Therapist for Seated Massage?"
            icon={<Award size={24} className="text-cyan-600 dark:text-cyan-400" />}
            imagePosition="left"
            index={0}
          >
            <p>
              Convenience and Accessibility: Mobile therapists make it easy for individuals to
              receive a massage wherever they are, without the need to travel to a spa or clinic.
            </p>
            <p>
              Time-Saving: Busy people can schedule sessions around their lifestyle, whether it's
              during a break at work, after a workout, or at home.
            </p>
            <p>
              Customisable Treatments: Mobile therapists often tailor treatments to meet the
              specific needs of their clients, whether they need deep relaxation or relief from
              tension.
            </p>
            <p>
              Comfort and Privacy: Having a therapist come to you offers a more personalized,
              private, and comfortable experience.
            </p>
          </ImageWithContent>
        </section>

        {/* SECTION 2: Benefits Across Settings - Image RIGHT, Content LEFT */}
        <section className="mb-8">
          <ImageWithContent
            image={sportsImage}
            imageAlt="Benefits of Seated Massage"
            title="Benefits of Seated Massage Across Different Settings"
            icon={<Zap size={24} className="text-cyan-600 dark:text-cyan-400" />}
            imagePosition="right"
            index={1}
          >
            <p>
              Stress Relief: In every setting—whether home, office, hotel, or sports event—seated
              massage helps alleviate stress and promotes relaxation.
            </p>
            <p>
              Improved Posture and Flexibility: Regular seated massages can help correct postural
              imbalances caused by sitting for long hours or strenuous activity.
            </p>
            <p>
              Increased Circulation: Helps promote blood flow, easing muscle stiffness and improving
              overall circulation.
            </p>
          </ImageWithContent>
        </section>

        {/* SECTION 3: Benefits - Image LEFT, Content RIGHT */}
        <section className="mb-16">
          <ImageWithContent
            image={homeImage}
            imageAlt="Benefits of Seated Massage"
            title="Benefits"
            icon={<Check size={24} className="text-cyan-600 dark:text-cyan-400" />}
            imagePosition="left"
            index={2}
          >
            <p>Quick stress relief.</p>
            <p>Increased circulation.</p>
            <p>Reduced muscle tension, especially in the upper back, neck, and shoulders.</p>
            <p>
              Convenience: The comfort of receiving a professional massage in the privacy of your
              home.
            </p>
            <p>Ideal for Relaxation: Great for unwinding after a long day or a stressful week.</p>
            <p>
              How it Works: A mobile therapist can come to your home with all necessary equipment,
              offering a peaceful and relaxing experience without the need to travel.
            </p>
          </ImageWithContent>
        </section>

        {/* SECTION 4: Pricing - No Images */}
        <section className="mb-16">
          <SectionHeader title="Pricing" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 sm:p-8 text-center">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Minimum
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">2 hours</div>
                <div className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400">£150</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border-2 border-cyan-400 dark:border-cyan-500 bg-white dark:bg-slate-800 shadow-lg shadow-cyan-500/10 scale-100 md:scale-105 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
              <div className="p-6 sm:p-8 text-center">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/30 dark:to-blue-500/30 rounded-full text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                  Most Popular
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Extra Hour
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">Each</div>
                <div className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400">£50</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 sm:p-8 text-center">
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Maximum
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">8 Hours</div>
              </div>
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            During seated massage, the client sits in a specially designed chair, fully clothed,
            while the therapist works on key areas like the neck, shoulders, back, head, arms, and
            hands.
          </p>
        </section>

        {/* SECTION 5: At the Office - No Images, Just Text */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Briefcase size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">At the Office</h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>
                Boost Productivity: A popular way for companies to provide wellness benefits to
                employees.
              </p>
              <p>
                Ideal for Desk Workers: Helps alleviate tension from sitting for long periods,
                improving posture and relieving neck and shoulder strain. 10–30 minute sessions for
                each employee that fit into their daily schedule.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: At Sports Events - No Images, Just Text */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Users size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">At Sports Events</h3>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <p>
                Athletes: Help athletes recover quickly from exertion, reduce muscle soreness, and
                prepare for future activities.
              </p>
              <p>
                Quick Recovery: Relieve muscle tightness, reduce inflammation, and prevent injuries.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: At Home/Hotels - No Images, Just Text */}
        <section>
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 p-2 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10">
                <Home size={24} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">At Home/Hotels</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Relaxation for Travellers:
                </p>
                <p>
                  Regular seated massages can help correct postural imbalances caused by sitting for
                  long hours or strenuous activity.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Convenience and Accessibility:
                </p>
                <p>
                  Making it easy for individuals to receive a massage wherever they are, without the
                  need to travel to a spa or clinic.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">Time-Saving:</p>
                <p>
                  Busy people can schedule sessions around their lifestyle, whether it's during a
                  break at work, after a workout, or at home.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Customizable Treatments:
                </p>
                <p>
                  My treatments are always bespoke to meet the specific needs of the clients,
                  whether they need deep relaxation or rehabilitation.
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Comfort and Privacy:
                </p>
                <p>
                  Coming to you offers a more personalised, private, and comfortable experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className='mt-8'>
          <SectionHeader
            // pill="Spotlight"
            title="Need Help?"
            titleHighlight="Let’s chat"
            // subtitle="Carefully curated treatments that represent the very best of what we offer — each one bespoke, evidence-based, and delivered at your door."
          />
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
