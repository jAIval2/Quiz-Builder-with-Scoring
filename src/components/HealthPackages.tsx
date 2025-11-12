import { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

interface Package {
  id: number;
  name: string;
  tests: number;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
}

const packages: Package[] = [
  {
    id: 1,
    name: 'Full Body Health Checkup',
    tests: 78,
    originalPrice: 3000,
    discountedPrice: 1300,
    discount: 80,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
  },
  {
    id: 2,
    name: 'Full Body Health Checkup',
    tests: 79,
    originalPrice: 3000,
    discountedPrice: 1300,
    discount: 80,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80',
  },
  {
    id: 3,
    name: 'Full Body Health Checkup',
    tests: 76,
    originalPrice: 3000,
    discountedPrice: 1300,
    discount: 80,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&q=80',
  },
  {
    id: 4,
    name: 'Diabetes Care Package',
    tests: 45,
    originalPrice: 2500,
    discountedPrice: 1100,
    discount: 75,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80',
  },
];

export function HealthPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (packages.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (packages.length - 2)) % (packages.length - 2));
  };

  const visiblePackages = packages.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-2">Health Packages</p>
          <h2 className="text-3xl text-[#377A97]">Popular Health Check Packs</h2>
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
            {visiblePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-[#377A97] text-white px-4 py-2 text-sm z-10"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                    }}
                  >
                    {pkg.discount}% off
                  </div>
                  <div className="relative h-48 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <h3 className="text-xl text-center mb-2">{pkg.name}</h3>
                      <p className="text-green-400 text-sm mb-4">{pkg.tests} Tests</p>
                      <div className="text-center">
                        <p className="line-through text-red-400 text-sm">
                          ₹ {pkg.originalPrice}/-
                        </p>
                        <p className="text-2xl">₹ {pkg.discountedPrice}/-</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-[#63D8A5] hover:bg-[#4dc490] text-white py-6">
                  Add To Cart <ShoppingCart className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
