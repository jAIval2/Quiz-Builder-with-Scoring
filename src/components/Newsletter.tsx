import { Button } from './ui/button';
import { Input } from './ui/input';

export function Newsletter() {
  return (
    <section className="relative py-8 bg-[#377A97] overflow-hidden">
      {/* Decorative blob */}
      <div 
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#63D8A5] rounded-full opacity-80"
        style={{ filter: 'blur(60px)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
          <h3 className="text-white text-xl whitespace-nowrap">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="flex gap-2 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white min-w-[300px]"
            />
            <Button className="bg-[#377A97] hover:bg-[#2a5f78] text-white border-2 border-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}