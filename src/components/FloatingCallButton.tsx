import { Phone } from 'lucide-react';

export function FloatingCallButton() {
  return (
    <button
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#63D8A5] hover:bg-[#4dc490] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
}