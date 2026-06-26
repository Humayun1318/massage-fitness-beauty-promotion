import { pricingData } from '@/data/services';
import { Clock, DollarSign } from 'lucide-react';



export function PricingSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Massage Pricing
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Choose the session length that works best for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-2xl border transition-all duration-300
              ${index === 1 
                ? 'border-cyan-400 dark:border-cyan-500 shadow-lg shadow-cyan-500/10 scale-100 md:scale-105' 
                : 'border-gray-200 dark:border-slate-700 hover:shadow-lg'
              }
              bg-white dark:bg-slate-800 hover:transform hover:-translate-y-1
            `}
          >
            {index === 1 && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
            )}
            
            <div className="p-6 sm:p-8">
              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                <Clock size={18} />
                <span className="text-sm font-medium">{item.duration}</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-1 mb-3">
                <DollarSign size={28} className="text-cyan-500 dark:text-cyan-400" />
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {item.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>

              {/* Popular Badge */}
              {index === 1 && (
                <div className="mt-4 inline-block px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/30 dark:to-blue-500/30 rounded-full">
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    Most Popular
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}