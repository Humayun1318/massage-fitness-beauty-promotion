// import { useEffect, useState } from 'react';
// import { Moon, Sun } from 'lucide-react';
// import { motion } from 'framer-motion';

// export function ThemeToggle() {
//   const [isDark, setIsDark] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return document.documentElement.classList.contains('dark');
//     }
//     return false;
//   });

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={toggleTheme}
//       className="p-2 rounded-full hover:bg-white/10 transition-colors relative"
//       aria-label="Toggle theme"
//     >
//       <motion.div
//         initial={false}
//         animate={{ rotate: isDark ? 360 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {isDark ? (
//           <Sun size={18} className="text-amber-400" />
//         ) : (
//           <Moon size={18} className="text-white/80" />
//         )}
//       </motion.div>
//     </motion.button>
//   );
// }
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // Default to dark
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors relative"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <Sun size={18} className="text-amber-400" />
        ) : (
          <Moon size={18} className="text-gray-700 dark:text-white/80" />
        )}
      </motion.div>
    </motion.button>
  );
}