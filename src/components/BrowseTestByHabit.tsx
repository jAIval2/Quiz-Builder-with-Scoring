import { Button } from './ui/button';

interface Habit {
  name: string;
  icon: string;
}

const habits: Habit[] = [
  { name: 'Alcoholism', icon: '🍺' },
  { name: 'Stress', icon: '😰' },
  { name: 'No Sleep', icon: '😴' },
  { name: 'Zero Exercise', icon: '🛋️' },
  { name: 'Junk Food', icon: '🍔' },
  { name: 'Smoking', icon: '🚬' },
  { name: 'Poor Nutrition', icon: '📋' },
  { name: 'Poor Eating', icon: '🍽️' },
  { name: 'Low Iron Diet', icon: '🥗' },
  { name: 'Anger', icon: '😡' },
  { name: 'Heartburn', icon: '❤️‍🔥' },
  { name: 'Medicine Overuse', icon: '💊' },
];

export function BrowseTestByHabit() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#377A97] to-[#2a5f78] overflow-hidden">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-teal-100 text-sm mb-2">Our Tests</p>
          <h2 className="text-3xl text-white">Browse Test By Habit</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8 max-w-5xl mx-auto">
          {habits.map((habit, index) => (
            <button
              key={index}
              className="bg-white p-6 hover:shadow-lg transition-all hover:scale-105 flex flex-col items-center justify-center gap-3 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">
                {habit.icon}
              </div>
              <span className="text-gray-700 text-sm text-center">{habit.name}</span>
            </button>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#63D8A5] hover:bg-[#4dc490] text-white px-8">
            View Details
          </Button>
        </div>
      </div>

      {/* Wavy Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}