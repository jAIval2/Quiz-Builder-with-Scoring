import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="relative flex items-center min-h-[400px]">
          {/* Left Content with Diagonal Background */}
          <div className="relative z-10 w-full lg:w-1/2 px-8 py-12">
            <div className="absolute inset-0 bg-[#377A97] -left-12 right-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
              }}
            />
            
            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl text-white mb-4">
                Best PET CT Services
                <br />
                At Affordable Prices
              </h2>
              <p className="text-white/90 mb-6 text-sm">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
              <Button className="bg-white text-[#377A97] hover:bg-gray-100">
                Check Out Now
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="hidden lg:block w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
              alt="Medical Equipment"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
