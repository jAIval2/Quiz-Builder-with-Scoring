import { Button } from './ui/button';

export function AppComingSoon() {
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

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[#63D8A5] rounded-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl text-white mb-6">
              Our App Is
              <br />
              <span className="text-5xl">COMING SOON</span>
            </h2>
            <p className="text-white/90 mb-8 max-w-md">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy.
            </p>
            <Button className="bg-[#63D8A5] hover:bg-[#4dc490] text-white px-8">
              Get notified
            </Button>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[500px] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#377A97] mb-2">
                      <h3 className="text-xl">Book Your</h3>
                      <h3 className="text-xl text-[#63D8A5]">Lab</h3>
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl" />
              </div>
              
              {/* Decorative Phone in background */}
              <div className="absolute -bottom-8 -right-8 w-48 h-96 bg-[#63D8A5] rounded-[2.5rem] opacity-50 -z-10" />
            </div>
          </div>
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
