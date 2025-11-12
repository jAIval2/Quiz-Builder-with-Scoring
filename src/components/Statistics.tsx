import { TestTube } from 'lucide-react';

interface Stat {
  id: number;
  number: string;
  label: string;
}

const stats: Stat[] = [
  { id: 1, number: '500+', label: 'Tests Booked' },
  { id: 2, number: '500+', label: 'Tests Booked' },
  { id: 3, number: '500+', label: 'Tests Booked' },
];

export function Statistics() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#377A97] to-[#2a5f78] rounded-lg flex items-center justify-center flex-shrink-0">
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl text-[#377A97]">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
