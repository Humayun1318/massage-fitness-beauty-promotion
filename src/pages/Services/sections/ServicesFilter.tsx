interface ServicesFilterProps {
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

const categories = ['All', 'Therapeutic', 'Performance', 'Holistic', 'Specialized'];

export function ServicesFilter({ activeCategory, onFilterChange }: ServicesFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${activeCategory === category
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/20'
              : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}