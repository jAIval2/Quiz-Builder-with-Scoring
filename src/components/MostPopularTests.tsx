import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface Test {
  id: number;
  title: string;
  description: string;
  image: string;
}

const tests: Test[] = [
  {
    id: 1,
    title: 'Microbiology Tests',
    description: 'Capitalize On Low Hanging Fruit To Identify A Ballpark Value Added Activity To Beta Test.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
  },
  {
    id: 2,
    title: 'Histopatology Tests',
    description: 'Capitalize On Low Hanging Fruit To Identify A Ballpark Value Added Activity To Beta Test.',
    image: 'https://images.unsplash.com/photo-1583912267550-bc97aff01011?w=600&q=80',
  },
  {
    id: 3,
    title: 'Hemoglobin Tests',
    description: 'Capitalize On Low Hanging Fruit To Identify A Ballpark Value Added Activity To Beta Test.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80',
  },
  {
    id: 4,
    title: 'Biochemistry Tests',
    description: 'Capitalize On Low Hanging Fruit To Identify A Ballpark Value Added Activity To Beta Test.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
  },
];

export function MostPopularTests() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (tests.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (tests.length - 2)) % (tests.length - 2));
  };

  const visibleTests = tests.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-2">Our Tests</p>
          <h2 className="text-3xl text-[#377A97]">Most Popular Tests</h2>
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
            {visibleTests.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={test.image}
                    alt={test.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-800 mb-3">{test.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{test.description}</p>
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
      </div>
    </section>
  );
}
