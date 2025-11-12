import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface Risk {
  id: number;
  title: string;
  description: string;
  image: string;
}

const risks: Risk[] = [
  {
    id: 1,
    title: 'Diabetes',
    description: 'Capitalize On Low Hanging Fruit To Identify A Ballpark Value Added Activity To Beta Test.',
    image: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=600&q=80',
  },
  {
    id: 2,
    title: 'Heart',
    description: 'Capitalize On Low Hanging Fruit To Identify A Ballpark Value Added Activity To Beta Test.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80',
  },
  {
    id: 3,
    title: 'Thyroid',
    description: 'Capitalize On Low Hanging Fruit To Identify A Ballpark Value Added Activity To Beta Test.',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80',
  },
  {
    id: 4,
    title: 'Liver',
    description: 'Capitalize On Low Hanging Fruit To Identify A Ballpark Value Added Activity To Beta Test.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
];

export function BrowseTestByRisks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (risks.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (risks.length - 2)) % (risks.length - 2));
  };

  const visibleRisks = risks.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-2">Our Tests</p>
          <h2 className="text-3xl text-[#377A97]">Browse Test By Risks</h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 -ml-4"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 -mr-4"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {visibleRisks.map((risk) => (
              <div
                key={risk.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={risk.image}
                    alt={risk.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl text-white mb-2">{risk.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{risk.description}</p>
                  <Button
                    variant="link"
                    className="text-[#63D8A5] hover:text-[#4dc490] p-0"
                  >
                    FIND OUT MORE →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-[#63D8A5] hover:bg-[#4dc490] text-white px-8">
            View Details
          </Button>
        </div>
      </div>
    </section>
  );
}
