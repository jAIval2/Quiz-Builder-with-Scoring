import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: '"In our long association with Novalab the attribute which we admire most, is their passion for excellence. This passion is exemplified in a unique focus for quality both in their products as well as service, patients\' convenience and comfort."',
    author: 'Jennifer Lee',
    role: 'First Time Patient',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative Quote Background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-5">
        <Quote className="w-96 h-96 text-gray-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm mb-2">Testimonial</p>
          <h2 className="text-3xl text-[#377A97]">What Our Patients Say</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="mb-8">
                <Quote className="w-16 h-16 text-[#63D8A5] mx-auto mb-6 opacity-50" />
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
              
              <div>
                <h3 className="text-gray-900 mb-1">{testimonial.author}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 rounded-full bg-[#63D8A5]" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
