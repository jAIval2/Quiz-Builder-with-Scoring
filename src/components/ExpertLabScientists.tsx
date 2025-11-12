import { Button } from './ui/button';

export function ExpertLabScientists() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-sm mb-2">Book Now</p>
          <h2 className="text-3xl text-[#377A97] mb-4">
            Testing By Our Expert Lab Scientists
          </h2>
          <p className="text-gray-600 mb-8">
            Bring to the table win-win survival strategies to ensure proactive domination and at the end of the day.
          </p>
          <Button className="bg-[#377A97] hover:bg-[#2a5f78] text-white px-8">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
